import { MovieType } from "../types";

interface Props {
  movies: MovieType[]
}

// type CarouselProps = Pick<MovieType, "backdrop_path" | "_id" | "poster_path">

export default function MovieCarousel({movies}: Props){
  return(
    <div className="relative">
      <img src={`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`} alt={movies[0]._id} className="w-full h-[550px] object-cover rounded-lg"/>
      <img src={`https://image.tmdb.org/t/p/w300${movies[0].poster_path}`} alt={movies[0]._id} className="absolute bottom-2 left-8 rounded-lg"/>
    </div>
  )
}