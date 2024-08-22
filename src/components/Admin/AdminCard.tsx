import { MovieType } from "../../types";
import { Link } from "react-router-dom";

type CardProps = Pick<MovieType, "title" | "poster_path" | "_id">

export default function AdminCard ({title,poster_path, _id} : CardProps) {
  return (
      <Link to={`/admin/${_id}`} className="w-52 p-2 flex flex-col  text-white transition duration-500 ease-in-out transform hover:scale-105">
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} className="rounded "/>
      <p className="text-gray-300 text-lg font-bold text-center">{title}</p>
    </Link>

    
  )
}