// src/components/ExploreCommunities.js
import {useEffect } from 'react';
import about from '../assets/aboutus.png'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Explorecommunitiy = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
  return (
    <div className="mt-6 p-4 px-16">
      <h2 className="text-3xl font-semibold mb-8 text-pink-900">Explore Communities</h2>
      <div className="flex space-x-4">
        <div className="bg-pink-900 p-8 rounded-lg  w-1/2 border-2 " data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Business</h3>
          <p className="text-sm text-gray-100">This is the business community where we share ideas about business creation</p>
          <div className="flex mt-2 space-x-2">
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <span className="ml-2 rounded-full shadow-md text-pink-900 bg-white py-1 px-1">+23</span>
          </div>
          <Link to ="/Dashboard" className="mt-2 bg-gray-100 text-pink-900 py-2 px-4 rounded-full ml-60">Join here</Link>
        </div>
        <div className="bg-white p-8 rounded-lg  w-1/2 border-2 border-pink-800" data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">IT</h3>
          <p className="text-sm">This is the business community where we share ideas about business creation</p>
          <div className="flex mt-2 space-x-2">
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <span className="ml-2 rounded-full shadow-md">+23</span>
          </div>
          <button className="mt-2 bg-pink-900 text-white  py-2 px-4 rounded-full ml-60">Join here</button>
        </div>
        <div className="bg-pink-900 p-8 rounded-lg  w-1/2 border-2  " data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">Business</h3>
          <p className="text-sm text-gray-100">This is the business community where we share ideas about business creation</p>
          <div className="flex mt-2 space-x-2">
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md bg-slate-50" />
            <span className="ml-2 rounded-full shadow-md text-pink-900 bg-white py-1 px-1">+23</span>
          </div>
          <button className="mt-2 bg-gray-100 text-pink-900 py-2 px-4 rounded-full ml-60">Join here</button>
        </div>
        <div className="bg-white p-8 rounded-lg w-1/2 border-2 border-pink-800" data-aos="fade-up">
          <h3 className="text-lg font-semibold mb-2">IT</h3>
          <p className="text-sm">This is the business community where we share ideas about business creation</p>
          <div className="flex mt-2 space-x-2">
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <img src={about} alt="Business Community 1" className="h-8 w-8 rounded-full shadow-md" />
            <span className="ml-2 rounded-full shadow-md  bg-white">+23</span>
          </div>
          <button className="mt-2 bg-pink-900 text-white  py-2 px-4 rounded-full ml-60">Join here</button>
        </div>
      </div>
    </div>
  );
};

export default Explorecommunitiy;
