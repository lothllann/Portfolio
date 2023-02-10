import house from '../../assets/house.svg'
import book from '../../assets/book.svg'
import code from '../../assets/code.svg'
import phone from '../../assets/phone.svg'
import user from '../../assets/user.svg'
import { NavLink, useLocation } from "react-router-dom";
import "./Menu.css";
import { useState } from 'react'

const  ListButtons = [
  
   {
      nome: 'Home',
      path: '/',
      image: house
    },

    {
      nome: 'Portfólio',
      path: '/port',
      image: book
    },

    {
      nome: 'Skills',
      path: '/skills',
      image: code
    },

    {
      nome: 'Sobre',
      path: '/sobre',
      image: user
    },

    {
      nome: 'Contato',
      path: '/contato',
      image: phone
    }
  
]

const Menu = () => {
const [ativo,setAtivo] = useState(false)

const handleClick = () =>{
  console.log('deu certo')
}


  return (
    <div className="menu--container">
      <div className="menu--background">
        <nav className="menu">
          {ListButtons.map((btn,i)=>{
            return(
              <NavLink key={`${btn.nome}-${i}`} to={btn.path} className="navlink" onClick={handleClick}>
                <span className='navlink--img'>{btn.image}</span>
                <span className='navlink--title'>{btn.nome}</span>
              </NavLink>
            )
          })}
          <div className="indicator"></div> 
          {/* <NavLink to="/" end className="navlink">

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
          <div className="indicator"></div> */}
        </nav>
      </div>
    </div>
  );
};

export default Menu;
