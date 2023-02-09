import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";
import { House, Book, Phone, Code, User } from "phosphor-react";

const Menu = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [indicator, setIndicator] = React.useState(true)

  

  const handleClick = () => {
    setAtivo(!ativo)
  };
  return (
    <div className="menu--container">
      <div className="menu--background">
        <nav className="menu">
          <NavLink to="/" end className="navlink" onClick={handleClick}>
            <House size={30} color="black" className={`${ativo ? 'ativo' : '' } navlink--img`} />
            <span className={`${ativo ? 'ativo' : '' }`}>Home</span>
          </NavLink>

          <NavLink to="/port" className="navlink" onClick={handleClick}>
            <Book size={30} color="black" className="navlink--img" />
            <span>Works</span>
          </NavLink>

          <NavLink to="/contato" className="navlink">
            <Phone size={30} color="black" className="navlink--img" />
            <span>Contato</span>
          </NavLink>

          <NavLink to="/skills" className="navlink">
            <Code size={30} color="black" className="navlink--img" />
            <span>Skills</span>
          </NavLink>

          <NavLink to="/sobre" className="navlink">
            <User size={30} color="black" className="navlink--img" />
            <span>Sobre</span>
          </NavLink>
          {indicator && <div className="indicator"></div>}
        </nav>
      </div>
    </div>
  );
};

export default Menu;
