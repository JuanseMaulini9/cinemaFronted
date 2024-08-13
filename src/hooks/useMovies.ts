import { useState, useEffect, useContext } from "react";
import { MovieContextType, MovieType } from "../types";
import MovieContext from "../context/MovieContext";

export const useGetMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const api_url = import.meta.env.VITE_API_URL;

  const { contextMovies, setContextMovies } = useContext(
    MovieContext
  ) as MovieContextType;

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(`${api_url}movies/getMovies`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMovies(data);
        setContextMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (contextMovies.length === 0) {
      console.log("llame al servidor");
      getMovies();
    } else {
      console.log("agarre el contexto");
      setMovies(contextMovies);
    }
  }, [api_url, setContextMovies]);

  return { movies };
};
