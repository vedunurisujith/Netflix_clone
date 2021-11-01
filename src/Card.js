import React from "react";
import NDatas from "./NData";
import "./Card.css";
const data = NDatas;

const Card = (props) => {
  const link = String(props.link);
  console.log(link);

  return (
    <div className="card">
      <img src={props.img} alt="netflix" className="card_img"></img>
      <div className="card_title">{<span>{props.title}</span>}</div>
      <a href={link} className="card_button">
        Watch now
      </a>
    </div>
  );
};

export default Card;
