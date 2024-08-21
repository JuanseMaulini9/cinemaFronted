import { ThreaterType } from "../types";
import { State, Action } from "../reducers/ReservationReducer";
import { useState, useEffect } from "react";

import { useReservation } from "../hooks/useReservation";

interface Props {
  threater: ThreaterType;
  state: State;
  dispatch: React.Dispatch<Action>;
}

export default function Threater({ threater, dispatch, state }: Props) {
  console.log(threater);

  const { putThreater } = useReservation(state, dispatch);

  const [seats, setSeats] = useState(threater.seats);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setSeats(threater.seats);
  }, [threater]);

  const handleClick = (index: number) => {
    const newSeats = [...seats];

    if (newSeats[index].state === "libre" && count < state.tickets) {
      newSeats[index].state = "reservado";
      console.log("newSeats:", newSeats[index].state);
      console.log(newSeats);
      setSeats(newSeats);
      dispatch({ type: "SET_SEATS", payload: newSeats });
      setCount((count) => count + 1);
    } else if (newSeats[index].state === "reservado") {
      newSeats[index].state = "libre";
      setSeats(newSeats);
      dispatch({ type: "SET_SEATS", payload: newSeats });
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-white font-bold text-center">Asiento</p>
      <div className="min-h-40 w-64 border my-4 pt-8  pb-2 flex justify-center rounded relative">
        <div className="absolute w-1/2 h-2 bg-black top-0"></div>
        <div className="grid grid-cols-3 grid-rows-3 gap-6">
          {seats.map((seat, index) => (
            <div
              onClick={() => handleClick(index)}
              key={index}
              className={`flex size-8 rounded ${
                seat.state === "libre"
                  ? "bg-white "
                  : seat.state === "ocupado"
                  ? "bg-red-700 hover:bg-red-700 cursor-default"
                  : "bg-green-500 hover:bg-green-700 cursor-pointer"
              } 
              ${
                count < state.tickets ? "cursor-pointer hover:bg-slate-400" : ""
              }
              `}
            ></div>
          ))}
        </div>
      </div>
      <button
        className="bg-yellow-700 text-white rounded hover:bg-yellow-800 mb-4"
        onClick={putThreater}
      >
        Reservar
      </button>
    </div>
  );
}
