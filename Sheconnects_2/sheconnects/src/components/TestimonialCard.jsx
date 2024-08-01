import React from 'react';

const TestimonialCard = ({ name, title, content, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={imageUrl}
          alt={`Avatar of ${name}`}
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default TestimonialCard;
