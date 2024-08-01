
import React, { useEffect, useState } from 'react';
import Community_top from '../components/Community_top';
import Explorecommunitiy from '../components/Explorecommunity';
import Opportunities from '../components/Opportunities';
import Logo from '../assets/sheconnectss.png';
const MainCommunity = () => {
  const [username,setUsername] = useState('');
  useEffect(() =>{
  const storedUsername = localStorage.getItem('username');
  if(storedUsername){
    setUsername(storedUsername);
  }
},[]);
  return (
    <div >
    <Community_top username ={username}/>
    <Explorecommunitiy/>
      <Opportunities />
    </div>
  );
};

export default MainCommunity;
