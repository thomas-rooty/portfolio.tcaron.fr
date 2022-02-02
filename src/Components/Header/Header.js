import React from "react"
import './Header.css'

// Import needed components
import Buttons from "../Buttons/Buttons"
import CV from "../../Assets/Files/CV_THOMAS_CARON.pdf"

const Header = () => {
    const downloadCV = () => {
        window.open(CV, "_blank")
    }

    return (
        <div className="header">
            <h4>Hello, I'm</h4>
            <h1>Thomas Caron</h1>
            <h4 className="subtitle">Fullstack Developer</h4>
            <div className="buttons">
                <Buttons onClick={downloadCV} text="Download CV" classProps={'button secondary download-cv'} />
                <Buttons text="About me" classProps={'button primary'} />
            </div>
        </div>
    )
};

export default Header;