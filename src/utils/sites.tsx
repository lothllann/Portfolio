import dogs from "../assets/Dogs.png";
import react from "../assets/react.png";
import js from "../assets/js.svg";
import html from "../assets/html.svg";
import netflix from "../assets/netflix_clone.png";
import reading from "../assets/ReadingMarker.png";
import ipb from "../assets/IPB.png";
import habits from "../assets/Habitss.png";
import robotron from "../assets/robotron.png";
import mochila from "../assets/mochila5.png";
import aluraMidi from "../assets/AluraMidi.png";
import java from "../assets/java.svg";

export const sites = [
  {
    titulo: "Dogs",
    description:
      "Uma rede social com foco em cachorrinhos, aonde é possivel compartilhar as fotos de seus pets e ver as fotos de outros pets.",
    srcImg: dogs,
    srcImgFeatured: react,
    grupo: "front",
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: [
      { nome: "CSS", percent: 23.3 },
      { nome: "HTML", percent: 1.1 },
      { nome: "JavaScript", percent: 75.6 },
    ],
    tecnologias: ["React", "Radix.Ui", "Vite", "Victory","Materials-Icon"],
  },
  {
    titulo: "Netflix Clone",
    description:
      "Um site que organiza filmes e séries em categorias distintas, mostra series em destaque no momento e disponibilizando seus trailers.",
    srcImg: netflix,
    srcImgFeatured: react,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript"],
    tecnologias: ["React", "Materials-Icon"],
    grupo: "front",
  },
  {
    titulo: "Reading Marker",
    description:
      "Um site que serve de “marca pagina”, da para salvar livros ja lidos,  mostra informações do livro atual e permite fazer uma lista de livros que deseja ler no futuro.",
    srcImg: reading,
    srcImgFeatured: js,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript"],
    tecnologias: [""],
    grupo: "front",
  },
  {
    titulo: "Igreja Presbiteriana",
    description:
      "Este é um site da Igreja Presbiteriana de Caxias do sul, aonde voce pode conferir as programações, cursos, um pouco da historia e no que a Igreja Presbiteriana acredita.",
    srcImg: ipb,
    srcImgFeatured: html,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript"],
    tecnologias: [""],
    grupo: "front",
  },
  {
    titulo: "Habits",
    description:
      "Este site serve como um organizador e lembretes de habitos diversos, voce que escolhe o que vai fazer e com que frequencia.",
    srcImg: habits,
    srcImgFeatured: react,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript", "TypeScript"],
    tecnologias: [
      "React",
      "TailWind",
      "PostCss",
      "Node.js",
      "Zod",
      "Prisma",
      "Radix.Ui",
      "Day.js",
      "Vite",
    ],
    grupo: "full",
  },
  {
    titulo: "Mohila de Viagem",
    description:
      "Monte a sua mochila de viagem, escolhendo o que vai levar e a quantidade ou retirando se mudar de idéia.",
    srcImg: mochila,
    srcImgFeatured: js,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript"],
    tecnologias: [],
    grupo: "front",
  },
  {
    titulo: "AluraMidi",
    description:
      "Site para treinar JavaScript, usando ele para manipular sons de percusão em botões.",
    srcImg: aluraMidi,
    srcImgFeatured: js,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript"],
    tecnologias: ["React"],
    grupo: "front",
  },
  {
    titulo: "Robotron",
    description:
      "Monte voce mesmo um robo, escolhendo as peças e aumentando seu poder.",
    srcImg: robotron,
    srcImgFeatured: js,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["CSS", "HTML", "JavaScript"],
    tecnologias: [""],
    grupo: "front",
  },
  {
    titulo: "FinalProject",
    description: "API Rest de produtos, feito em JAVA - SpringBoot.",
    srcImg: robotron,
    srcImgFeatured: java,
    como_eu_fiz:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    linguagens: ["Java"],
    tecnologias: ["SpringBoot"],
    grupo: "back",
  },
];
