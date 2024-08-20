import { Seattype } from "../types";

export interface State {
  showTime: Date;
  tickets: number;
  seats: Seattype[];
}

export type Action =
  | { type: "SET_DAY"; payload: Date }
  | { type: "SET_SHOWTIME"; payload: Date }
  | { type: "SET_TICKETS"; payload: number }
  | { type: "SET_SEATS"; payload: Seattype[] };

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_DAY": {
      const updateShowTime = new Date(state.showTime);
      updateShowTime.setFullYear(action.payload.getFullYear());
      updateShowTime.setMonth(action.payload.getMonth());
      updateShowTime.setDate(action.payload.getDate());
      return { ...state, showTime: updateShowTime };
    }
    case "SET_SHOWTIME": {
      const updateShowTime = new Date(state.showTime);
      updateShowTime.setHours(action.payload.getHours());
      updateShowTime.setMinutes(action.payload.getMinutes());
      updateShowTime.setSeconds(action.payload.getSeconds());
      return { ...state, showTime: updateShowTime };
    }

    case "SET_TICKETS":
      return { ...state, tickets: action.payload };
    case "SET_SEATS":
      return { ...state, seats: action.payload };
    default:
      return state;
  }
}
