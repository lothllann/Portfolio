import React from "react";
import Head from "../helper/Head";
import "./Skills.css";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; //seta menor para baixo
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'; //seta maior para a direita

const Skills = () => {
  return (
    <>
      <Head
        title="Skills"
        description="página que mostra as tecnologias que conheço"
      />
      <section className="mainSkills">
        <div className="introSkills">
          <h1 className="text-4xl font-extrabold mb-5">Skills</h1>
          <div className="apresentacao">
            Como eu curto mais o <span>Front-End</span> as minhas habilidades
            estão mais concentradas nessa area, porém eu pretendo evoluir mais
            no <span>Back-End</span>. Eu quero me tornar Full-Stack no futuro e
            fazer apps mobiles também.
          </div>
          <div className="arrows">
            <div className="SmallArrow"><KeyboardArrowDownRoundedIcon/> </div>
            <div className="BigArrow"> <ArrowForwardIosRoundedIcon/> </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
