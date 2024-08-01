import React, { useState,useEffect } from 'react';
import vector from '../assets/sheconnectss.png'; 

const Nav = () => {
  const googleFontsLink = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Nav = ({ scrollToSection }) => {
    return (
      <nav className="fixed top-0 w-full bg-transparent flex justify-between p-4 z-20">
        <ul className="flex space-x-4">
          <li>
            <button className="text-white" onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button className="text-white" onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button className="text-white" onClick={() => scrollToSection('why')}>Why SheConnects</button>
          </li>
          <li>
            <button className="text-white" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
          </li>
          <li>
            <button className="text-white" onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <nav className={`fixed w-full z-10 top-0 py-6 ${isScrolled ? 'bg-pink-900' : 'bg-transparent'} transition-colors duration-300 font-poppins`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <div className="max-w-1xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={handleMenuToggle}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start ">
            <div className="flex-shrink-0 ml-0">
              <img className="h-32 w-auto mt-12 mb-8 mr-96 ml-56" src={vector} alt="SheConnects Logo" />
            </div>
            <div className="hidden sm:block sm:ml-96 mt-24"> 
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3   rounded-md text-sm font-medium"
                >
                  Why
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3   rounded-md text-sm font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3  rounded-md text-sm font-medium"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#Home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Why
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
