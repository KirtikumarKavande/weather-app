import React from "react";

const UVIndexCard = ({ uv }: { uv: number }) => {
  const maxUvIndex = 14; 
  const uvPercentage = (uv/ maxUvIndex) * 100; 
  const strokeLength = 126; 
  return (
    <div className="bg-white p-4 rounded-2xl h-48 relative">
      <h4 className="text-lg text-gray-300 mb-2">UV Index</h4>
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <svg className="w-48 h-28" viewBox="0 0 100 50">
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="#E5E7EB" 
              strokeWidth="6"
            />
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="#FBBF24" 
              strokeWidth="16"
              strokeDasharray={`${(uvPercentage / 100) * strokeLength} ${strokeLength}`} // Dynamic fill based on UV value
            />
          </svg>
          <div className="absolute inset-0 flex justify-center items-center top-8">
            <span className="text-5xl mt-2 font-bold text-black">{uv}</span>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-24 text-gray-400">6</div>
      <div className="absolute top-12 left-40 text-gray-400">9</div>
      <div className="absolute top-24 left-52 text-gray-400">12</div>
    </div>
  );
};

export default UVIndexCard;
