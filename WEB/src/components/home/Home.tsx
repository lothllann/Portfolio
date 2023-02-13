import React from 'react'
import Head from '../helper/Head'

export const Home = () => {
  return (
    <section>
    <Head title='Home' description='Home do meu portfólio pessoal' />

    <section className='mainHome'>
      <h1 className='TitleH1'>Hello There!</h1>
      <div className='MyNameHome' >
        Meu nome é <span>Nickolas Ruppenthal,</span>
      </div>
      <div className='aboutHome'>
        eu sou um desenvolvedor Front-End
        seja muito bem vindo ao meu portfólio
        e que a força esteja com voce.
      </div>
    </section>
  </section>
  )
}
