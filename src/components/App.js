import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import EscolhaDeSessao from "../pages/EscolhaDeSessao";
import EscolhaDeAssento from "../pages/EscolhaDeAssento";
import Sucesso from "../pages/Sucesso";

import EscolhaDeFilme from "../pages/EscolhaDeFilme";
import Footer from "./Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EscolhaDeFilme />} />
        <Route path="/sessoes/:idFilme" element={<EscolhaDeSessao />} />
        <Route path="/assentos/:idSessao" element={<EscolhaDeAssento />} />
        <Route path="/" element={<Sucesso />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
