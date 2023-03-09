import '@lottiefiles/lottie-player';
import Head from '../helper/Head';
import  './Portfolio.css';
import "../../App.css";




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