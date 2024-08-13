import MovieCard from "./MovieCard"
import { MovieType } from "../types"

interface Props {
  movies: MovieType[]
}

export default function Billboard({movies}: Props){
  return (
    < >
        <h2 className="text-white text-3xl font-bold text-center my-4">Cartelera</h2>
        <ul className="flex flex-row flex-wrap gap-4 justify-center">
         {movies.map((movie)=>(
          <li key={movie._id}>
            <MovieCard _id={movie._id} title={movie.title} poster_path={movie.poster_path}></MovieCard>
          </li>
        ))}
        </ul>
       
      </>
  )
}