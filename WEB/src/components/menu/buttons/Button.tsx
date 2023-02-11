import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

interface Props {
  title: string;
  path: string;
  image: string;
  setAtivo: (ativo:boolean) => void;
  ativo: boolean
}

const Button = ({ title, path, image, setAtivo, ativo }: Props) => {
  

  const handleClick = () => {
    setAtivo(!ativo);
  };
  return (
    <NavLink to={path} className="navlink" onClick={handleClick}>
      <img className={`${ativo ? "ativo" : ""} navlink--img`} src={image}></img>
      <span className={`${ativo ? "ativo" : ""} navlink--title`}>{title}</span>
    </NavLink>
  );
};

export default Button;
