import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client, bucketConfig } from './aws-config';

export const uploadToS3 = async (file: File, key: string) => {
  try {
    const params = {
      Bucket: bucketConfig.raw,
      Key: key,
      Body: file,
      ContentType: file.type,
      Metadata: {
        'original-filename': file.name,
        'upload-date': new Date().toISOString()
      }
    };

    await s3Client.send(new PutObjectCommand(params));
    return {
      success: true,
      key
    };
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw error;
  }
};

export const generateS3Key = (file: File) => {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 15);
  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  
  // Determine the appropriate subfolder based on file type
  let category = 'other';
  if (file.type.includes('image')) category = 'images';
  else if (file.name.toLowerCase().includes('invoice')) category = 'invoices';
  else if (file.name.toLowerCase().includes('menu')) category = 'menus';
  else if (file.type.includes('pdf')) category = 'pdfs';
  else if (file.type.includes('spreadsheet') || file.name.match(/\.(xlsx?|csv)$/i)) category = 'spreadsheets';
  
  return `${category}/${timestamp}-${randomString}-${sanitizedFileName}`;
};