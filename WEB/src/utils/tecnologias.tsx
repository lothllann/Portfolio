import react from "../assets/react.png";
import reactNative from "../assets/react-native.png";
import tailWind from "../assets/tailwindcss-icon.svg";
import lottie from "../assets/lottie.png";
import postCss from "../assets/postCSS.png";
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
    recente: true,
  },
  {
    name: "React Native",
    srcImg: reactNative,
    recente: false,
  },
  {
    name: "Lottie",
    srcImg: lottie,
    recente: true,
  },
  {
    name: "TailWind",
    srcImg: tailWind,
    recente: true,
  },
  {
    name: "PostCss",
    srcImg: postCss,
    recente: true,
  },
  {
    name: "Node.js",
    srcImg: node,
    recente: false,
  },
  {
    name: "Phosphor",
    srcImg: phosphor,
    recente: true,
  },
  {
    name: "Materials-Icon",
    srcImg: materialIcons,
    recente: false,
  },
  {
    name: "Zod",
    srcImg: zod,
    recente: false,
  },
  {
    name: "Prisma",
    srcImg: prisma,
    recente: false,
  },
  {
    name: "Radix.Ui",
    srcImg: radixUi,
    recente: false,
  },
  {
    name: "Day.js",
    srcImg: dayjs,
    recente: false,
  },
];


export const recentes = all.filter((i)=> i.recente === true)

console.log(recentes)