import React from "react";

const Square =(props)=>{
    return(
        <div 
        onClick={props.onClick}
        className="cell">
            <div><h2>{props.value}</h2></div>
        </div>
    )
}

export default Square;