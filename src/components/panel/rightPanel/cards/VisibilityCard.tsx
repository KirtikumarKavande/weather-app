import { visibilityRange } from "@/utilitis/contsant";
import { getStatus } from "@/utilitis/helper";

const VisibilityCard = ({ visibility }: { visibility: number }) =>  {
  
  const currentStatus = getStatus(visibility,visibilityRange);
  
  return (
    <div className="bg-white p-4 rounded-2xl h-48">
      <h4 className="text-lg text-gray-300 mb-2">Visibility</h4>
      <div className="flex items-center justify-between mb-2">
        <div className="text-black py-4">
          <span className="text-5xl">{visibility}</span>
          <span className="text-lg font-medium ml-1">km/h</span>
        </div>
      </div>
      <div className="text-base font-semibold text-gray-600">{currentStatus}</div>

    </div>
  )};

  export default VisibilityCard