import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard.jsx";
import { CME } from "../pages/cme.jsx";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/monitoramento" element={<CME />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
