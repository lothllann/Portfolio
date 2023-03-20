import React from 'react'
import { site } from '../../utils/sites'
import SiteCard from '../card/SiteCard'
import Footer from '../footer/Footer'
import Btn_Back from './Btn_Back'

export const Front_End = () => {
  const [grid, setGrid] = React.useState('mosaico')
  return (
    <section className='container_Front'>
      <Btn_Back/>
      <h1 className="text-4xl font-extrabold mb-[75px]">Front-End</h1>
      <main className={`mainFront-end ${grid}`}>
      {site.map((i, index)=>(
        <SiteCard key={index} description={i.description} title={i.titulo} srcImg={i.srcImg} featured={i.srcImgFeatured} grid={grid}/>
      ))}
      </main>

        <Footer/>
      
    </section>
  )
}
