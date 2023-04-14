import SobreNos from "./paginas/SobreNos";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
