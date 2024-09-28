import { humidityRange } from '@/utilitis/contsant';
import { getStatus } from '@/utilitis/helper';
import React from 'react';

const HumidityCard = ({ humidity }: { humidity: number }) => {
  const clampedHumidity = Math.min(Math.max(humidity, 0), 100);
  const containerHeight = 80;
  const dotHeight = 16;
  const maxBottom = containerHeight - dotHeight;
  const bottom = (clampedHumidity / 100) * maxBottom;

  const currentStatus = getStatus(clampedHumidity,humidityRange);
  return (
    <div className="bg-white p-4 rounded-2xl h-48">
      <h4 className="text-lg text-gray-300 mb-2">Humidity</h4>
      <div className="flex justify-between">
        <div className="flex items-center justify-between mb-2">
          <div className="text-black py-4 relative">
            <span className="text-5xl">{clampedHumidity && clampedHumidity}</span>
            <span className="text-lg ml-1 pb-10 absolute top-4">%</span>
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

export default HumidityCard;