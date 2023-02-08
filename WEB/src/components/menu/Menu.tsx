import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './Menu.css'
import {House, Book, Phone, Code, User} from 'phosphor-react'

const Menu = () => {
  return (
    <div className='menu--container'>
        <div className='menu--background'>
          <nav className='menu'>
            
              <NavLink to='/' end>
                <House size={32} color="black"/>
              </NavLink>

              <NavLink to='/port' >
                <Book size={32} color="black"/>
              </NavLink>
           
           
              <NavLink to='/contato'>
                <Phone size={32} color="black"/>
              </NavLink>

    
              <NavLink to='/skills'>
                <Code size={32} color="black"/>
              </NavLink>

    
              <NavLink to='/sobre'>
                <User size={32} color="black"/>
              </NavLink>

          </nav>
        </div>
    </div>
  )
}

export default Menu