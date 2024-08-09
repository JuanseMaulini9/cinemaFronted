import { MovieType } from "../types";

type CardProps = Pick<MovieType, "title" | "poster_path" | "_id">

export default function MovieCard ({title,poster_path} : CardProps) {
  return (
    <div className="w-52 p-2">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} className="rounded"/>
      <p className="text-gray-300 text-lg font-bold">{title}</p>
    </div>
  )
}