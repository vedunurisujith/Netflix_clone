import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NDatas from "./NData";
import Card from "./Card";
import NavBar from "./NavBar";
function fun(val) {
  return <Card img={val.img} title={val.title} link={val.link} />;
}
ReactDOM.render(
  (
  <div>{NDatas.map(fun)}</div>),
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
