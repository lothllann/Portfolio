import React from 'react'
import { site } from '../../utils/sites'
import SiteCard from '../card/SiteCard'
import Btn_Back from './Btn_Back'

export const Front_End = () => {
  return (
    <section className='h-[100vh]'>
      <Btn_Back/>
      <h1 className="text-4xl font-extrabold mb-10">Front-End</h1>
      {site.map((i, index)=>(
        <SiteCard key={index} description={i.description} title={i.titulo} srcImg={i.srcImg} featured={i.srcImgFeatured}/>
      ))}
      
    </section>
  )
}
