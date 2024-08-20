import { Action, State } from "../reducers/ReservationReducer";

interface Props {
  days: Date[];
  state: State;
  dispatch: React.Dispatch<Action>;
}

export default function Days({ days, state, dispatch }: Props) {
  const handleDay = (day: Date) => {
    dispatch({ type: "SET_DAY", payload: day });
    console.log(state);
  };

  return (
    <>
      <h2 className="text-white font-bold text-xl">Funciones</h2>
      <ul className="m-4 flex gap-2">
        {days.map((day, index) => (
          <li
            onClick={() => handleDay(day)}
            key={index}
            className={`w-16  rounded text-center font-bold text-white cursor-pointer  
              ${
                day.getDate() === state.showTime.getDate() &&
                day.getMonth() === state.showTime.getMonth()
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-yellow-700 hover:bg-yellow-800"
              }`}
          >
            {`${day.getDate()}/${day.getMonth() + 1}`}
          </li>
        ))}
      </ul>
    </>
  );
}
