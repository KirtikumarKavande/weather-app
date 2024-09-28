'use client';
import React from 'react'
import { useSelector } from 'react-redux';

const Weather = () => {
  const { weatherUnit } = useSelector((state: { unitToggle: { weatherUnit: string } }) => state.unitToggle);
  
  return (
    <div className=" mb-8">
    <img className="mx-auto" width="150" height="150" src="https://img.icons8.com/officel/80/cloud-lighting.png" alt="cloud-lighting" color="#cccc"/>
      <div className='flex space-x-1 '>
      <div className="text-left text-7xl text-black mb-4">{(12)} </div>
      <span className='text-5xl text-black'>°C</span>
      </div>
      <div className="text-xl text-left text-black mb-4">
        Monday, <span className="text-gray-400">16:00</span>
      </div>
      <hr className="text-gray-400 my-6" />
      <div className="flex justify-left items-center text-gray-600 mb-4">
        <span className="mr-2">🌤️</span>
        <span>Mostly Cloudy</span>
      </div>
      <div className="flex justify-left items-center text-gray-600">
        <span className="mr-2">🌧️</span>
        <span>Rain - 30%</span>
      </div>
    </div>
  )
}

export default Weather