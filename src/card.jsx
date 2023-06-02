import React from "react";
import local from "./assets/local.png";

export default function Card({ title, summary, location, img }) {
  return (
    <div className="card1">
      <img className="img1" src={img} />
      <h3>{title}</h3>
      <p>{summary}</p>
      <div>
        <img src={local} />
        <span>{location}</span>
      </div>
    </div>
  );
}
