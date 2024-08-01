import React from 'react';
import GeneralContent from './GeneralContent.jsx'; 
import Business from './Business.jsx';
import IT from './IT.jsx';
import DirectMessage from './DirectMessage.jsx';
const Alldashboardcontent = ({ activeContent }) => {
  const renderContent = () => {
    switch (activeContent) {
      case 'General':
        return <GeneralContent />;
      case 'Business':
        return <Business/>;
      case 'IT':
        return <IT/>;
      case 'Direct Message':
        return <DirectMessage/>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="bg-white flex-1 p-6">
      {renderContent()}
    </div>
  );
};

export default Alldashboardcontent;
