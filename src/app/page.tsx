"use client";
import React, { useEffect, useState } from 'react';
import LeftPanel from "../components/panel/LeftPannel";
import RightPanel from '../components/panel/RightPannel';
import useFetch from "../hooks/useFetch"

const WeatherDashboard = () => {

  const fetchData=useFetch()
  useEffect(()=>{
   async function abc(){
      const data=await fetchData("v1","forecast.json?q=london&days=7&aqi=yes")
      console.log(data)
    }
    abc()
   
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