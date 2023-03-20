import '@lottiefiles/lottie-player';
import { Route, Routes } from 'react-router-dom';
import Head from '../helper/Head';
import  './Portfolio.css';
import "../../App.css";
import HomePortfolio from './HomePortfolio';
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
       
        <Routes>
        <Route path='/' element={<HomePortfolio/>}/>
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