const UVIndexCard = ({ uv }: { uv: number }) => (
    <div className="bg-white p-4 rounded-2xl h-48">
      <h4 className="text-lg text-gray-300 mb-2">UV Index</h4>
      <div className="flex items-center justify-between mb-2">
        <div className="text-black py-4">
          <span className="text-5xl">{uv}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-yellow-400 h-2.5 rounded-full"
          style={{
            width: `${(uv / 12) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );

  export default UVIndexCard