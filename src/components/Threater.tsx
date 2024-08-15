import { TheaterType } from "../types";

interface Props {
  threater: TheaterType | undefined
}

export default function Threater({ threater }: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-white font-bold text-center">Asiento</p>
      <div className="min-h-40 w-64 border my-4 pt-8  pb-2 flex justify-center rounded relative">
      <div className="absolute w-1/2 h-2 bg-black top-0"></div>
      <div className="grid grid-cols-3 grid-rows-3 gap-6"> 
        {threater?.seats.map((seat, index) => (
          <div
            key={index}
            className={`flex size-8 rounded ${seat.state === "libre" ? "bg-white" : "bg-red-900"} hover:bg-gray-500 cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
    <button className="bg-yellow-700 text-white rounded hover:bg-yellow-800 mb-4">Reservar</button>
    </div>
    
  );
}