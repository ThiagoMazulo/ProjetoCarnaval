import React from "react";

export default function Input ({type,text, placeholder, onChange, id, maxLength}) {

    return (
        <div>
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