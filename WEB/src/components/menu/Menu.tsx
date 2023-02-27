import pc from "../lottieFiles/computer.json";
import code from "../lottieFiles/code.json";
import dev from "../lottieFiles/it-developer.json";
import book from "../lottieFiles/book.json";

import "./Menu.css";
import Button from "./buttons/Button";
import React from "react";
import Lottie from "lottie-react";




const ListButtons = [
  {
    nome: "Home",
    path: "/",
    image: <Lottie id='firstLottie' animationData={pc} loop={false} style={{width: 50, height: 50}}/>,
  },

  {
    nome: "Works",
    path: "/port",
    image: <Lottie animationData={book} loop={false} style={{width: 50, height: 50}}/>,
  },

  {
    nome: "Skills",
    path: "/skills",
    image: <Lottie animationData={code} loop={false} style={{width: 50, height: 50}}/>,
  },

  {
    nome: "About",
    path: "/sobre",
    image: <Lottie animationData={dev} loop={false} style={{width: 50, height: 50}}/>,
  },

];

const Menu = () => {

const [animationState, setAnimationState] = React.useState({isStopped: false, isPaused: false})

  return (
    <div className="menu--container">

      <div className="menu--background">
        <nav className="menu">
          {ListButtons.map((btn, i) => {
            return (
              <Button
                key={`${btn.nome}-${i}`}
                title={btn.nome}
                path={btn.path}
                image={btn.image}
                index={i}                
              />
            );
          })}
          <div className="indicator"></div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;



