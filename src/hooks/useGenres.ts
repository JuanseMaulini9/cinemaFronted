import { useState, useEffect } from "react";
import { GenresType } from "../types";

export const useGenres = () => {
  const [genres, setGenres] = useState<GenresType[]>();

  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function getGenres() {
      try {
        const response = await fetch(`${api_url}genres/getGenres`);
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setGenres(data);
      } catch (error) {
        console.log(error);
      }
    }
    getGenres();
  }, [api_url]);
  return { genres };
};
