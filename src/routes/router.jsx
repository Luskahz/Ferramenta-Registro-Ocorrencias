import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard.jsx";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;