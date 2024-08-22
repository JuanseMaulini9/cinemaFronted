import { Routes, Route } from "react-router-dom";
import AdminPage from "../../pages/AdminPage";
import AdminMovie from "./AdminMovie";

export default function adminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminPage></AdminPage>}></Route>
      <Route path="/:movieId" element={<AdminMovie></AdminMovie>}></Route>
    </Routes>
  );
}