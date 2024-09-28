import React, { useState } from "react";
import { Search, LocateIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { setForecast } from "@/store/slices/forcastSlice";
import useFetch from "@/hooks/useFetch";

const SearchLocation = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const fetchData = useFetch();

  const handleLocationSubmit = async (e) => {
    e.preventDefault();
    const loc = location || "london"; 

    try {
      const data = await fetchData("v1", "forecast.json?&days=7&aqi=yes", loc);

      if (data && !data.error) {
        dispatch(setForecast(data));
        localStorage.setItem("location", loc);
      } else {
        throw new Error(data?.error?.message || "Something went wrong!");
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLocation("");
    }
  };

  return (
    <form
      className="flex justify-between items-center mb-8"
      onSubmit={handleLocationSubmit}
    >
      <div className="relative w-full max-w-xs flex items-center">
        <input
          type="text"
          placeholder="Search for places ..."
          className="w-full pl-10 pr-4 py-2 rounded-full text-black placeholder:text-black"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-black" size={17} />
      </div>
      <button type="submit" className="p-2 bg-gray-100 rounded-full">
        <LocateIcon size={20} className="text-black" />
      </button>
    </form>
  );
};

export default SearchLocation;
