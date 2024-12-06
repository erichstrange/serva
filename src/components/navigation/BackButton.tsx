import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-8 left-8 p-2 text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;