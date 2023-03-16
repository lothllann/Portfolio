import './SiteCard.css'

interface Props {
  srcImg: string,
  description: string,
  title: string
}

const SiteCard = ({srcImg, title, description}: Props) => {
  return (
    <div className='siteCard'>
      <img src={srcImg} alt="space" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Veja Mais</button>
      </div>
    </div>
  )
}

export default SiteCard