import { 
  S3Client, 
  CreateBucketCommand,
  PutBucketCorsCommand,
  PutBucketEncryptionCommand,
  PutBucketVersioningCommand,
  PutBucketPolicyCommand,
  HeadBucketCommand
} from '@aws-sdk/client-s3';

// Initialize S3 client with environment variables
const s3Client = new S3Client({
  region: process.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY!
  }
});

const baseBucketName = process.env.VITE_AWS_BUCKET_NAME;
const bucketSuffixes = ['raw', 'processed', 'embeddings'];

// CORS configuration
const corsConfig = {
  CORSRules: [
    {
      AllowedHeaders: ['*'],
      AllowedMethods: ['GET', 'PUT', 'POST', 'DELETE'],
      AllowedOrigins: ['*'],
      ExposeHeaders: ['ETag'],
      MaxAgeSeconds: 3000
    }
  ]
};

// Encryption configuration
const encryptionConfig = {
  ServerSideEncryptionConfiguration: {
    Rules: [
      {
        ApplyServerSideEncryptionByDefault: {
          SSEAlgorithm: 'AES256'
        }
      }
    ]
  }
};

// Versioning configuration
const versioningConfig = {
  Status: 'Enabled'
};

// Create bucket policy
const createBucketPolicy = (bucketName: string) => ({
  Version: '2012-10-17',
  Statement: [
    {
      Sid: 'AllowAuthenticatedAccess',
      Effect: 'Allow',
      Principal: '*',
      Action: ['s3:GetObject', 's3:PutObject', 's3:DeleteObject'],
      Resource: [`arn:aws:s3:::${bucketName}/*`]
    }
  ]
});

// Check if bucket exists
async function bucketExists(bucketName: string): Promise<boolean> {
  try {
    await s3Client.send(new HeadBucketCommand({ Bucket: bucketName }));
    console.log(`Bucket ${bucketName} exists`);
    return true;
  } catch (error: any) {
    if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
      console.log(`Bucket ${bucketName} does not exist`);
      return false;
    }
    console.error('Error checking bucket existence:', error);
    throw error;
  }
}

// Create and configure a single bucket
async function createBucket(suffix: string) {
  const bucketName = `${baseBucketName}-${suffix}`;
  
  try {
    // Check if bucket already exists
    const exists = await bucketExists(bucketName);
    if (exists) {
      console.log(`Bucket ${bucketName} already exists, skipping creation...`);
      return;
    }

    // Create bucket
    console.log(`Creating bucket: ${bucketName}`);
    await s3Client.send(new CreateBucketCommand({
      Bucket: bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.VITE_AWS_REGION === 'us-east-1' ? undefined : process.env.VITE_AWS_REGION
      }
    }));

    // Configure CORS
    console.log(`Configuring CORS for: ${bucketName}`);
    await s3Client.send(new PutBucketCorsCommand({
      Bucket: bucketName,
      CORSConfiguration: corsConfig
    }));

    // Configure encryption
    console.log(`Configuring encryption for: ${bucketName}`);
    await s3Client.send(new PutBucketEncryptionCommand({
      Bucket: bucketName,
      ServerSideEncryptionConfiguration: encryptionConfig.ServerSideEncryptionConfiguration
    }));

    // Enable versioning
    console.log(`Enabling versioning for: ${bucketName}`);
    await s3Client.send(new PutBucketVersioningCommand({
      Bucket: bucketName,
      VersioningConfiguration: versioningConfig
    }));

    // Set bucket policy
    console.log(`Setting bucket policy for: ${bucketName}`);
    await s3Client.send(new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: JSON.stringify(createBucketPolicy(bucketName))
    }));

    console.log(`Successfully created and configured bucket: ${bucketName}`);
  } catch (error) {
    console.error(`Error creating/configuring bucket ${bucketName}:`, error);
    throw error;
  }
}

// Create all buckets
async function createAllBuckets() {
  try {
    if (!process.env.VITE_AWS_REGION || !process.env.VITE_AWS_ACCESS_KEY_ID || !process.env.VITE_AWS_SECRET_ACCESS_KEY || !process.env.VITE_AWS_BUCKET_NAME) {
      throw new Error('Missing required environment variables');
    }

    console.log('Starting bucket creation with AWS credentials:');
    console.log('Region:', process.env.VITE_AWS_REGION);
    console.log('Base bucket name:', baseBucketName);
    
    for (const suffix of bucketSuffixes) {
      await createBucket(suffix);
    }
    console.log('All buckets created and configured successfully!');
  } catch (error) {
    console.error('Failed to create buckets:', error);
    process.exit(1);
  }
}

createAllBuckets();