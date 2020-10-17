import React from "react";
import "../utils/css/style.css";
import "../utils/css/reminders.css";
import { addElement } from "../utils/js/remindersScript.js"
import { Body } from "../components/Background";

function Reminders(){

    return (
        <Body>
        <div className="container">
            <input type="text" className="addTxt" placeholder="Today's Goals . . ."/>
            <button className="addBtn" onClick={() => {addElement()}}>
                <img src="https://picaflor-azul.com/images/plus-circle1.png"/>
            </button>
            <div className="list"></div>
        </div>
        </Body>
    )
}

export default Reminders