import React from "react";

const Button = ({disabled = false, className = "", text = 'Button', onClick = () => { } }) => {
    return <button disabled={disabled} className={`scentia-button ${className}`} onClick={onClick}>{text}</button>
}

export default Button;