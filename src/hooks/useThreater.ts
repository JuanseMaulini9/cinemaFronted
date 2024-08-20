import { useState, useEffect } from "react";
import { ThreaterType } from "../types";

const useThreater = (id: string | undefined) => {
  const api_url = import.meta.env.VITE_API_URL;
  const [threaters, setThreaters] = useState<ThreaterType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchingThreaters = async () => {
      try {
        const response = await fetch(`${api_url}threater/getThreaters`);
        const data: ThreaterType[] = await response.json();

        const filterMovie = data.filter(
          (threater) => threater.movie._id === id
        );

        setThreaters(filterMovie);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchingThreaters();
  }, [id, api_url]);
  return { threaters, loading };
};

export default useThreater;
