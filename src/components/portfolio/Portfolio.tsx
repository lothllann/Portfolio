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
      <h1 className="text-4xl font-extrabold mb-[50px]" >Portfólio</h1>
      <p>Aqui os projetos estão separados em 4 grupos, Front-End, Back-End, Full Stack e Mobile.</p>
      <p><span>obs: por enquanto não tenho nenhum projeto Mobile, porém, já estou trabalhando nisso.</span></p>

      <div className='flex justify-around align-middle mt-[150px] max-[1400px]:mt-[125px]  w-[100%] relative'>
      {
        portButtons.map((btn)=>(
          <NavLink to={btn.path} key={btn.name} className="btnIntro--portfolio">
            <h2>{btn.name}</h2>
            <div className='absolute w-[60%] h-[60%] transition-all'> <img src={btn.srcImg} alt={`Icone do ${btn.name}`} /> </div>
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