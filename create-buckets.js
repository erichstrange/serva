import { S3Client, CreateBucketCommand, PutBucketCorsCommand, PutBucketEncryptionCommand, PutBucketVersioningCommand, PutBucketPolicyCommand, HeadBucketCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize S3 client
const s3Client = new S3Client({
  region: process.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY
  }
});

// Check if bucket exists
async function bucketExists(bucketName) {
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
    return true;
  } catch (error) {
    if (error.$metadata?.httpStatusCode === 404) {
      return false;
    }
    throw error;
  }
}

// Create and configure bucket
async function createAndConfigureBucket(bucketName) {
  try {
    // Check if bucket exists
    const exists = await bucketExists(bucketName);
    if (exists) {
      console.log(`Bucket ${bucketName} already exists`);
      return true;
    }

    // Create bucket
    await s3Client.send(new CreateBucketCommand({
      Bucket: bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.VITE_AWS_REGION === 'us-east-1' ? undefined : process.env.VITE_AWS_REGION
      }
    }));
    console.log(`Created bucket: ${bucketName}`);

    // Configure CORS
    await s3Client.send(new PutBucketCorsCommand({
      Bucket: bucketName,
      CORSConfiguration: {
        CORSRules: [{
          AllowedHeaders: ['*'],
          AllowedMethods: ['GET', 'PUT', 'POST', 'DELETE'],
          AllowedOrigins: ['*'],
          ExposeHeaders: ['ETag'],
          MaxAgeSeconds: 3000
        }]
      }
    }));

    // Configure encryption
    await s3Client.send(new PutBucketEncryptionCommand({
      Bucket: bucketName,
      ServerSideEncryptionConfiguration: {
        Rules: [{
          ApplyServerSideEncryptionByDefault: {
            SSEAlgorithm: 'AES256'
          }
        }]
      }
    }));

    // Enable versioning
    await s3Client.send(new PutBucketVersioningCommand({
      Bucket: bucketName,
      VersioningConfiguration: {
        Status: 'Enabled'
      }
    }));

    // Set bucket policy
    const bucketPolicy = {
      Version: '2012-10-17',
      Statement: [{
        Sid: 'AllowAuthenticatedAccess',
        Effect: 'Allow',
        Principal: '*',
        Action: [
          's3:GetObject',
          's3:PutObject',
          's3:DeleteObject'
        ],
        Resource: [
          `arn:aws:s3:::${bucketName}`,
          `arn:aws:s3:::${bucketName}/*`
        ]
      }]
    };

    await s3Client.send(new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: JSON.stringify(bucketPolicy)
    }));

    console.log(`Successfully configured bucket: ${bucketName}`);
    return true;
  } catch (error) {
    console.error(`Error creating/configuring bucket ${bucketName}:`, error);
    return false;
  }
}

// Main function
async function main() {
  // Validate environment variables
  const requiredVars = [
    'VITE_AWS_REGION',
    'VITE_AWS_ACCESS_KEY_ID',
    'VITE_AWS_SECRET_ACCESS_KEY',
    'VITE_AWS_BUCKET_NAME'
  ];

  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars.join(', '));
    process.exit(1);
  }

  const baseBucketName = process.env.VITE_AWS_BUCKET_NAME;
  const suffixes = ['raw', 'processed', 'embeddings'];

  console.log('Creating and configuring buckets...');
  
  for (const suffix of suffixes) {
    const bucketName = `${baseBucketName}-${suffix}`;
    await createAndConfigureBucket(bucketName);
  }
}

// Run the script
main().catch(error => {
  console.error('Failed to create buckets:', error);
  process.exit(1);
});