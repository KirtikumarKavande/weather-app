import { airQualityStatus } from '@/utilitis/contsant';
import { getStatus } from '@/utilitis/helper';
import React from 'react';

const AirQualityCard = ({ airQuality }: { airQuality: number }) => {
  // Clamp the AQI to 0-500 range
  const clampedAQI = Math.min(Math.max(airQuality, 0), 500);
  
  // Calculate dot position
  const containerHeight = 80; // h-20 in pixels
  const dotHeight = 16; // h-4 in pixels
  const maxBottom = containerHeight - dotHeight;
  
  // Calculate the percentage, maxing out at 300 AQI
  const percentage = Math.min(clampedAQI / 300, 1);
  const bottom = percentage * maxBottom;

  const currentStatus = getStatus(clampedAQI, airQualityStatus);

  return (
    <div className="bg-white p-4 rounded-2xl h-48">
      <h4 className="text-lg text-gray-300 mb-2">Air Quality</h4>
      <div className="flex justify-between">
        <div className="flex items-center justify-between mb-2">
          <div className="text-black py-4 relative">
            <span className="text-5xl">{Math.round(clampedAQI)}</span>
          </div>
        </div>
        <div>
          <div className="mt-4 flex justify-center">
            <div className="box-border relative w-7 h-20 bg-white rounded-full border border-gray-300">
              <div
                className="absolute left-0 right-0 mx-auto w-4 h-4 bg-blue-600 rounded-full box-border"
                style={{ bottom: `${bottom}px` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-base font-semibold text-gray-600">{currentStatus}</div>
    </div>
  );
};

export default AirQualityCard;