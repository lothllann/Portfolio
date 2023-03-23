import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { grey } from "@mui/material/colors";
import { all } from "../../utils/tecnologias";
import HoverCardElement from "../card/HoverCard";

interface ModalProps {
  isOpen: boolean;
  setOpenModal: Function
  tecs: Array<string>;
  langs: Array<string>;
  how: string;
  title: string
}
const style = {
  color: grey,
  fontSize: 35
}
const ModalCard = ({ isOpen, setOpenModal, how, tecs, langs, title }: ModalProps) => {
  let filtrado;
  const tecsFilter = tecs.map((t)=>(
    filtrado =  all.filter((f)=> f.name === t)
     ))

 
  if (isOpen) return (
  <div className="fixed right-0 flex items-end justify-end w-[100%] h-[100vh] z-50">
    <div className="p-[25px] relative w-[45%] h-[80%] flex-col backdrop-blur-sm bg-greyGlass4 border-greyGlass2 border-[1px] border-solid rounded-lg flex shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
      <button onClick={() => setOpenModal(false)} className="flex items-center justify-center w-[45px] h-[45px] absolute top-[-15px] left-[-15px] bg-[#323232] border-[1px] border-solid rounded-full border-greyGlass2 hover:bg-[#ff0000] hover:scale-110 transition-all">
      <CloseRoundedIcon style={style}/>
      </button>

      <div className="flex flex-1 items-start justify-center flex-col">
        <h1 className="text-4xl font-extrabold ">{title}</h1>
        
        <div className="w-[75%]">
        <h2>Como eu fiz?</h2>
          {how}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-around flex-col">
        <div className="absolute"></div>
        <div className="bg-greyGlass4 p-[25px] gap-[15px] border-[1px] border-solid rounded-lg flex shadow-[-5px_5px_15px_rgba(0,0,0,0.2)] border-greyGlass2 ">
          {tecsFilter.map((tf, i)=>(

            <HoverCardElement
            key={`${tf[0].name}*${i}`}
            name={tf[0].name}
            srcImg={tf[0].srcImg}
            about={tf[0].about}
            socialMedia={tf[0].socialMedia}
            link={tf[0].link}
          />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
  else return null;
};

export default ModalCard;
