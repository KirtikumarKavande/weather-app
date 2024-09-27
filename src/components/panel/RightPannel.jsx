"use client";
import React, { useState } from "react";
import { Search, MapPin } from "lucide-react";
import Image from "next/image";

const RightPanel = () => {
  const [isCelsius, setIsCelsius] = useState(true);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const temperatures = [15, 12, 9, 8, 5, 4, 3];
  const weatherIcons = ["☀️", "🌤️", "🌧️", "🌧️", "❄️", "☀️", "☀️"];
  const convertTemp = (temp) => isCelsius ? temp : Math.round(temp * 9/5 + 32);

  return (
    <div className="lg:w-2/3 lg:pl-8 bg-[#F6F6F8]  p-4 sm:p-6 md:p-8">
    <div className="flex justify-between items-center mb-8">
      <div className="space-x-2">
        <button className="px-4 py-1.5 text-gray-400 rounded-full text-sm">Today</button>
        <button className="px-4 py-1.5 bg-gray-200 rounded-full text-sm font-medium">Week</button>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          className={`px-2 py-1 rounded-full text-sm ${isCelsius ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setIsCelsius(true)}
        >
          °C
        </button>
        <button 
          className={`px-2 py-1 rounded-full text-sm ${!isCelsius ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}`}
          onClick={() => setIsCelsius(false)}
        >
          °F
        </button>
      </div>
    </div>

    <div className="grid grid-cols-7 gap-4 mb-8">
      {days.map((day, index) => (
        <div key={day} className="bg-white text-black rounded-2xl p-3 text-center">
          <div className="text-sm mb-2">{day}</div>
          <div className="text-2xl mb-2">{weatherIcons[index]}</div>
          <div className="text-sm font-medium flex justify-center">
            <span>{convertTemp(temperatures[index])}°</span>
            <span className="text-gray-400 text-sm block">{convertTemp(temperatures[index] - 3)}°</span>
          </div>
        </div>
      ))}
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 text-black">Today's Highlights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: 'UV Index', value: '5', maxValue: '12', icon: '☀️' },
          { title: 'Wind Status', value: '7.70', unit: 'km/h', direction: 'WSW', icon: '🌬️' },
          { title: 'Sunrise & Sunset', sunrise: '6:35 AM', sunset: '5:42 PM', icon: '🌅' },
          { title: 'Humidity', value: '12', unit: '%', status: 'Normal', icon: '💧' },
          { title: 'Visibility', value: '5.2', unit: 'km', status: 'Average', icon: '👁️' },
          { title: 'Air Quality', value: '105', status: 'Unhealthy', icon: '🌫️' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl h-48">
            <h4 className="text-lg text-gray-300 mb-2">{item.title}</h4>
            <div className="flex items-center justify-between mb-2">
              <div className="  text-black py-4">
              <span className="text-5xl"> {item.value}</span> 
                {item.unit && <span className="text-sm ml-1 ">{item.unit}</span>}
              </div>
              {/* <div className="text-4xl">{item.icon}</div> */}
            </div>
            {item.maxValue && (
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(parseInt(item.value) / parseInt(item.maxValue)) * 100}%` }}></div>
              </div>
            )}
            {item.status && <div className="text-sm text-gray-600">{item.status}</div>}
            
            {item.direction && <div className="flex space-x-3 items-center"> <img width="18" height="18 " src="https://img.icons8.com/officel/80/near-me.png" alt="near-me"/> <div className="text-sm pt-2 text-black font-[600]">{item.direction}</div></div>}
            {item.sunrise && (
              <div className="mt-2 text-xl text-black">
                <div>⬆️ {item.sunrise}</div>
                <div>⬇️ {item.sunset}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default RightPanel;
