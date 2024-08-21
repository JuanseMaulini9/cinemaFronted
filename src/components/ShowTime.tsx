import { formatTime } from "../utils/formatTime";
import { ThreaterType } from "../types";

import { Action, State } from "../reducers/ReservationReducer";

interface Props {
  threaters: ThreaterType[];
  state: State;
  dispatch: React.Dispatch<Action>;

  setSelectedThreater: (i: ThreaterType) => void;
}

export default function ShowTime({
  threaters,
  dispatch,
  state,
  setSelectedThreater,
}: Props) {
  const handleTime = (time: Date, index: number) => {
    dispatch({ type: "SET_SHOWTIME", payload: time });
    dispatch({ type: "SET_THREATER", payload: threaters[index]._id });
    setSelectedThreater(threaters[index]);
  };

  return (
    <>
      <h2 className="text-white font-bold text-center">Horarios</h2>

      <ul className="m-4 flex gap-2">
        {threaters.map((threater, index) => {
          const time = new Date(threater.showtime);
          return (
            <li
              onClick={() => handleTime(time, index)}
              key={threater._id}
              className={`w-16  rounded text-center font-bold text-white cursor-pointer 
                  ${
                    time.getHours() === state.showTime.getHours() &&
                    time.getMinutes() === state.showTime.getMinutes()
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-yellow-700 hover:bg-yellow-800"
                  }
                  `}
            >
              {`${time.getHours()}:${formatTime(time.getMinutes())}`}
            </li>
          );
        })}
      </ul>
    </>
  );
}
