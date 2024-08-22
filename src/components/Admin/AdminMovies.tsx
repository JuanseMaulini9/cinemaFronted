import AdminCard from "./AdminCard"
import { MovieType } from "../../types"

interface Props {
  movies: MovieType[]
}

export default function AdminMovies({movies}: Props){
  return (
    <>
        <h2 className="text-white text-3xl font-bold text-center my-4">Peliculas disponibles</h2>
        <ul className="flex flex-row flex-wrap gap-4 justify-center">
         {movies.map((movie)=>(
          <li key={movie._id}>
            <AdminCard _id={movie._id} title={movie.title} poster_path={movie.poster_path}></AdminCard>
          </li>
        ))}
        </ul>
       
      </>
  )
}