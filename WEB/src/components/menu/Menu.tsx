import house from "../../assets/house.svg";
import book from "../../assets/book.svg";
import code from "../../assets/code.svg";
import phone from "../../assets/phone.svg";
import user from "../../assets/user.svg";
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";
import { useState } from "react";

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
    nome: "Sobre",
    path: "/sobre",
    image: user,
  },

  {
    nome: "Contato",
    path: "/contato",
    image: phone,
  },
];

const Menu = () => {
  const [ativo, setAtivo] = useState(false);

  const handleClick = (event: HTMLAnchorElement) => {
    
    setAtivo(true)
  };

  return (
    <div className="menu--container">
      <div className="menu--background">
        <nav className="menu">
          {ListButtons.map((btn, i) => {
            return (
              <NavLink
                key={`${btn.nome}-${i}`}
                to={btn.path}
                className="navlink"
                onClick={(event)=>{console.log(event)}}
              >
                <img className={`${ativo ? 'ativo': ''} navlink--img`} src={btn.image}></img>
                <span className="navlink--title">{btn.nome}</span>
              </NavLink>
            );
          })}
          <div className="indicator"></div>
          
        </nav>
      </div>
    </div>
  );
};

export default Menu;
