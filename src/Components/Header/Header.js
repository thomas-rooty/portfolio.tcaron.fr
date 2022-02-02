import React from "react"
import './Header.css'

// Import needed components
import Buttons from "../Buttons/Buttons"

const Header = () => {
    return (
        <div className="header">
            <h4>Hello, I'm</h4>
            <h1>Thomas Caron</h1>
            <h4 className="subtitle">Fullstack Developer</h4>
            <div className="buttons">
                <Buttons text="Download CV" classProps={'button secondary'} />
                <Buttons text="About me" classProps={'button primary'} />
            </div>
        </div>
    )
};

export default Header;