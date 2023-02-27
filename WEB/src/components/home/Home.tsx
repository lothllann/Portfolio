import React from "react";
import Head from "../helper/Head";
import "./Home.css";
import Lottie from "lottie-react";
import ObiWan from "../lottieFiles/Obi-wann.json";


const style = {
  height: 0.8 * window.innerHeight
}

export const Home = () => {
  return (
    <>
      <Head title="Home" description="Home do meu portfólio pessoal" />

      <section className="mainHome">
        <h1 className="text-4xl font-extrabold mb-5">Home!</h1>
        <div className="MyNameHome">
          Meu nome é <span>Nickolas Ruppenthal</span>.
          
        </div>
        <div className="aboutHome">
          Eu sou Web Developer, muito bem vindo ao meu portfólio, fique a
          vontade para ver meus projetos. E que a força esteja com você.
        </div>
      </section>
      <div className="obi-wan">
          <Lottie
            animationData={ObiWan}
            style={ style }
          ></Lottie>
        </div>
    </>
  );
};
