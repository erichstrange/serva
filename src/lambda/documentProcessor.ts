import { S3Event } from 'aws-lambda';
import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { TextractClient, DetectDocumentTextCommand } from '@aws-sdk/client-textract';

const s3Client = new S3Client({ region: process.env.AWS_REGION });
const textractClient = new TextractClient({ region: process.env.AWS_REGION });

export const handler = async (event: S3Event) => {
  const s3Record = event.Records[0].s3;
  const bucket = s3Record.bucket.name;
  const key = decodeURIComponent(s3Record.object.key);
  const tenantId = key.split('/')[1]; // Extract tenant ID from path

  try {
    // Get the document from S3
    const getObjectResponse = await s3Client.send(
      new GetObjectCommand({ Bucket: bucket, Key: key })
    );

    // Extract text using Textract
    const textractResponse = await textractClient.send(
      new DetectDocumentTextCommand({
        Document: {
          Bytes: await streamToBuffer(getObjectResponse.Body)
        }
      })
    );

    // Process the extracted text
    const extractedText = textractResponse.Blocks
      ?.filter(block => block.BlockType === 'LINE')
      .map(block => block.Text)
      .join('\n');

    // Save processed text
    const processedKey = key.replace('/raw/', '/processed/');
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: processedKey,
        Body: extractedText,
        Metadata: {
          'tenant-id': tenantId,
          'source-document': key
        }
      })
    );

    // Trigger embedding generation
    return {
      tenantId,
      processedKey,
      status: 'success'
    };
  } catch (error) {
    console.error('Error processing document:', error);
    throw error;
  }
};

const streamToBuffer = async (stream: any): Promise<Buffer> => {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
};