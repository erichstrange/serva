import { APIGatewayEvent } from 'aws-lambda';
import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { DynamoDBClient, QueryCommand } from '@aws-sdk/client-dynamodb';

const s3Client = new S3Client({ region: process.env.AWS_REGION });
const bedrockClient = new BedrockRuntimeClient({ region: process.env.AWS_REGION });
const dynamoClient = new DynamoDBClient({ region: process.env.AWS_REGION });

export const handler = async (event: APIGatewayEvent) => {
  const { tenantId, query } = JSON.parse(event.body || '{}');
  const bucket = process.env.BUCKET_NAME;

  try {
    // Generate query embedding
    const queryEmbeddingResponse = await bedrockClient.send(
      new InvokeModelCommand({
        modelId: 'amazon.titan-embed-text-v1',
        contentType: 'application/json',
        accept: 'application/json',
        body: JSON.stringify({
          inputText: query
        })
      })
    );

    const queryEmbedding = JSON.parse(
      new TextDecoder().decode(queryEmbeddingResponse.body)
    ).embedding;

    // List all embeddings for the tenant
    const embeddingsPrefix = `tenants/${tenantId}/embeddings/`;
    const listResponse = await s3Client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: embeddingsPrefix
      })
    );

    // Get and compare embeddings
    const results = await Promise.all(
      (listResponse.Contents || []).map(async (object) => {
        const response = await s3Client.send(
          new GetObjectCommand({
            Bucket: bucket,
            Key: object.Key!
          })
        );

        const content = JSON.parse(
          await streamToString(response.Body)
        );

        const similarity = cosineSimilarity(queryEmbedding, content.embeddings);

        return {
          text: content.text,
          similarity,
          metadata: content.metadata
        };
      })
    );

    // Sort by similarity and return top results
    const topResults = results
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5);

    return {
      statusCode: 200,
      body: JSON.stringify(topResults)
    };
  } catch (error) {
    console.error('Error processing search:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Search failed' })
    };
  }
};

const streamToString = async (stream: any): Promise<string> => {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString('utf-8');
};

const cosineSimilarity = (a: number[], b: number[]): number => {
  const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};