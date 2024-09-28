"use client";
import React, { useState } from "react";
import Weather from "./leftPanel/Weather";
import SearchLocation from "./leftPanel/SearchLocation";
import { useSelector } from "react-redux";
import CityImage from "./leftPanel/CityImage";

const LeftPanel = () => {
  const [isCelsius, setIsCelsius] = useState(true);
  const convertTemp = (temp: number) =>
    isCelsius ? temp : Math.round((temp * 9) / 5 + 32);
  const { weatherForecast } = useSelector((state: { forecast: { weatherForecast: any } }) => state.forecast);
  const { dayIndex } = useSelector(
    (state: { weatherSettings: { dayIndex: number } }) =>
      state.weatherSettings
  );
  return (
    <div className="lg:w-1/3 lg:pr-8 mb-8 lg:mb-0  p-4 sm:p-6 md:p-8">
    <SearchLocation />
      <Weather  forecast={weatherForecast?.forecast?.forecastday}/>
    <CityImage location={weatherForecast?.location} dayIndex={dayIndex} />
  
    </div>
  );
};

export default LeftPanel;
