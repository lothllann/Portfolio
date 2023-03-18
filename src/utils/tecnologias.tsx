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
import vite from "../assets/vite.png";


export const all = [
  {
    name: "React",
    srcImg: react,
    socialMedia: "@reactjs",
    about: "Uma biblioteca JavaScript para criar interfaces de usuário.",
    link: "https://pt-br.reactjs.org/",
    recente: true,
  },
  {
    name: "React Native",
    srcImg: reactNative,
    recente: false,
    socialMedia: "@reactnative",
    link: "https://reactnative.dev/",
    about: "Crie aplicativos nativos para Android, iOS e muito mais usando o React.",
  },
  {
    name: "Lottie",
    srcImg: lottie,
    recente: true,
    link: "https://lottiefiles.com/",
    socialMedia: "@LottieFiles",
    about: "LottieFiles tira a complexidade do Motion Design. Ele permite que você crie, edite, teste, colabore e envie uma loteria da maneira mais fácil possível.",
  },
  {
    name: "TailWind",
    srcImg: tailWind,
    recente: true,
    link: "https://tailwindcss.com/",
    socialMedia: "@tailwindui",
    about: "Uma estrutura CSS baseada em utilitários, repleta de classes que pode ser composta para criar qualquer design, diretamente em sua marcação.",
  },
  {
    name: "PostCss",
    srcImg: postCss,
    recente: true,
    link: "https://postcss.org/",
    socialMedia: "@PostCSS",
    about: "Adicione prefixos de fornecedor a regras CSS.",
  },
  {
    name: "Node.js",
    srcImg: node,
    recente: false,
    socialMedia: "@nodejs",
    link: "https://nodejs.org/en/",
    about: "Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de rede escalonáveis.",
  },
  {
    name: "Phosphor",
    srcImg: phosphor,
    recente: true,
    link: "https://phosphoricons.com/",
    socialMedia: "@_phosphoricons",
    about: "Phosphor é uma família de ícones flexíveis para interfaces, diagramas, apresentações - o que quer que seja, na verdade.",
  },
  {
    name: "Materials-Icon",
    srcImg: materialIcons,
    recente: true,
    link: "https://mui.com/material-ui/material-icons/",
    socialMedia: "@MUI_hq",
    about: "O MUI oferece um conjunto abrangente de ferramentas de interface do usuário para ajudá-lo a enviar novos recursos mais rapidamente.",
  },
  {
    name: "Zod",
    srcImg: zod,
    recente: false,
    socialMedia: "@zod",
    link: "https://www.npmjs.com/package/zod",
    about: "Zod é uma biblioteca de declaração e validação de esquema TypeScript.",
  },
  {
    name: "Prisma",
    srcImg: prisma,
    recente: false,
    socialMedia: "@prisma",
    link: "https://www.prisma.io/",
    about: "O Prisma desbloqueia um novo nível de experiência do desenvolvedor ao trabalhar com bancos de dados, graças ao seu modelo de dados intuitivo, migrações automatizadas, segurança de tipo e preenchimento automático.",
  },
  {
    name: "Radix.Ui",
    srcImg: radixUi,
    recente: true,
    socialMedia: "@radix_ui",
    link: "https://www.radix-ui.com/",
    about:
      "Componentes, ícones, cores e modelos para criar interfaces de usuário acessíveis e de alta qualidade. Gratuito e de código aberto.",
  },
  {
    name: "Day.js",
    srcImg: dayjs,
    recente: false,
    socialMedia: "@day_js",
    link: "https://day.js.org/",
    about: "Day.js é uma biblioteca JavaScript minimalista que analisa, valida, manipula e exibe datas e horas.",
  },
  {
    name: "Vite",
    srcImg: vite,
    recente: true,
    socialMedia: "@vite_js",
    link: "https://vitejs.dev/",
    about: "Vite é uma ferramenta de compilação que visa fornecer uma experiência de desenvolvimento mais rápida e enxuta para projetos da Web modernos.",
  },
];

export const recentes = all.filter((i) => i.recente === true);
