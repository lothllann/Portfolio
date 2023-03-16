import React from 'react'
import { site } from '../../utils/sites'
import SiteCard from '../card/SiteCard'

export const Front_End = () => {
  return (
    <section>
      <h1 className="text-4xl font-extrabold mb-10">Front-End</h1>
      {site.map((i, index)=>(
        <SiteCard key={index} description={i.description} title={i.titulo} srcImg={i.srcImg}/>
      ))}
      
    </section>
  )
}
