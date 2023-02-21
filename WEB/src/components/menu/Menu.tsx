import house from "../../assets/house.svg";
import book from "../../assets/book.svg";
import code from "../../assets/code.svg";
import user from "../../assets/user.svg";
import "./Menu.css";
import Button from "./buttons/Button";
import React from "react";


const ListButtons = [
  {
    nome: "Home",
    path: "/",
    image: house,
  },

  {
    nome: "Works",
    path: "/port",
    image: book,
  },

  {
    nome: "Skills",
    path: "/skills",
    image: code,
  },

  {
    nome: "About",
    path: "/sobre",
    image: user,
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



