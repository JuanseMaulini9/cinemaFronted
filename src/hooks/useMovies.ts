import { useState, useEffect } from "react";
import { MovieType } from "../types";

export const useMovies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const api_url = import.meta.env.VITE_API_URL;

  const getMovies = async () => {
    const response = await fetch(`${api_url}movies/getMovies`);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies };
};
