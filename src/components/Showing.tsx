import useWeek from "../hooks/useWeek";
import { useState } from "react";
import useThreater from "../hooks/useThreater";
import { formatTime } from "../utils/formatTime";
import Threater from "./Threater";

interface Props {
  id: string | undefined;
}

export default function Showing({ id }: Props) {
  const { days } = useWeek();
  const [day, setDay] = useState<Date>(days[0]);
  
  const { threaters } = useThreater(id);

  console.log(threaters)

  const handleDay = (index: number) => {
    setDay(days[index]);
    console.log(day);
  };

  return (
    <>
      <div className="flex flex-col items-center m-4">
        <h2 className="text-white font-bold text-xl">Funciones</h2>
        <ul className="m-4 flex gap-2">
          {days.map((day, index) => (
            <li
              onClick={() => handleDay(index)}
              key={index}
              className="w-16 bg-yellow-700 rounded text-center font-bold text-white cursor-pointer hover:bg-yellow-800"
            >
              {`${day.getDate()}/${day.getMonth() + 1}`}
            </li>
          ))}
        </ul>
        <div>
          <h2 className="text-white font-bold text-center">Horarios</h2>
          <ul className="m-4 flex gap-2">
            {threaters.map((threater) => {
              const date = new Date(threater.showtime)
              return (
                <li
                key={threater._id}
                className="w-16 bg-yellow-700 rounded text-center font-bold text-white cursor-pointer hover:bg-yellow-800"
              >
                {`${date.getHours()}:${formatTime(date.getMinutes())}`}
              </li>
              )
            })}
          </ul>
        </div>
        <Threater threater={threaters[0]}></Threater>
      </div>
    </>
  );
}
