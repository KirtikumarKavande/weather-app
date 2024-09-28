"use client";
import { getCurrentTime, getDayOfWeek } from "@/utilitis/helper";
import React from "react";
import { useSelector } from "react-redux";

const Weather = ({ forecast }: { forecast: object[] }) => {
  const { weatherUnit, dayIndex } = useSelector(
    (state: { weatherSettings: { weatherUnit: string; dayIndex: number } }) =>
      state.weatherSettings
  );
  let day = forecast && forecast[dayIndex]?.day;

  return (
    <div className=" mb-8">
      <img
        className="mx-auto"
        width="200"
        height="150"
        src={`https:${day?.condition?.icon}`}
        alt="cloud-lighting"
        color="#cccc"
      />
      <div className="flex space-x-1 ">
        <div className="text-left text-7xl text-black mb-4">
          {weatherUnit === "C" ? day?.avgtemp_c : day?.avgtemp_f}
        </div>
        <span className="text-5xl text-black">
          {" "}
          {weatherUnit === "C" ? "°C" : "F"}{" "}
        </span>
      </div>
      <div className="text-xl text-left text-black mb-4">
        {getDayOfWeek(forecast && forecast[dayIndex]?.date)},{" "}
        <span className="text-gray-400">{getCurrentTime()}</span>
      </div>
      <hr className="text-gray-400 my-6" />
      <div className="flex justify-left items-center text-gray-600 mb-4">
        <span className="mr-2">🌤️</span>
        <span>{day?.condition?.text}</span>
      </div>
      <div className="flex justify-left items-center text-gray-600">
        <span className="mr-2">🌧️</span>
        <span>Rain - {day?.daily_chance_of_rain}%</span>
      </div>
    </div>
  );
};

export default Weather;
