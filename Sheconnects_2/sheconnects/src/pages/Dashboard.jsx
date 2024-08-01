import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Alldashboardcontent from '../components/Alldashboardcontent';

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('General');

  return (
    <div className="flex h-screen">
      <Sidebar setActiveContent={setActiveContent} />
      <Alldashboardcontent activeContent={activeContent} />
    </div>
  );
};

export default Dashboard;
