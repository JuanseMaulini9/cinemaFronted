import { useParams } from "react-router-dom"
import { useContext } from "react"
import { MovieContextType } from "../types"
import MovieContext from "../context/MovieContext"
import { useGenres } from "../hooks/useGenres"


export default function MoviePage(){
  
  const {movieId} = useParams()
  const {genres} = useGenres()
  const {contextMovies} = useContext(MovieContext) as MovieContextType

  const movie = contextMovies.find(movie => movie._id === movieId)
  console.log(movie)
  console.log(genres)
  return(<>
  <div className="relative">
    <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} className="w-full h-96 object-cover"/>
    <img src={`https://image.tmdb.org/t/p/w300${movie?.poster_path}`}  className="absolute bottom-4 left-20  h-80 rounded"/>
  </div>
  <div className="bg-yellow-700 w-80 h-full">
    <h2 className="text-white font-bold text-xl text-center p-4">{movie?.title}</h2>
    <p className="text-white border text-center">{movie?.adult ? "+18" : "ATP"}</p>
    <ul className="flex flex-row gap-4 justify-center p-2">
      {
        movie?.genre_ids.map((genreId)=> {
          const genreName = genres?.find(genre=> genre.id === genreId)
          return <li className="text-gray-300" key={genreName?.id}>{genreName?.name}</li>
        })
      }
    </ul>
    <h3 className="text-white text-lg text-center">Sinopsis</h3>
    <p className="text-gray-300 text-sm text-left p-4">{movie?.overview}</p>
  </div>
  </>)
}