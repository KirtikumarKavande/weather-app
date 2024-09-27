import React, { useState } from "react";

interface ToggleProps {
  units: string[]; 
}

const DynamicUnitToggle: React.FC<ToggleProps> = ({ units }) => {
  const [activeUnit, setActiveUnit] = useState(units[0]); 

  const handleToggle = (unit: string) => {
    setActiveUnit(unit); 
  };

  return (
    <div className="flex items-center space-x-2">
      {units.map((unit, index) => (
        <button
          key={index}
          className={`px-2 py-1 rounded-full text-sm ${
            activeUnit === unit ? "bg-black text-white" : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => handleToggle(unit)}
        >
          {unit}
        </button>
      ))}
    </div>
  );
};

export default DynamicUnitToggle;
