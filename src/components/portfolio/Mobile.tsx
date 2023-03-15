import React from 'react'
import Lottie from "lottie-react";
import notFound from "../lottieFiles/notFound.json";
import Btn_Back from './Btn_Back';
import './Portfolio.css'

const style = {
  height: 0.5 * window.innerHeight,
};

export const Mobile = () => {
  return (
   <section >
        <Btn_Back />

        <main className='flex w-[100%] flex-col items-center mainMobile'>
        <h1 className="text-4xl font-extrabold mb-10">Apps Mobile</h1>
     
        <Lottie className='self-center' animationData={notFound} style={style}/>
        </main>


   </section>

     
   
  )
}
