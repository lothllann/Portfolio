import '@lottiefiles/lottie-player';
import Head from '../helper/Head';
import  './Portfolio.css';
import "../../App.css";
import { portButtons } from '../../utils/botoes';
import { NavLink } from 'react-router-dom';




const Portfolio = ()=> {
  const btns: number[] = []
  for (let i = 1; i <= 4; i++) {
    btns.push(i)
  }
  

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

      

      </section>

      <section className='projetos--portfolio'>

      </section>

      <footer className='footer'>

      </footer>
    </main>
    </>

   
  )
}

export default Portfolio