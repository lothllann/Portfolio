import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { grey } from "@mui/material/colors";
import { all } from "../../utils/tecnologias";
import HoverCardElement from "../card/HoverCard";
import Pizza from "../graficos/Pizza";

interface ModalProps {
  isOpen: boolean;
  setOpenModal: Function;
  tecs: Array<string>;
  langs: Array<Object>;
  how: string;
  title: string;
}

const ModalCard = ({
  isOpen,
  setOpenModal,
  how,
  tecs,
  langs,
  title,
}: ModalProps) => {
  let filtrado;
  const tecsFilter = tecs.map(
    (t) => (filtrado = all.filter((f) => f.name === t))
  );

  if (isOpen)
    return (
      <div className="z-50 flex fixed top-0 right-[-100px] p-[35px]  w-[50%] h-[100vh]  flex-col backdrop-blur-sm bg-greyGlass4  rounded-lg  shadow-[-15px_15px_15px_rgba(0,0,0,0.2)]">
        <button
          onClick={() => setOpenModal(false)}
          className="flex items-center justify-center w-[45px] h-[45px] absolute top-[55px] left-[-22px] bg-[#323232] border-[1px] border-solid rounded-full border-greyGlass2 hover:bg-[#ff0000] hover:scale-110 transition-all"
        >
          <CloseRoundedIcon sx={{ color: grey, fontSize: 35 }} />
        </button>

        <Pizza data={langs} />

        <div className="flex flex-1 items-center flex-col">
          <h1 className="text-4xl font-extrabold mt-[25px] mb-[200px] ">{title}</h1>

          <div className="w-[100%] mb-[100px]  flex gap-[15px]">
            <div className="w-[50%]">
              <h2 className="text-2xl font-bold mb-[10px] mt-[25px]">
                Como eu fiz?
              </h2>
              {how}
            </div>

            <div className="w-[50%] flex justify-center">
              <div className="relative max-h-[500px] max-w-[400px]  bg-greyGlass4 p-[25px] gap-[15px] border-[1px] border-solid rounded-lg flex flex-wrap   shadow-[-5px_5px_15px_rgba(0,0,0,0.2)] border-greyGlass2 ">
                {tecsFilter.map((tf, i) => (
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
      </div>
    );
  else return null;
};

export default ModalCard;
