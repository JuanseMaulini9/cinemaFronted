import useWeek from "../hooks/useWeek";
import { useReducer, useState } from "react";
import useThreater from "../hooks/useThreater";

import Threater from "./Threater";

import Days from "./Days";
import ShowTime from "./ShowTime";
import Tickets from "./Tickets";

import reducer, { State } from "../reducers/ReservationReducer";
import { ThreaterType } from "../types";

// import { dateFormate } from "../utils/formatTime";

interface Props {
  id: string | undefined;
}

export default function Showing({ id }: Props) {
  const { days } = useWeek();

  const { threaters } = useThreater(id);

  const [selectedThreater, setSelectedThreater] = useState<ThreaterType>()

  const initialState: State = {
    showTime: days[0],
    tickets: 1,
    seats: [],
    threaterId: ""
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

    console.log("reducer: ", state)


 
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
            setSelectedThreater={setSelectedThreater}
          ></ShowTime>
          {selectedThreater != null ? (
            <>
              <Tickets
                threater={selectedThreater}
                state={state}
                dispatch={dispatch}
              ></Tickets>
              <Threater
                threater={selectedThreater}
                state={state}
                dispatch={dispatch}
              ></Threater>
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}
