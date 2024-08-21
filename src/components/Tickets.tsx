import { ThreaterType } from "../types"
import { Action, State } from "../reducers/ReservationReducer";


interface Props {
  threater: ThreaterType
  state: State;
  dispatch: React.Dispatch<Action>;
}

export default function Tickets ({threater, dispatch}: Props)  {
  
  const seatsAvailable = threater.seats.filter(seats => seats.state === "libre")


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_TICKETS", payload: parseInt(e.target.value) });
  }

  return (
    <>
      <h2 className="text-white font-bold text-center">
            Cantidad de entradas
          </h2>
          <select name="entradas" onChange={handleChange}>
            {seatsAvailable.map((_seat, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
    </>
  )
}