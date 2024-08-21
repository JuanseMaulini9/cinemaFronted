import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SuccesPage from "./pages/SuccesPage";
import { MoviesContextProvider } from "./context/MovieContext";

function App() {
  return (
    <MoviesContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/succes" element={<SuccesPage/>}  />
      </Routes>
    </MoviesContextProvider>
  );
}

export default App;
