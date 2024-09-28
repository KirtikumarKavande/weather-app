"use client";
const useFetch = () => {
  const getDataFromDB = async (
    apiVersion: string,
    url: string,
    country:string | number=localStorage.getItem("location")||"london"
  ) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${apiVersion}/${url}&q=${country}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();

      return data;
    } catch (err) {
      return { statusCode: 400, message: "something went wrong" };
    }
  };
  return getDataFromDB;
};

export default useFetch;
