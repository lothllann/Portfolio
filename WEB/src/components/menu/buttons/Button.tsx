import React from "react";
import "./Button.css";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  path: string;
  image: string | JSX.Element;
  index: number;
}

const Button = ({ title, path, image, index, }: Props) => {
  return (

      <NavLink key={`${index}-${title}`} to={path} className={`navlink`} >
        <div className={`navlink--img`}>{image}</div>
        <span className={`navlink--title`}>{title}</span>
      </NavLink>

  );
};

export default Button;
