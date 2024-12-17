import React from "react";

const Button = ({className = "", text = 'Button', onClick = () => { } }) => {
    return <button className={`scentia-button ${className}`} onClick={onClick}>{text}</button>
}

export default Button;