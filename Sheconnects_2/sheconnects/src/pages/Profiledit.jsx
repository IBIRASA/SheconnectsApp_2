import React, { useState } from 'react';
import { Link } from "react-router-dom";
const Profiledit = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = React.createRef();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-700">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-700">Kellen Mubyeyi</h2>
        <div className="flex justify-center mb-4">
          <div className="relative h-24 w-24 rounded-full border-2 border-pink-700 -ml-2 shadow-md mr-8">
            <img 
              src={image || 'https://via.placeholder.com/96'} 
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
            <div 
              className="absolute bottom-0 right-0 bg-pink-900 h-8 w-8 rounded-full border-2 border-pink-900 flex items-center justify-center -mb-1 -mr-1 cursor-pointer"
              onClick={handleImageClick}
            >
              <span className="text-rose-200 text-lg">+</span>
            </div>
            <input 
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              placeholder="Kellen Mubyeyi" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input 
              type="text" 
              placeholder="Address" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              placeholder="Phone number" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>
          <button type="submit" className="w-full bg-pink-700 text-white py-2 rounded-lg hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600">
             <Link to ="/MainCommunity">Save changes</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profiledit;
