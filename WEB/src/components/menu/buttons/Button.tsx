import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Props {
  title: string;
  path: string;
  image: string;
  setMenuBtns: (menuBtns:number[]) => void;
  menuBtns: number[];
  index: number;
}

const Button = ({ title, path, image, setMenuBtns, menuBtns, index }: Props) => {
  

  const handleToggleClick = (index:number) => {
    if(menuBtns.includes(index)){
      const menuBtnsRemoved = menuBtns.filter((btnI)=> btnI !== index);
      setMenuBtns(menuBtnsRemoved);
    } else {
      const menuBtnsAdd = [...menuBtns, index];
      setMenuBtns(menuBtnsAdd)
    }

    console.log(menuBtns)
  };
  
  return (
    <NavLink to={path} className="navlink" onClick={()=>handleToggleClick(index)}>
      <img className={`navlink--img`} src={image}></img>
      <span className={`navlink--title`}>{title}</span>
    </NavLink>
  );
};

export default Button;
