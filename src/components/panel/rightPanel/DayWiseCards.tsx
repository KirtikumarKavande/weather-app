"use client";
import { ForecastDay } from "@/types/forecast";
import { daysOfWeek } from "@/utilitis/contsant";
import React from "react";
import { useSelector } from "react-redux";

const DayWiseCards = () => {
  const { weatherForecast } = useSelector((state: any) => state.forecast);
  let forecastData = weatherForecast?.forecast?.forecastday;
  const today = new Date();
  return (
    <div className="grid grid-cols-7 gap-4 mb-8">
      {forecastData &&
        forecastData?.map(
          ({ day }: ForecastDay, index: number) => (
            console.log("dream", day),
            (
              <div
                key={`forecast-${index}`}
                className="bg-white text-black rounded-2xl p-3 text-center"
              >
                <div className="text-sm mb-2">
                  {daysOfWeek[(today.getDay() + index) % 7]}
                </div>
                <img
                  src={"https:" + day?.condition?.icon}
                  alt="weatherImg"
                  className="mx-auto"
                />
                <div className="text-sm font-medium flex justify-center space-x-1">
                  <span>{Math.round(day?.maxtemp_c)}°</span>
                  <span className="text-gray-400 text-sm block">
                    <span>{Math.round(day?.mintemp_c)}°</span>
                  </span>
                </div>
              </div>
            )
          )
        )}
    </div>
  );
};

export default DayWiseCards;
