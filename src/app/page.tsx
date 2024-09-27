"use client"
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import LeftPanel from "../components/panel/LeftPannel";
import RightPanel from '../components/panel/RightPannel';

const WeatherDashboard = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const temperatures = [15, 12, 9, 8, 5, 4, 3];
  const weatherIcons = ['☀️', '🌤️', '🌧️', '🌧️', '❄️', '☀️', '☀️'];


  return (
    <div className="bg-white rounded-3xl shadow-lg max-w-7xl mx-auto my-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel */}
       <LeftPanel />
       <RightPanel />

        {/* Right Panel */}
       
      </div>
    </div>
  );
};

export default WeatherDashboard;