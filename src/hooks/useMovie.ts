import { useState, useEffect } from "react";
import { MovieType } from "../types";

const useGetMovie = (movieId: string | undefined) => {
  const [movie, setMovie] = useState<MovieType>();
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchMovie() {
      try {
        console.log(api_url);
        console.log("desde el hook:", movieId);
        const response = await fetch(`${api_url}movies/getMovie/${movieId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("data:", data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [api_url, movieId]);

  return { movie };
};

export default useGetMovie;
