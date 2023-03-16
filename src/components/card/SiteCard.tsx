import './SiteCard.css'

interface Props {
  srcImg: string,
  description: string,
  title: string
}

const SiteCard = ({srcImg, title, description}: Props) => {
  return (
    <div className='card'>
      <img src={srcImg} alt="space" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Veja Mais</button>
      </div>
    </div>
  )
}

export default SiteCard