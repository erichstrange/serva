import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: process.env.AWS_REGION });
const bedrockClient = new BedrockRuntimeClient({ region: process.env.AWS_REGION });

export const handler = async (event: any) => {
  const { tenantId, processedKey } = event;
  const bucket = process.env.BUCKET_NAME;

  try {
    // Get processed text from S3
    const getObjectResponse = await s3Client.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: processedKey
      })
    );

    const text = await streamToString(getObjectResponse.Body);

    // Generate embeddings using Amazon Bedrock
    const response = await bedrockClient.send(
      new InvokeModelCommand({
        modelId: 'amazon.titan-embed-text-v1',
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          inputText: text
        })
      })
    );

    const embeddings = JSON.parse(
      new TextDecoder().decode(response.body)
    ).embedding;

    // Store embeddings
    const embeddingKey = processedKey.replace('/processed/', '/embeddings/');
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: embeddingKey,
        Body: JSON.stringify({
          text,
          embeddings,
          metadata: {
            tenantId,
            sourceKey: processedKey
          }
        }),
        ContentType: 'application/json'
      })
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Embeddings generated successfully',
        embeddingKey
      })
    };
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw error;
  }
};

const streamToString = async (stream: any): Promise<string> => {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf-8');
};