import os
import boto3
from botocore.exceptions import ClientError

def create_bucket(s3_client, bucket_name, region):
    """Create an S3 bucket with configuration"""
    try:
        location_constraint = None if region == 'us-east-1' else region
        s3_client.create_bucket(
            Bucket=bucket_name,
            CreateBucketConfiguration={'LocationConstraint': location_constraint} if location_constraint else {}
        )
        print(f"Created bucket: {bucket_name}")

        # Configure CORS
        s3_client.put_bucket_cors(
            Bucket=bucket_name,
            CORSConfiguration={
                'CORSRules': [{
                    'AllowedHeaders': ['*'],
                    'AllowedMethods': ['GET', 'PUT', 'POST', 'DELETE'],
                    'AllowedOrigins': ['*'],
                    'ExposeHeaders': ['ETag'],
                    'MaxAgeSeconds': 3000
                }]
            }
        )

        # Configure encryption
        s3_client.put_bucket_encryption(
            Bucket=bucket_name,
            ServerSideEncryptionConfiguration={
                'Rules': [{
                    'ApplyServerSideEncryptionByDefault': {
                        'SSEAlgorithm': 'AES256'
                    }
                }]
            }
        )

        # Enable versioning
        s3_client.put_bucket_versioning(
            Bucket=bucket_name,
            VersioningConfiguration={'Status': 'Enabled'}
        )

        # Set bucket policy
        bucket_policy = {
            'Version': '2012-10-17',
            'Statement': [{
                'Sid': 'AllowAuthenticatedAccess',
                'Effect': 'Allow',
                'Principal': '*',
                'Action': ['s3:GetObject', 's3:PutObject', 's3:DeleteObject'],
                'Resource': [f'arn:aws:s3:::{bucket_name}/*']
            }]
        }
        s3_client.put_bucket_policy(
            Bucket=bucket_name,
            Policy=str(bucket_policy).replace("'", '"')
        )

        print(f"Configured bucket {bucket_name} successfully")
        return True

    except ClientError as e:
        error_code = e.response.get('Error', {}).get('Code')
        if error_code == 'BucketAlreadyOwnedByYou':
            print(f"Bucket {bucket_name} already exists and is owned by you")
            return True
        elif error_code == 'BucketAlreadyExists':
            print(f"Bucket {bucket_name} already exists but is owned by another account")
        else:
            print(f"Error creating bucket {bucket_name}: {str(e)}")
        return False

def main():
    # Get AWS credentials from environment
    region = os.getenv('VITE_AWS_REGION')
    access_key = os.getenv('VITE_AWS_ACCESS_KEY_ID')
    secret_key = os.getenv('VITE_AWS_SECRET_ACCESS_KEY')
    base_bucket_name = os.getenv('VITE_AWS_BUCKET_NAME')

    if not all([region, access_key, secret_key, base_bucket_name]):
        print("Missing required environment variables")
        return

    # Initialize S3 client
    s3_client = boto3.client(
        's3',
        region_name=region,
        aws_access_key_id=access_key,
        aws_secret_access_key=secret_key
    )

    # Create buckets
    suffixes = ['raw', 'processed', 'embeddings']
    success = True
    for suffix in suffixes:
        bucket_name = f"{base_bucket_name}-{suffix}"
        if not create_bucket(s3_client, bucket_name, region):
            success = False
            break

    if success:
        print("All buckets created and configured successfully!")
    else:
        print("Failed to create all buckets")

if __name__ == '__main__':
    main()