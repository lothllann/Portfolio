import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { grey } from "@mui/material/colors";

interface ModalProps {
  isOpen: boolean;
  setOpenModal: Function
}
const style = {
  color: grey,
  fontSize: 35
}
const ModalCard = ({ isOpen, setOpenModal }: ModalProps) => {
  if (isOpen) return (
  <div className="fixed top-0 left-0 flex items-center justify-center w-[100%] h-[100vh]">
    <div className="relative w-[85%] h-[65%] backdrop-blur-sm bg-greyGlass4 border-greyGlass2 border-[1px] border-solid rounded-lg flex shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
      <button onClick={() => setOpenModal(false)} className="flex items-center justify-center w-[45px] h-[45px] absolute top-[-15px] right-[-15px] bg-[#323232] border-[1px] border-solid rounded-full border-greyGlass2 hover:bg-[#ff0000] hover:scale-110 transition-all">
      <CloseRoundedIcon style={style}/>
      </button>
    </div>
  </div>
  );
  else return null;
};

export default ModalCard;
