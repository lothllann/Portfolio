import "./SiteCard.css";

interface Props {
  srcImg: string;
  description: string;
  title: string;
  featured: string;
  grid: string;
  setOpenModal: Function
}

const SiteCard = ({ srcImg, title, description, featured, grid, setOpenModal }: Props) => {
  return (
    <div className={`siteCard ${grid} `}>
      <img className="imgSite" src={srcImg} alt="space" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={() => setOpenModal(true)}>Saiba Mais</button>
      </div>
      <div className="languageSite">
        <img src={featured} alt="principal linguagem de programação do site" />
      </div>
    </div>
  );
};

export default SiteCard;
