import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"
import imgLogo from "../../images/deco-MDC-Comics/logo-MDC-Comics.png";
import imgLogoFacebook from "../../images/deco-MDC-Comics/Icon-Facebook.png";
import imgLogoInstagram from "../../images/deco-MDC-Comics/Icon-instagram-blanc.webp";

const Footer = () => {
    return (
        <footer>
            <div className="cgv container-fluid">
                <div className="MDC_comics row justify-content-center">
                    <div className="logo col-md-3">
                        <img src={imgLogo} alt="Logo"/>
                    </div>
                    <div className="prestations row col-md-5 text-center">
                        <p>MDC Comics<br />"Le Meilleur de l'Univers DC Comics et Marvel reunis"<br />Actualités - Univers DC - Univers Marvel - Bons Plans Shopping</p>
                    </div>
                    <div className="contact row col-md-4">
                        <p>CONTACTEZ-NOUS<br />Bordeaux<br /> Gironde<br />guillaume.portejoie@lapiscine.pro</p>            
                        <li>
                            <Link to="/" className="facebook" href="#">
                            <img src={imgLogoFacebook} alt="Facebook" />
                            </Link>
                            <Link to="/" className="instagram" href="#">
                            <img src={imgLogoInstagram} alt="Instagram"/>
                            </Link>
                        </li>
                    </div>
                </div>
                <div className="CGV text-center">
                    <p>Copyright 2023</p>
                    <li>
                        <Link to="/" href="guillaume.portejoie@yahoo.com">GMP Factory - Intégration PORTEJOIE Guillaume</Link>
                        <Link to="/" href="#">- Mentions legales</Link>
                    </li>
                </div>
            </div> 
        </footer>
        );
    };
    export default Footer;