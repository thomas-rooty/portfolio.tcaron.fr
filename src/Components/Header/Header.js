import React from "react"
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h4>Hello, I'm</h4>
            <h1>Thomas Caron</h1>
            <h4 className="subtitle">Fullstack Developer</h4>
            // Faire des components boutons qui prenent en paramètre un string et qui affiche le string
        </div>
    )
};

export default Header;