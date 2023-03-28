import "./SiteCard.css";
import ModalCard from "../modalCard/ModalCard";
import React from "react";

interface Props {
  srcImg: string;
  description: string;
  title: string;
  featured: string;
  grid: string;
  tecs: Array<string>;
  langs: Array<Object>;
  how: string
}

const SiteCard = ({ srcImg, title, description, featured, grid, tecs, langs, how}: Props) => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)
 
  return (
    <div className={`siteCard ${grid} `}>
      <img className="imgSite" src={srcImg} alt="space" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="btn_siteCard" onClick={() => setOpenModal(true)}>Saiba Mais</button>
      </div>
      <div className="languageSite">
        <img src={featured} alt="principal linguagem de programação do site" />
      </div>
      <ModalCard setOpenModal={setOpenModal} isOpen={openModal} tecs={tecs} langs={langs} how={how} title={title}/>
    </div>
  );
};

export default SiteCard;
