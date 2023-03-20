
import React from "react";
import { sites } from "../../utils/sites";
import SiteCard from "../card/SiteCard";
import Footer from "../footer/Footer";
import Btn_Back from "./Btn_Back";
import Switch_Grid from "./Switch_Grid";

export const Back_End = () => {
  const back = sites.filter((site) => site.grupo == 'back')
  const [grid, setGrid] = React.useState("single");

  
  return (
    <section className="container_Sites">
      <Btn_Back />
      <Switch_Grid gridState={grid} setGrid={setGrid} />
      <h1 className="text-4xl font-extrabold mb-[75px]">Back-End</h1>
      <main className={`mainSites ${grid}`}>
        {back.map((i, index) => (
          <SiteCard
            key={index}
            description={i.description}
            title={i.titulo}
            srcImg={i.srcImg}
            featured={i.srcImgFeatured}
            grid={grid}
          />
        ))}
      </main>

      <Footer />
    </section>
  )
}
