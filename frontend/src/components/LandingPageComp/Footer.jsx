import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ChatFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}