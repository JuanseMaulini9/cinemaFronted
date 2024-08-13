export type MovieType = {
  _id: string;
  idtmdb: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MovieContextType = {
  contextMovies: MovieType[];
  setContextMovies: (value: MovieType) => void;
};

export type GenresType = {
  id: number;
  name: string;
};
