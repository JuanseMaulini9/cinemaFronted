import { useParams } from "react-router-dom";
import useGetMovie from "../../hooks/useMovie";
import { useState } from "react";
import useCreateThreater from "../../hooks/useCreateThreater";

export default function AdminMovie() {
  const { movieId } = useParams();
  
  const { movie } = useGetMovie(movieId);
  console.log(movieId)
  console.log(movie)

  const {ok, fetchPostThreater} = useCreateThreater()
  
  
  const [showTime, setShowTime] = useState<string>("")

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setShowTime(event.target.value)
  }

  const handleClick = () => {
    if (movieId && showTime) {
      console.log("Calling fetchPostThreater with", { showTime, movieId });
      fetchPostThreater("2024-08-22T12:00", "66b52ca89d0f4f130af15722");
    }
    console.log(ok);  // Esto debería mostrar `false` inicialmente
  }

  return (
    <div className="flex flex-col justify-center items-center size-full">
      <div>
        <h2 className="font-bold text-white text-lg my-4 text-center">
          {movie?.title}
        </h2>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt=""
          className="w-52"
        />
      </div>
      <div className="mt-4">
        <input type="datetime-local" onChange={handleChange} />
      </div>
      <button className="bg-yellow-700 px-2 py-1 rounded text-white font-bold m-4" onClick={handleClick}>Crear funcion</button>
      {ok && <p>Threater creado exitosamente</p>}
    </div>
  );
}
