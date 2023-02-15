import React from 'react'
import './Sobre.css'
import photo from '../../assets/myPhoto.jpeg';

const Sobre = () => {
  const [open, setOPen] = React.useState(false)
  return (
    <section>
      <div className='card'>
        <div className='user'>
          <div className='img'>
              <img src={photo} alt="minha foto de perfil" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre