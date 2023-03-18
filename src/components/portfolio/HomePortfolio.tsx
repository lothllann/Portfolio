import React from 'react'
import { portButtons } from '../../utils/botoes';
import { NavLink } from 'react-router-dom';

const HomePortfolio = () => {
  return (
    <>
        <h1 className="text-4xl font-extrabold mb-[50px]" >Portfólio</h1>
    <p className='text-[1.3em] min-w-0-[300px] max-w-[750px] text-center mt-[10px]'>Aqui os projetos estão separados em 4 grupos, Front-End, Back-End, Full Stack e Mobile.</p>
    <div className='flex flex-1 justify-around mt-[150px] max-[1400px]:mt-[125px] max-[1000px]:mt-[100px] mb-[20%] w-[100%] relative'>
    {
      portButtons.map((btn)=>(
        <NavLink to={btn.path} key={btn.name} className="btnIntro--portfolio">
          <h2>{btn.name}</h2>
          <div className='absolute w-[60%] h-[60%] transition-all'> <img src={btn.srcImg} alt={`Icone do ${btn.name}`} /> </div>
        </NavLink>
      ))
    }
    </div>
  
    </>
  )

}

export default HomePortfolio