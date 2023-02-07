import './App.css'
import { Home } from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Contato from './components/contato/Contato';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Sobre from './components/sobre/Sobre';


function App() {

return(
<div className="app">
  <BrowserRouter>
    <Menu />
    <main className='appBody'>
      <Route path='/' element={<Home />} />
      <Route path='/port' element={<Portfolio />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/skills' element={<Skills />} />
    </main>
  </BrowserRouter>
</div>
)
}

export default App
