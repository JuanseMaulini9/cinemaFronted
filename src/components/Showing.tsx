import useWeek from "../hooks/useWeek";
import { useReducer, useEffect } from "react";
import useThreater from "../hooks/useThreater";

import Threater from "./Threater";

import Days from "./Days";
import ShowTime from "./ShowTime";
import Tickets from "./Tickets";

import reducer, { State } from "../reducers/ReservationReducer";

interface Props {
  id: string | undefined;
}

export default function Showing({ id }: Props) {
  const { days } = useWeek();

  const { threaters, loading } = useThreater(id);

  console.log(threaters);

  const initialState: State = {
    showTime: days[0],
    tickets: 1,
    seats: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filterThreaters =
    threaters?.filter((threater) => {
      const showtimeDate = new Date(threater.showtime);
      return (
        showtimeDate.getDate() === state.showTime.getDate() &&
        showtimeDate.getMonth() === state.showTime.getMonth()
      );
    }) || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center my-2 gap-4">
      <Days days={days} state={state} dispatch={dispatch}></Days>
      {filterThreaters.length === 0 ? (
        <p className="m-10 text-white font-bold text-center">
          No hay funciones este día
        </p>
      ) : (
        <>
          <ShowTime
            threaters={filterThreaters}
            state={state}
            dispatch={dispatch}
          ></ShowTime>
          <Tickets threaters={threaters[0]}></Tickets>
          <Threater threater={threaters[0]}></Threater>
        </>
      )}
    </div>
  );
}
