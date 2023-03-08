import React from "react";
import Head from "../helper/Head";
import "./Skills.css";
import "../../App.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Lottie from "lottie-react";
import bb8 from "../lottieFiles/bb8.json";
import { all, recentes } from "../../utils/tecnologias";
import { languagesInfo } from "../../utils/linguagens";
import HoverCardElement from "./card/HoverCard";

const style = {
  height: 0.5 * window.innerHeight,
};

const Skills = () => {
  const [tecShow, setTecShow] = React.useState(true);
  const marker = document.querySelector("#marker");

  const trueTec = () => {
    setTecShow(true);
  };

  const falseTec = () => {
    setTecShow(false);
  };

  return (
    <>
      <Head
        title="Skills"
        description="página que mostra as tecnologias que conheço"
      />
      <section className="mainSkills">
        <section className="introSkills">
          <div className="apresentacao">
            <h1 className="text-4xl font-extrabold mb-5">Skills</h1>

            <p>
              Como eu curto mais o <span>Front-End</span> as minhas habilidades
              estão mais concentradas nessa area, porém eu pretendo evoluir mais
              no <span>Back-End</span>.<br /> Eu quero me tornar
              <span> Full-Stack</span> no futuro e fazer apps mobiles também.
            </p>
          </div>

          <div className="bb8">
            <Lottie animationData={bb8} loop={true} style={style}></Lottie>
          </div>

          <div className="arrows">
            <div className="smallArrow">
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 55 }} />
            </div>
            <div className="bigArrow">
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 70 }} />
            </div>
          </div>
        </section>

        <section className="linguagensSkills">
          <div className="text--languages">
            <h1 className="text-4xl font-extrabold mb-5">
              Linguagens de Programação
            </h1>

            <p>
              Estas são as Linguagens de Programação que eu conheço.
              <br />A porcentagem tem como base os projetos upados no meu
              <a href="https://github.com/lothllann"> GitHub</a>.
            </p>
          </div>

          <div className="cardsContainer--Linguagens">
            {languagesInfo.map((language, i) => {
              return (
                <div key={i} className="card--language">
                  <div className="box">
                    <div>
                      <div className="icon">
                        <img src={language.image} alt="" />
                      </div>
                      <div className="percent">
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                          <h2>
                            {language.percentage}
                            <span>%</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="title">{language.title}</div>
                </div>
              );
            })}
          </div>
          <div className="arrows">
            <div className="smallArrow">
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 55 }} />
            </div>
            <div className="bigArrow">
              <KeyboardArrowDownRoundedIcon sx={{ fontSize: 70 }} />
            </div>
          </div>
        </section>

        <section className="tecnologias">
          <h1 className="text-4xl font-extrabold mb-5">Tecnologias</h1>
          <p>
            Nesta seção separei todas <span>(</span>que me lembro pelo menos
            <span>)</span> as bibliotecas e frameworks que uso com frequencia ou
            ja usei alguma vez.
          </p>

          <ul className="buttons">
            <li>
              <button onClick={trueTec}>Recentes</button>
            </li>
            <li>
              <button onClick={falseTec}>Já Usados</button>
            </li>
            <div
              className={`${tecShow ? "activeLeft" : "activeRight"}`}
              id="marker"
            ></div>
          </ul>

          <div className="containerTable--tecnologias">
            <div className="table--tecnologias">
              {tecShow
                ? recentes.map((t) => (
                    <HoverCardElement
                      key={t.name}
                      name={t.name}
                      srcImg={t.srcImg}
                      about={t.about}
                      socialMedia={t.socialMedia}
                      link={t.link}
                    />
                  ))
                : all.map((t, i) => (
                  <HoverCardElement
                  key={t.name}
                  name={t.name}
                  srcImg={t.srcImg}
                  about={t.about}
                  socialMedia={t.socialMedia}
                  link={t.link}
                />
                  ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
