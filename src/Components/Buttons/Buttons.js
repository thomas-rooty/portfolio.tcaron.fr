import React from "react"
import './Buttons.css' // Contains the styles for this component and the buttons class that is used in Header component

const Buttons = ({ _onClickFunction, text, classProps }) => {
    return (
        <div onClick={_onClickFunction} className={classProps}>
            <h4>{text}</h4>
        </div>
    )
}

export default Buttons;