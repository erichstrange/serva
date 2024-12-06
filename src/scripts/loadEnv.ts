import { config } from 'dotenv';
import { resolve } from 'path';
import { existsSync } from 'fs';

const envPath = resolve(process.cwd(), '.env');

if (!existsSync(envPath)) {
  console.error('.env file not found');
  process.exit(1);
}

const result = config({ path: envPath });

if (result.error) {
  console.error('Error loading .env file:', result.error);
  process.exit(1);
}

// Log loaded environment variables for debugging
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

// Export environment variables for other scripts
process.env.AWS_REGION = process.env.VITE_AWS_REGION;
process.env.AWS_ACCESS_KEY_ID = process.env.VITE_AWS_ACCESS_KEY_ID;
process.env.AWS_SECRET_ACCESS_KEY = process.env.VITE_AWS_SECRET_ACCESS_KEY;

console.log('Environment variables loaded successfully');