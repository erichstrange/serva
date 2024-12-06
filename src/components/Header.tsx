import React from 'react';
import { Bell, User } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-64 px-6 flex items-center justify-between z-10">
      <SearchBar />
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium">John Smith</span>
        </div>
      </div>
    </header>
  );
};

export default Header;