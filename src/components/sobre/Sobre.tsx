import React from "react";
import "./Sobre.css";
import "../../App.css";
import photo from "../../assets/myPhoto.svg";
import Head from "../helper/Head";
import { listOfSocialMedias } from "../../utils/redesSociais";
import Lottie from "lottie-react";
import coffe from "../lottieFiles/pc_coffe.json";

const style = {
  height: 0.3 * window.innerHeight,
};

const Sobre = () => {
  const [open, setOPen] = React.useState(false);

  const handleToggle = () => {
    setOPen(!open);
  };
  return (
    <main className="mainAbout">
      <Head title="About" description="página que fala um pouco sobre mim" />


        <section className="about">
          <h1 className="text-4xl font-extrabold mb-5">Sobre Mim</h1>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </section>

        <section className={`${open ? "active " : ""}card`}>
          <div className="user">
            <div className="img">
              <img src={photo} alt="minha foto de perfil" />
            </div>
            <div className="content">
              <h2>
                Nickolas Ruppenthal
                <br />
                <span>Web Developer</span>
              </h2>
            </div>
            <button className="toggle" onClick={handleToggle}>{`${
              open ? "Close" : "Click Here"
            }`}</button>
          </div>

          {open ? (
            <div className="containerSocialMedia">
              {listOfSocialMedias.map((socialMedia, i) => (
                <a
                  key={`${socialMedia.name}-${i}`}
                  href={socialMedia.link}
                  className="socialMediaCard"
                >
                  <div className="sociallMediaImg">{socialMedia.image}</div>
                  <span
                    data-textColor={socialMedia.name}
                    className="sociallMediaText 
                   data-[textColor=GitHub]:text-GitHub 
                   data-[textColor=Linkedin]:text-Linkedin 
                   data-[textColor=Instagram]:text-Instagram 
                   data-[textColor=WhatsApp]:text-WhatsApp 
                   data-[textColor=Gmail]:text-Gmail"
                  >
                    {socialMedia.name}
                  </span>
                </a>
              ))}
            </div>
          ) : null}
        </section>


      <div className="absolute bottom-[0px]">
        <Lottie animationData={coffe} style={style} />
      </div>
    </main>
  );
};

export default Sobre;
