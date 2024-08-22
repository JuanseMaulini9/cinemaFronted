import { useState } from "react";

export default function useCreateThreater() {
  const api_url = import.meta.env.VITE_API_URL;

  const [ok, setOk] = useState(false);

  async function fetchPostThreater(showTime: string, movieId: string) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ showTime, movieId, seatsNumber: 9 }),
    };

    try {
      const response = await fetch(`${api_url}threater/postThreater`, options);
      const data = await response.json();
      console.log(data);
      if (data.error) throw new Error();
      setOk(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setOk(false);
      }, 3000);
    }
  }

  return { ok, fetchPostThreater };
}
