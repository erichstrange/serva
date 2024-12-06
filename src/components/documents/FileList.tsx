import React from 'react';
import { File } from 'lucide-react';

interface FileListProps {
  files: File[];
  uploading: boolean;
  onUpload: () => void;
}

const FileList = ({ files, uploading, onUpload }: FileListProps) => {
  if (files.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Selected Files</h3>
      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.name}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <File size={20} className="text-gray-400" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {file.name}
              </p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onUpload}
        disabled={uploading}
        className={`mt-4 px-4 py-2 rounded-lg text-white font-medium
          ${uploading
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
          }`}
      >
        {uploading ? 'Uploading...' : 'Upload Files'}
      </button>
    </div>
  );
};

export default FileList;