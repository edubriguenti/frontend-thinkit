import SobreNos from "./paginas/SobreNos";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/rodape";
import TemplatePadrao from "componentes/TemplatePadrao";
import Post from "componentes/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<TemplatePadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobrenos" element={<SobreNos />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        {/* 
        Na rota "/", a estrutura a ser renderizada é:
        <TemplatePadrao>
          <Inicio />
        </TemplatePadrao>

        Na rota "/sobrenos", a estrutura a ser renderizada é:
        <TemplatePadrao>
          <SobreNos />
        </TemplatePadrao>
        
        */}
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
