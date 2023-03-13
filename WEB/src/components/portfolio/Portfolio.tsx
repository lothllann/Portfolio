import '@lottiefiles/lottie-player';
import { Route, Routes } from 'react-router-dom';
import Head from '../helper/Head';
import  './Portfolio.css';
import "../../App.css";
import { portButtons } from '../../utils/botoes';
import { NavLink } from 'react-router-dom';
import { Front_End } from './Front_End';
import { Back_End } from './Back_End';
import { Full_Stack } from './Full_Stack';
import { Mobile } from './Mobile';




const Portfolio = ()=> {
  

  return (
    <>
    <Head
        title="Works"
        description="página que mostra os meus projetos"
      />
    <main className='mainPortfolio'>
      <section className='intro--portfolio'>
      <h1 className="text-4xl font-extrabold mb-5" >Portfólio</h1>

      <div className='flex justify-around align-middle mt-[150px] w-[100%]'>
      {
        portButtons.map((btn)=>(
          <NavLink to={btn.path} key={btn.name} className="btnIntro--portfolio">
            <h2>{btn.name}</h2>
          </NavLink>
        ))
      }
      </div>

      <Routes>
        <Route path='front' element={<Front_End />}/>
        <Route path='back' element={<Back_End />}/>
        <Route path='fstack' element={<Full_Stack />}/>
        <Route path='mobile' element={<Mobile />}/>
      </Routes>
      </section>

    
    </main>
    </>

   
  )
}

export default Portfolio