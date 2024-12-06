import React, { useCallback, useState } from 'react';
import { AlertCircle } from 'lucide-react';
import FileUploadZone from '../components/documents/FileUploadZone';
import FileList from '../components/documents/FileList';
import { uploadToS3, generateS3Key } from '../utils/s3-upload';

interface FileWithPreview extends File {
  preview?: string;
}

const Documents = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    setError(null);
  }, []);

  const handleUpload = async () => {
    setUploading(true);
    setError(null);

    try {
      await Promise.all(
        files.map(async (file) => {
          const key = generateS3Key(file);
          await uploadToS3(file, key);
        })
      );
      setFiles([]);
    } catch (err) {
      setError('Failed to upload files. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Document Management</h1>
        <p className="text-gray-600">Upload and manage your restaurant documents</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <FileUploadZone onDrop={onDrop} />

        {error && (
          <div className="mt-4 p-4 bg-red-50 rounded-lg flex items-center gap-2 text-red-700">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}

        <FileList 
          files={files}
          uploading={uploading}
          onUpload={handleUpload}
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Documents</h2>
        <div className="text-sm text-gray-500">
          No documents uploaded yet.
        </div>
      </div>
    </div>
  );
};

export default Documents;