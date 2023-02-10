
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";
import { House, Book, Phone, Code, User } from "phosphor-react";

const Menu = () => {
  const navs = document.querySelectorAll(".navlink--img");
  const spans = Array.from(document.getElementsByTagName("span"));

  function activeNavLink(this: any) {
    navs.forEach((nav) => nav.classList.remove("ativo"));
    this.classList.add("ativo");
  }
  navs.forEach((x) => x.addEventListener("click", activeNavLink));

  function activeSpan(this: any) {
    spans.forEach((span) => span.classList.remove("ativo"));
    this.classList.add("ativo");
  }
  spans.forEach((x) => x.addEventListener("click", activeSpan));


  return (
    <div className="menu--container">
      <div className="menu--background">
        <nav className="menu">
          <NavLink to="/" end className="navlink">

              <House
                size={30}
                color="black"
                className={"navlink--img ativo"}
              />
              <span className="ativo">Home</span>
  
          </NavLink>

          <NavLink to="/port" className="navlink">
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
          <div className="indicator"></div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
