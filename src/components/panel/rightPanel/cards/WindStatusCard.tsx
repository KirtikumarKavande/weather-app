import exp from "constants";

const WindStatusCard = ({
  data,
  windDir,
}: {
  data: number;
  windDir: string;
}) => (
  <div className="bg-white p-4 rounded-2xl h-48">
    <h4 className="text-lg text-gray-300 mb-2">Wind Status</h4>
    <div className="flex items-center justify-between mb-2">
      <div className="text-black py-4">
        <span className="text-5xl">{data}</span>
        <span className="text-lg ml-1">km/h</span>
      </div>
    </div>
    <div className="flex space-x-3 items-center">
      <div>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/officel/80/near-me.png"
          alt="near-me"
        />
      </div>
      <div className="text-lg  text-black font-[500]">{windDir}</div>
    </div>
  </div>
);
export default WindStatusCard;
