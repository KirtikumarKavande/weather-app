"use client";
import React from "react";
import { useSelector } from "react-redux";

const DayWiseCards = () => {
  const { weatherForecast } = useSelector((state: any) => state.forecast);
  let forecastData = weatherForecast?.forecast?.forecastday;

  return (
    <div className="grid grid-cols-7 gap-4 mb-8">
      {forecastData &&
        forecastData?.map(
          (
            { day }: { day: { condition: { icon: String } } },
            index: Number
          ) => (
            console.log("dream", day),
            (
              <div
                key={`forecast-${index}`}
                className="bg-white text-black rounded-2xl p-3 text-center"
              >
                <div className="text-sm mb-2">{"good"}</div>
                {/* <div className="text-2xl mb-2">{weatherIcons[index]}</div> */}
                <img src={"https:" + day?.condition?.icon} alt="" />
                <div className="text-sm font-medium flex justify-center">
                  {/* <span>{convertTemp(temperatures[index])}°</span> */}
                  <span className="text-gray-400 text-sm block">
                    {/* {convertTemp(temperatures[index] - 3)}° */}
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
