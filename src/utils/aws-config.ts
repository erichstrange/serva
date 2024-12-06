import { Amplify } from 'aws-amplify';
import { S3Client } from '@aws-sdk/client-s3';

// Configure Amplify
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID,
      region: import.meta.env.VITE_AWS_REGION,
      signUpVerificationMethod: 'code',
      identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
      loginWith: {
        email: true,
        phone: false,
        username: false
      },
      oauth: {
        domain: import.meta.env.VITE_AWS_COGNITO_DOMAIN,
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: ['http://localhost:5173/dashboard'],
        redirectSignOut: ['http://localhost:5173/login'],
        responseType: 'code'
      }
    }
  }
});

// Create and export S3 client
export const s3Client = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  }
});

// Export bucket configuration
export const bucketConfig = {
  raw: import.meta.env.VITE_AWS_RAW_BUCKET,
  processed: import.meta.env.VITE_AWS_PROCESSED_BUCKET,
  embeddings: import.meta.env.VITE_AWS_EMBEDDINGS_BUCKET
};

// Export configuration getters
export const getAuthConfig = () => ({
  region: import.meta.env.VITE_AWS_REGION,
  userPoolId: import.meta.env.VITE_AWS_COGNITO_USER_POOL_ID,
  userPoolClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID,
  identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
  domain: import.meta.env.VITE_AWS_COGNITO_DOMAIN
});