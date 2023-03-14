import pcw from "../components/lottieFiles/computerw.json";
import code from "../components/lottieFiles/code.json";
import dev from "../components/lottieFiles/it-developer.json";
import book from "../components/lottieFiles/book.json";
import Lottie from "lottie-react";
import front_end from '../assets/front-end.png'
import back_end from '../assets/back-end.png'
import full_stack from '../assets/fullStack.png'
import mobile from '../assets/mobile.png'

export const ListButtons = [
  {
    nome: "Home",
    path: "/",
    image: <Lottie id='firstLottie' animationData={pcw} loop={false} style={{width: 50, height: 50}}/>
  },

  {
    nome: "Works",
    path: "/port",
    image: <Lottie animationData={book} loop={false} style={{width: 50, height: 50}}/>,
  },

  {
    nome: "Skills",
    path: "/skills",
    image: <Lottie animationData={code} loop={false} style={{width: 50, height: 50}}/>,
  },

  {
    nome: "About",
    path: "/sobre",
    image: <Lottie animationData={dev} loop={false} style={{width: 50, height: 50}}/>,
  },

];


export const portButtons = [
  {
    name: 'Front-End',
    srcImg: front_end,
    path: '/port/front',
  },
  {
    name: 'Back-End',
    srcImg: back_end,
    path: '/port/back'
  },
  {
    name: 'Full-Stack',
    srcImg: full_stack,
    path: '/port/fstack'
  },
  {
    name: 'Apps Mobile',
    srcImg: mobile,
    path: '/port/mobile'
  }
]