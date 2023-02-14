import React from 'react'
import Head from '../helper/Head'
import './Home.css'

export const Home = () => {
  return (
    <>
    <Head title='Home' description='Home do meu portfólio pessoal' />

    <section className='mainHome'>
      <h1 className='TitleH1'>Hello There!</h1>
      <div className='MyNameHome' >
        Meu nome é <span>Nickolas Ruppenthal</span>.
      </div>
      <div className='aboutHome'>
      Eu sou Web Developer,  muito bem vindo
      ao meu portfólio, fique a vontade para ver 
      meus projetos. E que a força esteja com voce
      </div>
    </section>
  </>
  )
}
