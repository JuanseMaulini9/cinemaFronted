import { useNavigate } from "react-router-dom";

export default function SuccesPage() {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-white text-xl font-fold">La reserva se realizo con exito</p>
        <button onClick={()=> navigate("/")} className="bg-yellow-700 rounded text-white py-1 px-4 hover:bg-yellow-800">Volver al inicio</button>
    </div>
  );
}
