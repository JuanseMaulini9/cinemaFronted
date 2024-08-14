import { MovieType } from "../types";
import { useGenres } from "../hooks/useGenres";

interface Props {
  movie: MovieType | undefined;
}

export default function ImageMovie({ movie }: Props) {
  const { genres } = useGenres();

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        className="absolute inset-0 w-full h-full object-cover object-top opacity-30 filter blur-sm"
        alt="Backdrop"
      />

      <div className="relative flex justify-center items-start w-full px-8 z-10">
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          className="h-[500px] rounded shadow-lg"
          alt="Poster"
        />

        <div className="ml-8 text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-4">{movie?.title}</h2>
          <ul className="flex flex-row gap-4 py-2">
            {movie?.genre_ids?.map((genreId) => {
              const genreName = genres?.find((genre) => genre.id === genreId);
              return (
                <li className="" key={genreId}>
                  {genreName?.name},
                </li>
              );
            })}
          </ul>
          <p className="text-white border text-center">
            {movie?.adult ? "+18" : "ATP"}
          </p>
          <h3 className="text-xl mt-4">Sinopsis:</h3>
          <p className="text-lg my-4 ">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}
