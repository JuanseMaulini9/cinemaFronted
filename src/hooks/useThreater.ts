import { useState, useEffect } from "react";
import { TheaterType } from "../types";

const useThreater = (id: string | undefined) => {
  const api_url = import.meta.env.VITE_API_URL;
  const [threaters, setThreaters] = useState<TheaterType[]>([]);

  useEffect(() => {
    const fetchingThreaters = async () => {
      try {
        const response = await fetch(`${api_url}threater/getThreaters`);
        const data: TheaterType[] = await response.json();

        const filterMovie = data.filter(
          (threater) => threater.movie._id === id
        );

        setThreaters(filterMovie);
        console.log(threaters);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingThreaters();
  }, [id, api_url]);
  return { threaters };
};

export default useThreater;
