const SunriseSunsetCard = ({ sunrise,sunset }:{sunrise:string,sunset:string}) => (
    <div className="bg-white p-4 rounded-2xl h-48">
      <h4 className="text-lg text-gray-300 mb-2">Sunrise & Sunset</h4>
      <div className="mt-2 text-2xl text-black space-y-8 ">
        <div >⬆️ {sunrise}</div>
        <div>⬇️ {sunset}</div>
      </div>
    </div>
  );

export default SunriseSunsetCard;