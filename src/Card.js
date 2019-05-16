import React from "react";


const Card = (props) => {
    const background = {
        backgroundImage: `url(${props.value})`
    }

    return (

        <div className="grid-item" style={background} onClick={props.handleClick}>

        </div>
    )
};


export default Card;