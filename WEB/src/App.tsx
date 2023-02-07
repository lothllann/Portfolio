import "./App.css";
import "./styles/global.css";
import { Home } from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Contato from "./components/contato/Contato";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Sobre from "./components/sobre/Sobre";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <main className="appBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/port" element={<Portfolio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
