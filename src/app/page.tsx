import React, { useState } from 'react';
import LeftPanel from "../components/panel/LeftPannel";
import RightPanel from '../components/panel/RightPannel';

const WeatherDashboard = () => {
  
  return (
    <div className="bg-white rounded-3xl  shadow-lg max-w-7xl mx-auto my-8">
      <div className="flex flex-col  lg:flex-row">
        {/* Left Panel */}
       <LeftPanel />
       <RightPanel />
        {/* Right Panel */}
       
      </div>
    </div>
  );
};

export default WeatherDashboard;