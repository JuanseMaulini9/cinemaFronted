import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SuccesPage from "./pages/SuccesPage";
import { MoviesContextProvider } from "./context/MovieContext";
import AdminRoutes from "./components/Admin/AdminRoutes";

function App() {
  const isAdmin = window.location.search.includes("adminKey=admin");

  return (
    <MoviesContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/succes" element={<SuccesPage />} />
        <Route
          path="/admin/*"
          element={isAdmin ? <AdminRoutes/> : <Navigate to="/" />}
        ></Route>
      </Routes>
    </MoviesContextProvider>
  );
}

export default App;
