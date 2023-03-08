import react from "../assets/react.png";
import reactNative from "../assets/react-native.png";
import tailWind from "../assets/tailwindcss-icon.svg";
import lottie from "../assets/lottie.png";
import postCss from "../assets/PostCSS.png";
import node from "../assets/nodejs.png";
import phosphor from "../assets/phosphor.png";
import materialIcons from "../assets/material-icon.png";
import zod from "../assets/zod.png";
import dayjs from "../assets/dayjs.png";
import prisma from "../assets/prisma.png";
import radixUi from "../assets/radix.png";



export const all = [
  {
    name: "React",
    srcImg: react,
    socialMedia: '',
    about: '',
    socialMediaLink:'',
    recente: true,
  },
  {
    name: "React Native",
    srcImg: reactNative,
    recente: false,
        socialMedia: '',
    socialMediaLink:'',
        about: '',
  },
  {
    name: "Lottie",
    srcImg: lottie,
    recente: true,

    socialMediaLink:'',
    socialMedia: '',
    about: '',  },
  {
    name: "TailWind",
    srcImg: tailWind,
    recente: true,

    socialMediaLink:'',
    socialMedia: '',
    about: '',  },
  {
    name: "PostCss",
    srcImg: postCss,
    recente: true,

    socialMediaLink:'',
    socialMedia: '',
    about: '',  },
  {
    name: "Node.js",
    srcImg: node,
    recente: false,
        socialMedia: '',
    socialMediaLink:'',
        about: '',
  },
  {
    name: "Phosphor",
    srcImg: phosphor,
    recente: true,

    socialMediaLink:'',
    socialMedia: '',
    about: '',  },
  {
    name: "Materials-Icon",
    srcImg: materialIcons,
    recente: true,

    socialMediaLink:'',
    socialMedia: '',
    about: '',  },
  {
    name: "Zod",
    srcImg: zod,
    recente: false,
        socialMedia: '',
    socialMediaLink:'',
        about: '',
  },
  {
    name: "Prisma",
    srcImg: prisma,
    recente: false,
        socialMedia: '',
    socialMediaLink:'',
        about: '',
  },
  {
    name: "Radix.Ui",
    srcImg: radixUi,
    recente: true,
    socialMedia: '@radix_ui',
    socialMediaLink:'',
    about: 'Componentes, ícones, cores e modelos para criar interfaces de usuário acessíveis e de alta qualidade. Gratuito e de código aberto.',  },
  {
    name: "Day.js",
    srcImg: dayjs,
    recente: false,
    socialMedia: '',
    socialMediaLink:'',
    about: '',
  },
];


export const recentes = all.filter((i)=> i.recente === true)

