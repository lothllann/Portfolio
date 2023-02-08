import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './Menu.css'
import {House, Book, Phone, Code, User} from 'phosphor-react'

const Menu = () => {
  return (
    <div className='menu--container'>
        <div className='menu--background'>
          <nav className='menu'>
            
              <NavLink to='/' end className='navlink'>
                <House size={26} color="black" className='navlink--img'/>
                <span>Home</span>
              </NavLink>

              <NavLink to='/port' className='navlink' >
                <Book size={26} color="black" className='navlink--img'/>
                <span>Works</span>
              </NavLink>
           
           
              <NavLink to='/contato' className='navlink'>
                <Phone size={26} color="black" className='navlink--img'/>
                <span>Contato</span>
              </NavLink>

    
              <NavLink to='/skills' className='navlink'>
                <Code size={26} color="black" className='navlink--img'/>
                <span>Skills</span>
              </NavLink>

    
              <NavLink to='/sobre' className='navlink'>
                <User size={26} color="black" className='navlink--img'/>
                <span>Sobre</span>
              </NavLink>

          </nav>
        </div>
    </div>
  )
}

export default Menu