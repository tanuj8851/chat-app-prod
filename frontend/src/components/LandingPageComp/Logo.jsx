import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <MessageCircle className="h-8 w-8 text-blue-500" />
      <span className="text-xl font-bold text-gray-800">ChatFlow</span>
    </div>
  );
}