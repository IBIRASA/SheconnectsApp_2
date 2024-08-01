// src/components/Navbar.js
import React from 'react';
import Logo from '../assets/sheconnectss.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const CommunityTop = ({ username }) => {
  return (
    <nav className="bg-pink-800 flex justify-between items-center p-1 px-12 shadow-md relative">
      <div className="flex items-center">
      <Link to="/Login" className="p-2">
        <img
          className="w-20 h-20 object-cover"
          src={Logo}
          alt="SheConnects Logo"
        />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2">
          <FontAwesomeIcon icon={faBell} className="text-gray-200 w-5 h-5" />
        </button>
      
        <div className="flex items-center space-x-1">
          <span className="text-gray-200 font-bold">{username}</span>
        </div>
        <Link to="/Profiledit" className="p-2">
          <FontAwesomeIcon icon={faAngleDown} className="text-gray-200 w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
};

export default CommunityTop;
