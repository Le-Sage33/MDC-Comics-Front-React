import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import imgLogo from '../../images/deco-MDC-Comics/logo-MDC-Comics.png';
import imgLogin from '../../images/deco-MDC-Comics/icon identification blanc.png';
import jwt_decode from "jwt-decode";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {

  const token = localStorage.getItem("jwt");
  let username = null;

  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  
  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    window.location.replace("/login");
  };

  if (token) {
    const tokenDecoded = jwt_decode(token);
    username = tokenDecoded.data.username;
    
  }

  return (
    <header>
      <div className="title fixed-top">
        <div className="logo-header-user">
          <Link to="/">
            <img src={imgLogo} alt="LogoMdcComics" />
          </Link>
          <h1>"Le meilleur de l'univers DC Comics et Marvel reunis"</h1>
        </div>
        <div className="NavBar w-100">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <button
                className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
              </button>
              {/* Menu Header */}
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="BTNheader nav-item">
                    <Link to="/Actus" className="nav-link" href="Actus">
                      Actualites
                    </Link>
                  </li>
                  <li className="DCheader nav-item">
                    <Link to="/ActusDccomics" className="nav-link" href="DC">
                      DC Comics
                    </Link>
                  </li>
                  <li className="MARVELheader nav-item">
                    <Link to="/ActusMarvel" className="nav-link" href="Marvel">
                      Marvel
                    </Link>
                  </li>
                  <li className="BTNheader nav-item">
                    <Link to="/BonsPlans" className="nav-link" href="BonsPlans">
                      Bons Plans
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <li className="BTNheader login align-items-center">
                  <img src={imgLogin} alt="Mon Compte" />
                  <Link to="/login" >
                    {username ? <p className="btn-login">{username}</p> : <p className="btn-login">Connexion</p>}
                  </Link>
                </li>
              </div>
              <div>
                {isLoggedIn ? (
                <Link to="#" className="btn-login" onClick={handleLogOut}>Deconnexion</Link>
                ) : (
                  <Link to="/login" className="btn-login">Deconnexion</Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
