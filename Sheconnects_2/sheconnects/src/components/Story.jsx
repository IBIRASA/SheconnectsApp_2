// src/components/CommunityHeader.js
import React from 'react';
import about from '../assets/aboutus.png';

const Story = () => {
  return (
    <div className="mb-6 p-4">
      <h1 className="text-2xl font-semibold text-gray-600 text-left"># Business Community</h1>
      <div className="w-full border-t border-gray-300 my-4"></div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <div className="relative bg-gray-300 h-24 w-24 rounded-full border-2 border-pink-700 shadow-md flex items-center justify-center">
          <div className="absolute bottom-0 right-0 bg-pink-900 h-8 w-8 rounded-full border-2 border-pink-900 flex items-center justify-center -mb-1 -mr-1">
            <span className="text-rose-200 text-lg">+</span>
          </div>
        </div>
        {Array(9).fill(null).map((_, index) => (
          <img
            key={index}
            src={about}
            alt={`Profile ${index + 1}`}
            className="h-24 w-24 rounded-full border-2 border-rose-600 shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Story;
