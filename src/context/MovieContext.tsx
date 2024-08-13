import { createContext, useState } from "react";
import { MovieType } from "../types";

const MovieContext = createContext({})

interface Props {
  children: React.ReactNode
}

export function MoviesContextProvider({children}: Props) {
  
  const [contextMovies, setContextMovies] = useState<MovieType[]>([])
  
  return <MovieContext.Provider value={{contextMovies, setContextMovies}}>{children}</MovieContext.Provider>
}

export default MovieContext