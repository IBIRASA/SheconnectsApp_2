import React, { useRef,useEffect } from 'react';
import Nav from './nav'; 
import landingImage from '../assets/landing.jpeg';
import aboutImage from '../assets/aboutus.png';
import TestimonialCard from './TestimonialCard';
import Login from '../pages/Login';
import MainPage from '../pages/MainCommunity';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faGlobe, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';

const LandingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'why':
        whyRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'testimonials':
        testimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

 
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      title: 'CEO, Company A',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      title: 'Founder, Company B',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      name: 'Michael Johnson',
      title: 'CTO, Company C',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <>
 
      <Nav scrollToSection={scrollToSection} />

    
      <div id='Home' className="relative h-screen">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={landingImage} alt="Landing Background" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-rose-900 opacity-75"></div>
        </div>
        <div className="relative z-10 flex flex-col items-start justify-center h-full ml-64 space-y-4 ">
      <h1 className="text-white text-6xl font-bold leading-normal" data-aos="fade-left">
        WELCOME TO SHECONNECTS <br />
        PLATFORM
      </h1>
      <div className="flex items-center text-white font-bold text-xl mb-32" data-aos="fade-left">
        <span className="font-normal text-base mb-8">Connect</span>
        <span className="mx-2 h-6 w-0.5 bg-pink-800 mb-8"></span>
        <span className="font-normal text-base mb-8">Inspire</span>
        <span className="mx-2 h-6 w-0.5 bg-pink-800 mb-8"></span>
        <span className="font-normal text-base mb-8">Empower Women</span>
      </div>
      <Link to="/Login" className="bg-pink-700 text-white rounded-lg py-4 px-6 border-2 border-gray-100" data-aos="fade-top">
        Join a community
      </Link>
    </div>
      </div>


      <div ref={aboutRef}  id='About' className="relative h-1/2 bg-white flex items-center px-60">
        <div className="flex-1 p-8">
          <div data-aos="fade-left">
            <h1 className="text-4xl font-bold mb-4 text-pink-900">About SheConnects</h1>
            <p className="text-lg text-gray-500">
              SheConnects is a dynamic platform designed to connect, inspire, and empower women from all walks of life. Whether you're looking to network professionally, seek mentorship, share experiences, or find support, SheConnects is your go-to app.
            </p>
          </div>
        </div>
        <div className="flex-1 p-8 flex justify-center" data-aos="fade-bottom">
          <img className="h-auto w-10/12 object-cover" src={aboutImage} alt="About SheConnects" />
        </div>
      </div>

   
      <div ref={whyRef} className="relative h-1/2 bg-pink-800 flex flex-col items-center px-60 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 mt-12">Why SheConnects?</h1>
        <div className="flex w-full justify-between"  data-aos="fade-bottom">
          <div className="flex-1 bg-transparent m-2 p-4 rounded-lg"  data-aos="zoom-in-up">
            <h2 className="text-4xl font-semibold mb-4 text-white">0.1</h2>
            <p className="text-2xl text-gray-300 font-semibold">Empowerment Through Connection</p>
            <p className="text-gray-100">
              SheConnects is designed to bridge the gap between women from various professional backgrounds, offering a unique space to network, share experiences, and uplift each other.
            </p>
          </div>
          <div className="flex-1 bg-transparent m-2 p-4 rounded-lg"  data-aos="zoom-in-up">
            <h2 className="text-4xl font-semibold mb-4 text-white">0.2</h2>
            <p className="text-2xl text-gray-300 font-semibold">Get Job Opportunities</p>
            <p className="text-gray-100">
              Discover a wide range of job opportunities tailored for women. Our platform connects you with companies and organizations that value diversity and inclusion, helping you find the right fit for your career aspirations.
            </p>
          </div>
          <div className="flex-1 bg-transparent m-2 p-4 rounded-lg"  data-aos="zoom-in-up">
            <h2 className="text-4xl font-semibold mb-4 text-white">0.3</h2>
            <p className="text-2xl text-gray-300 font-semibold">Tailored Mentorship</p>
            <p className="text-gray-100">
              Our platform connects you with mentors who can provide personalized guidance and support, helping you navigate your career path with confidence.
            </p>
          </div>
        </div>
      </div>

    
      <div ref={testimonialsRef} className="relative h-1/2 bg-gray-100 flex flex-col items-center px-60 py-8">
        <h1 className="text-4xl font-bold text-pink-900 mb-8 mt-12">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in-up" >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              title={testimonial.title}
              content={testimonial.content}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
      </div>

  
      <div ref={contactRef} className="relative h-1/2 bg-pink-900 flex px-60">
        <div className="flex-1 p-24 flex flex-col">
          <header className="text-gray-200 text-3xl font-bold mb-8">Reach Out to Us</header>
          <div className="flex items-center mb-8" data-aos="zoom-in-right">
            <FontAwesomeIcon icon={faHouse} className="text-gray-200 w-5 h-5 mr-4" />
            <span className="text-gray-200">Kigali, Rwanda</span>
          </div>
          <div className="flex items-center mb-8" data-aos="zoom-in-right">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-200 w-5 h-5 mr-4" />
            <span className="text-gray-200">SheConnects@gmail.com</span>
          </div>
          <div className="flex items-center mb-8" data-aos="zoom-in-right">
            <FontAwesomeIcon icon={faPhone} className="text-gray-200 w-5 h-5 mr-4" />
            <span className="text-gray-200">+xxx xxx xxxx xxx</span>
          </div>
          <div className="flex items-center mb-8" data-aos="zoom-in-right">
            <FontAwesomeIcon icon={faClock} className="text-gray-200 w-5 h-5 mr-4" />
            <span className="text-gray-200">10:00 am ------- 18:00 P.M</span>
          </div>
          <div className="flex items-center mb-8" data-aos="zoom-in-right">
            <FontAwesomeIcon icon={faGlobe} className="text-gray-200 w-5 h-5 mr-4" />
            <span className="text-gray-200">www.SHecoonects.com</span>
          </div>
        </div>
        <div className="flex-1 p-24 flex flex-col">
          <p className="text-gray-200 text-3xl font-bold mb-4">Talk to Us!!</p>
          <form className="w-full max-w-sm">
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-gray-200 mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1" data-aos="zoom-in-left"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-200 mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1" data-aos="zoom-in-left"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-gray-200 mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-1" data-aos="zoom-in-left"
              ></textarea>
            </div>
            <button type="submit" className="bg-gray-200 hover:bg-rose-200 text-pink-900 font-bold py-2 px-4 rounded" data-aos="zoom-in-left">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
