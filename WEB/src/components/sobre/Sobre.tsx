import React from "react";
import "./Sobre.css";
import photo from "../../assets/myPhoto.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const listOfSocialMedias = [
  {
    name: "GitHub",
    image: <GitHubIcon sx={{ fontSize: 40, color: "#BABBBD"  }} />,
    link: "https://github.com/lothllann",
    color: "#BABBBD",
  },
  {
    name: "Linkedin",
    image: <LinkedInIcon sx={{ fontSize: 40, color: "#0A66C2" }} />,
    link: "https://www.linkedin.com/in/nickolas-ruppenthal-38b2ba167/",
    color: "#0A66C2",
  },
  {
    name: "Instagram",
    image: <InstagramIcon sx={{ fontSize: 40, color: "#E4405F" }} />,
    link: "https://www.instagram.com/ruupp___/",
    color: "#E4405F",
  },
  {
    name: "Gmail",
    image: <EmailIcon sx={{ fontSize: 40, color: "#D14836" }} />,
    link: "https://github.com/lothllann",
    color: "#D14836",
  },
  {
    name: "WhatsApp",
    image: <WhatsAppIcon sx={{ fontSize: 40, color: "#25D366" }} />,
    link: "https://wa.me/5554991807117",
    color: "#25D366",
  },
];


const Sobre = () => {
  const [open, setOPen] = React.useState(false);


  const handleToggle = () => {
    setOPen(!open);
  };
  return (
    <section className="mainAbout">
      <div className={`${open ? "active " : ""}card`}>
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
            <a key={`${socialMedia.name}-${i}`} href={socialMedia.link} className="socialMediaCard">
              <div className="sociallMediaImg">{socialMedia.image}</div>
              <span className={`sociallMediaText text-${socialMedia.name} text-GitHub` } >{socialMedia.name}</span>
            </a>
          ))}
        </div>
      ): null}
      </div>

      
    </section>
  );
};

export default Sobre;
