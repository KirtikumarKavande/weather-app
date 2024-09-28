"use client";
import React, { useEffect, useState } from 'react';
import LeftPanel from "../components/panel/LeftPannel";
import RightPanel from '../components/panel/RightPannel';
import useFetch from "../hooks/useFetch"
import { Provider } from 'react-redux';
import store from '@/store/store';
import { useDispatch } from 'react-redux';
import { setForecast } from '@/store/slices/forcastSlice';

const WeatherDashboard = () => {
 const dispatch= useDispatch()
  const fetchData=useFetch()
  const fetchForecast=async()=>{
    const data=await fetchData("v1","forecast.json?&days=7&aqi=yes")
   data && dispatch(setForecast(data))
  }
  
  useEffect(()=>{
    fetchForecast()
  },[])

  

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