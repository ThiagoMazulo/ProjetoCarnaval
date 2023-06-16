import React from "react";
import search from "./assets/search.png";
import "./App.css";

export default function Input ({type,text, placeholder, onChange, id, maxLength}) {

    return (
        <div className="name-seach">
            <img className="input-icon" src={search} alt=""/>
            <input type={type}
            text={text}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            maxLength={maxLength}
            />
        </div>
    );
};