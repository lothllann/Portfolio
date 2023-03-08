
interface CardProps {
name: string,
srcImg: string,
about: string,
socialMedia: string,
socialMediaLink: string
}

const HoverCard = ({name, srcImg, about, socialMedia, socialMediaLink}:CardProps) => {
  return (
    <div key={name} className="tec-icon">
    <img src={srcImg} alt="icone da biblioteca" />
  </div>
  )
}

export default HoverCard