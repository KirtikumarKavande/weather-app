import { getCountryImage } from "@/utilitis/unSplash";
import React, { useEffect, useState } from "react";

const CityImage = ({ location, dayIndex }) => {
  const [countryImageUrl, setCountryImageUrl] = useState(null);
  useEffect(() => {
    const fetchCountryImage = async () => {
      if (location && location) {
        const imageUrl = await getCountryImage(location);
        setCountryImageUrl(imageUrl);
      }
    };

    fetchCountryImage();
  }, [location, dayIndex]);
  return (
    <div className=" rounded-2xl p-3 relative">
      <img
        src={countryImageUrl}
        alt="City skyline"
        className="w-full lg:w-72 h-28 object-cover rounded-xl mb-4"
      />
      <div className="flex justify-center absolute top-16 items-center  text-base text-white font-semibold ">
        <span className="px-2">
          <div className="w-72  flex justify-center items-center">
            <div>{location?.name}</div> <div>,</div>
            <div>{location?.country}</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default CityImage;
