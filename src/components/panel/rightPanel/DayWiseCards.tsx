"use client";
import { ForecastDay } from "@/types/forecast";
import { daysOfWeek } from "@/utilitis/contsant";
import React from "react";
import { useSelector } from "react-redux";

const DayWiseCards = () => {
  const { weatherForecast } = useSelector((state: { forecast: { weatherForecast: any } }) => state.forecast);
  const { weatherUnit } = useSelector((state: { unitToggle: { weatherUnit: string } }) => state.unitToggle);

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
                  <span>{Math.round(weatherUnit==="C" ?day?.maxtemp_c:day?.maxtemp_f)}°</span>
                  <span className="text-gray-400 text-sm block">
                    <span>{Math.round(weatherUnit==="C" ?day?.mintemp_c:day?.mintemp_f)}°</span>
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
