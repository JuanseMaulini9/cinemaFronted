import { ThreaterType } from "../types"

interface Props {
  threaters: ThreaterType
}

export default function Tickets ({threaters}: Props)  {
  return (
    <>
      <h2 className="text-white font-bold text-center">
            Cantidad de entradas
          </h2>
          <select name="entradas">
            {threaters?.seats.map((_seat, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
    </>
  )
}