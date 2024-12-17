import React from "react";
import { arrowBack } from "../assets/svg";
import Button from "./Button";

const BackContainer = ({ buttonName = 'Back', onBack = () => { } }) => {
    return <div className="back-container border">
        <div onClick={onBack} className="back-container-arrow">{arrowBack}</div>
        <div>
            <Button text="Lesson Planner" onClick={onBack} />
        </div>
    </div>
}

export default BackContainer;