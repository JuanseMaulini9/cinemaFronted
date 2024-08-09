import { useMovies } from "../hooks/useMovies"
import MovieCard from "../components/MovieCard"


export default function HomePage(){

  const {movies} = useMovies()
  
  console.log(movies)

  return (
    <div>
      <header></header>
      <section >
        <ul className="flex flex-row flex-wrap gap-4 justify-center">
         {movies.map((movie)=>(
          <li key={movie._id}>
            <MovieCard _id={movie._id} title={movie.title} poster_path={movie.poster_path}></MovieCard>
          </li>
        ))}
        </ul>
       
      </section>
    </div>
  )
}