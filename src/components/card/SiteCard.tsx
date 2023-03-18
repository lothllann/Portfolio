import './SiteCard.css'

interface Props {
  srcImg: string,
  description: string,
  title: string,
  featured: string
}

const SiteCard = ({srcImg, title, description, featured}: Props) => {
  return (
    <div className='siteCard'>
      <img className='imgSite' src={srcImg} alt="space" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Veja Mais</button> 
        
      </div>
      <div className='languageSite'><img src={featured} alt="principal linguagem de programação do site" /></div>
    </div>
  )
}

export default SiteCard