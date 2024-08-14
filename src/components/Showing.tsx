import useWeek from "../hooks/useWeek";
import { useState } from "react";

export default function Showing() {
  const { days } = useWeek();
  const [day, setDay] = useState<string | null>(days[0]);

  const handleDay = (e: React.MouseEvent<HTMLLIElement>) => {
    setDay(e.currentTarget.textContent);
    console.log(day)
  };

  return (
    <>
      <div className="flex flex-col items-center m-4">
        <h2 className="text-white font-bold text-xl">Functiones</h2>
        <ul className="m-4 flex gap-2">
          {days.map((day) => (
            <li
              onClick={handleDay}
              key={day}
              className="w-16 bg-yellow-700 rounded text-center font-bold text-white cursor-pointer hover:bg-yellow-800"
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
