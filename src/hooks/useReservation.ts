import { Action, State } from "../reducers/ReservationReducer";
import { useNavigate } from "react-router-dom";

export const useReservation = (
  state: State,
  dispatch: React.Dispatch<Action>
) => {
  const api_url = import.meta.env.VITE_API_URL;

  const body = {
    threaterId: state.threaterId,
    seats: state.seats,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const navigate = useNavigate();

  async function putThreater() {
    try {
      const response = await fetch(`${api_url}threater/editThreater`, options);
      const data = await response.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch({ type: "SET_SEATS", payload: data.seats });
      navigate("/succes");
    } catch (error) {
      console.log(error);
    }
  }

  return { putThreater };
};
