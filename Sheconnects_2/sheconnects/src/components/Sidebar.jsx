import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaBriefcase, FaComments, FaSignOutAlt } from 'react-icons/fa';
import Logo from '../assets/sheconnectss.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ setActiveContent }) => {
  const [selected, setSelected] = useState('General');

  const handleClick = (item) => {
    setSelected(item);
    setActiveContent(item);
  };

  const menuItems = [
    { name: 'General', icon: <FaHome size={24} /> },
    { name: 'Business', icon: <FaUserFriends size={24} /> },
    { name: 'IT', icon: <FaBriefcase size={24} /> },
    { name: 'Direct Message', icon: <FaComments size={24} /> },
  ];

  return (
    <div className="bg-pink-900 text-white w-72 p-4 flex flex-col h-full shadow-lg">
      <div className="flex items-center justify-center mb-12 mt-12">
        <img
          className="w-36 h-36 object-cover"
          src={Logo}
          alt="Logo"
        />
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-colors duration-200 ${
                selected === item.name ? 'bg-white text-pink-900' : 'hover:bg-pink-700'
              }`}
              onClick={() => handleClick(item.name)}
            >
              <span className="mr-4">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8">
        <ul>
          <li className="flex items-center p-3 rounded-md cursor-pointer hover:bg-pink-700 transition-colors duration-200">
            <FaSignOutAlt className="mr-4" size={24} />
            <Link to="/" className="text-lg">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
