import { formatTime } from "../utils/formatTime";
import { ThreaterType } from "../types";

import { Action, State } from "../reducers/ReservationReducer";

interface Props {
  threaters: ThreaterType[];
  state: State;
  dispatch: React.Dispatch<Action>;
}

export default function ShowTime({ threaters, dispatch, state }: Props) {
  const handleTime = (time: Date) => {
    dispatch({ type: "SET_SHOWTIME", payload: time });
    console.log(state);
  };

  return (
    <>
      <h2 className="text-white font-bold text-center">Horarios</h2>

      <ul className="m-4 flex gap-2">
        {threaters.map((threater) => {
          const time = new Date(threater.showtime);
          return (
            <li
              onClick={() => handleTime(time)}
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
