import React from 'react';
import './Footer.css';
import github from "../../Assets/Images/github.png";
import linkedin from "../../Assets/Images/linkedin.png";
import instagram from "../../Assets/Images/instagram.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footer-center">
                    <div className="footer-title">
                        <h1>Thomas</h1>
                    </div>
                    <div className="footer-links">
                        <h4>Dragonica</h4>
                        <h4>Immersive XP</h4>
                        <h4>Lac x Films</h4>
                    </div>
                    <div className="footer-logos">
                        <img src={github} alt="github" />
                        <img src={linkedin} alt="linkedin" />
                        <img src={instagram} alt="instagram" />
                        <img src={instagram} alt="instagram" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;