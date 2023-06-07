import React from "react";
import local from "./assets/local.png";
import "./App.css";


export default function Card({ title, summary, location, img }) {
  return (
    <div className="card1">
      <img className="img1" src={img} />
      <h3>{title}</h3>
      <p>{summary}</p>
      <div className="location">
        <img className="local" src={local} />
        <span>{location}</span>
      </div>
    </div>
  );
}
