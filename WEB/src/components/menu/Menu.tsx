import house from "../../assets/house.svg";
import book from "../../assets/book.svg";
import code from "../../assets/code.svg";
import phone from "../../assets/phone.svg";
import user from "../../assets/user.svg";
import "./Menu.css";
import { useEffect, useState } from "react";
import Button from "./buttons/Button";

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


  return (
    <div className="menu--container">
      <div className="menu--background">
        <nav className="menu">
          {ListButtons.map((btn, i) => {
            return (
              <Button
                key={i}
                title={btn.nome}
                path={btn.path}
                image={btn.image}
                index={i}
                activeClassName='active'
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
