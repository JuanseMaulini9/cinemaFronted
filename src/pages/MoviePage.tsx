import { useParams } from "react-router-dom"
import { useContext } from "react"
import { MovieContextType } from "../types"
import MovieContext from "../context/MovieContext"
import Showing from "../components/Showing"
import ImageMovie from "../components/ImageMovie"


export default function MoviePage(){
  
  const {movieId} = useParams()
  const {contextMovies} = useContext(MovieContext) as MovieContextType

  const movie = contextMovies.find(movie => movie._id === movieId)
  
  return(<>
  <ImageMovie movie={movie}></ImageMovie>
  <div className="">
    <Showing id={movieId}></Showing>
  </div>
  </>
  )
}