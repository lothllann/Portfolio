import React from 'react'
import './Sobre.css'
import photo from '../../assets/myPhoto.svg';

const Sobre = () => {
  const [open, setOPen] = React.useState(false)

  const handleToggle = () =>{
    setOPen(!open)

  }
  return (
    <section className='mainAbout'>
      <div className={`${open ? 'active': ''} card`}>
        <div className='user'>
          <div className='img'>
              <img src={photo} alt="minha foto de perfil" />
          </div>
          <div className="content">
            <h2>Nickolas Ruppenthal<br/><span>Web Developer</span></h2>
          </div>
          <button className='toggle' onClick={handleToggle}>{`${open ? 'Close': 'Click Here'}`}</button>
        </div>
      </div>
    </section>
  )
}

export default Sobre