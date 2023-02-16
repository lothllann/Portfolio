import React from 'react'
import './Sobre.css'
import photo from '../../assets/myPhoto.svg';

const listOfSocialMedias = [
  {
    name: 'GitHub',
    image: 'img',
    link: 'https://github.com/lothllann',
    color: 'grey'
  },
  {
    name: 'Linkedin',
    image: 'img',
    link: 'https://www.linkedin.com/in/nickolas-ruppenthal-38b2ba167/',
    color: 'grey'
  },
  {
    name: 'Instagram',
    image: 'img',
    link: 'https://www.instagram.com/ruupp___/',
    color: 'grey'
  },
  {
    name: 'Gmail',
    image: 'img',
    link: 'https://github.com/lothllann',
    color: 'grey'
  },
  {
    name: 'WhatsApp',
    image: 'img',
    link: 'https://wa.me/5554991807117',
    color: 'grey'
  }
]

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

       {listOfSocialMedias.map((SocialMedia, i)=>{
          return(console.log(SocialMedia.name))
        })}
   
    </section>
  )
}

export default Sobre




