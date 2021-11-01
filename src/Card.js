import React from "react";
import NDatas from "./NData";
import "./Card.css";

const Card = (props) => {
  // console.log(props.img)

  return (
    <div className="card">
      <img src={props.img} alt="netflix" className="card_img"></img>
      <div className="card_title">{<span>{props.title}</span>}</div>
      <a href={props.link} className="card_button">
        Watch now
      </a>
    </div>
  );
};

export default Card;
