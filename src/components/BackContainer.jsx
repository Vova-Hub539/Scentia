import React from "react";
import { arrowBack } from "../assets/svg";
import Button from "./Button";

const BackContainer = ({ buttonName = 'Back', onBack = () => { } }) => {
    return <div className="page-content flex border">
        <div onClick={onBack} className="back-container-arrow">{arrowBack}</div>
        <div>
            <Button text={buttonName} onClick={onBack} />
        </div>
    </div>
}

export default BackContainer;