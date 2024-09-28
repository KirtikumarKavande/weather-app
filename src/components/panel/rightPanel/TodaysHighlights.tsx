import React from 'react';
import { useSelector } from 'react-redux';
import UVIndexCard from './cards/UVIndexCard';
import WindStatusCard from './cards/WindStatusCard';
import SunriseSunsetCard from './cards/SunriseSunsetCard';
import HumidityCard from './cards/HumidityCard';
import VisibilityCard from './cards/VisibilityCard';
import AirQualityCard from './cards/AirQualityCard';

const TodaysHighlights = () => {
  const { weatherForecast } = useSelector((state: { forecast: { weatherForecast: any } }) => state.forecast);

  let astroData=weatherForecast?.forecast?.forecastday[0]?.astro
  

  const highlightsData = {
    uvIndex: { value: "5", maxValue: "12" },
    windStatus: { value: "7.70", unit: "km/h", direction: "WSW" },
    sunriseSunset: { sunrise: "6:35 AM", sunset: "5:42 PM" },
    humidity: { value: "12", unit: "%", status: "Normal" },
    visibility: { value: "5.2", unit: "km", status: "Average" },
    airQuality: { value: "105", status: "Unhealthy" },
  };
  console.log("over",weatherForecast)

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4 text-black">
        Today's Highlights
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <UVIndexCard uv={weatherForecast?.current?.uv} />
        <WindStatusCard data={weatherForecast?.current?.wind_kph} windDir={weatherForecast?.current?.wind_dir} />
        <SunriseSunsetCard sunrise={astroData?.sunrise} sunset={astroData?.sunset} />
        <HumidityCard  humidity={weatherForecast?.current?.humidity} />
        <VisibilityCard visibility={weatherForecast?.current?.vis_km} />
        <AirQualityCard airQuality={weatherForecast?.current?.air_quality?.co} />
      </div>
    </div>
  );
};

export default TodaysHighlights;