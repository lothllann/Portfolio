import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  path: string;
  image: string;
  index: number;
}

const Button = ({ title, path, image, index, }: Props) => {
  return (

      <NavLink key={`${index}-${title}`} to={path} className={`navlink`} >
        <img className={`navlink--img`} src={image}></img>
        <span className={`navlink--title`}>{title}</span>
      </NavLink>

  );
};

export default Button;
