import { useGetMovies } from "../hooks/useMovies";
import AdminMovies from "../components/Admin/AdminMovies";

export default function AdminPage() {
  
  const {movies} = useGetMovies()
  
  return (
    <div>
      <AdminMovies movies={movies}></AdminMovies>
    </div>
  );
}
