import React, { useState, useEffect } from 'react';
import Logi from '../assets/Register.png';
import Logo from '../assets/sheconnectss.png';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    } else if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
  
 
    setError('');
    axios.post('http://localhost:3001/login', { email, password })
    .then(response => {
      if (response.data.success) {
      
        localStorage.setItem('username', response.data.username);
        navigate('/MainCommunity'); 
      } else {
        setError(response.data.message);
      }
    })
    .catch(err => {
      setError('Login failed. Please try again.');
    });
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative h-screen">
      <img
        className="absolute w-full h-full object-cover"
        src={Logi}
        alt="Landing Background"
      />
      <div className="relative z-10 flex flex-col items-center h-full">
        <img className="mt-8 mb-4 w-52 h-auto" src={Logo} alt="SheConnects Logo" data-aos="fade-down" />
        <div className="w-full max-w-4xl p-8 bg-transparent bg-opacity-90 rounded-lg" data-aos="fade-up">
          <div className="flex flex-col items-center mb-8">
            <p className="text-gray-100 text-5xl font-medium mb-4">Login</p>
          </div>
          <div className="w-full max-w-md mx-auto">
            <form className="w-full" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 mb-4" data-aos="fade-in">{error}</p>}
              <div className="flex flex-col mb-4 mt-8" data-aos="fade-right">
                <label htmlFor="email" className="text-gray-100 mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-0 bg-transparent"
                />
              </div>
              <div className="flex flex-col mb-4 mt-8" data-aos="fade-left">
                <label htmlFor="password" className="text-gray-100 mb-1">Password:</label>
                <input
                    type={showPassword ? 'password' : 'text'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b-2 border-gray-300 focus:border-blue-500 outline-none px-2 py-0 bg-transparent"
                />
                   <div className="absolute right-0 top-0 mt-8 mr-2 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash className="text-gray-100" /> : <FaEye className="text-gray-100" />}
                </div>
              </div>
              
              <p>Don't have an account? <span className='text-gray-300'><Link to="/Register">Register here</Link></span></p>
              <br />
              <button type="submit" className="bg-gray-200 hover:bg-rose-300 text-rose-700 font-bold py-2 px-4 rounded mt-8">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
