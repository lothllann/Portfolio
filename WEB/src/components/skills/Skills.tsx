import React from "react";
import Head from "../helper/Head";
import "./Skills.css";
import "../../App.css";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; //seta menor para baixo


const Skills = () => {
  return (
    <>
      <Head
        title="Skills"
        description="página que mostra as tecnologias que conheço"
      />
      <section className="mainSkills">
        <div className="introSkills">
          <div className="apresentacao">
          <h1 className="text-4xl font-extrabold mb-5">Skills</h1>

            <div>
            Como eu curto mais o <span>Front-End</span> as minhas habilidades
            estão mais concentradas nessa area, porém eu pretendo evoluir mais
            no <span>Back-End</span>.<br/> Eu quero me tornar <span>Full-Stack</span> no futuro e
            fazer apps mobiles também.
            </div>

              
          </div>
          <div className="arrows">
            <div className="smallArrow"><KeyboardArrowDownRoundedIcon sx={{fontSize:55}} /> </div>
            <div className="bigArrow"> <KeyboardArrowDownRoundedIcon sx={{fontSize:70}} /> </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
