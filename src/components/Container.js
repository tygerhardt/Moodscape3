import React from "react"
import "../utils/css/index.css"

export default function Container(props){
    return (
        <div className="bump">
            {props.children}
        </div>
    )
}