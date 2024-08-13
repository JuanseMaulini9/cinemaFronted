import { useGetMovies } from "../hooks/useMovies";
import Billboard from "../components/Billboard";

export default function HomePage() {
  const { movies } = useGetMovies();

  console.log(movies);

  return (
    <div className="flex flex-col mx-28">
      {/* <section className="w-full">
        <MovieCarousel movies={movies}></MovieCarousel>
      </section> */}
      <section>
        <Billboard movies={movies}></Billboard>
      </section>
    </div>
  );
}
