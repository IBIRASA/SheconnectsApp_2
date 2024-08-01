import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MainCommunity from './pages/MainCommunity.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profiledit from './pages/Profiledit.jsx';
import CommunityTop from './components/Community_top.jsx';
import Business from './components/Business.jsx';
import IT from './components/IT.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Root = () => {
  const username = localStorage.getItem('username') || 'Guest';
  console.log("Username:", username); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MainCommunity" element={<MainCommunity />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profiledit" element={<Profiledit />} />
        <Route path="/business" element={<Business />} />
        <Route path="/it" element={<IT />} />
        <Route path="/Community_top" element={<CommunityTop username={username} />} />

      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
