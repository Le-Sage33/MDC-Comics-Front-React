import React, {} from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./admin.css"
import imgHistDcComics from "../../images/deco-MDC-Comics/logo-DC.jpg";
import imgHistMarvel from "../../images/deco-MDC-Comics/logo-marvel-fond-rouge.jpg";

const Admin = () => {
  
  return (
    
    <>
      <Header/>
        <div className="container col-12">  
          <div className=" row text-align-center">
              <div className="col-12 text-center">
                  <h3>MDC Comics</h3>
                  <p><strong>"Le Meilleur de l'Univers DC Comics et Marvel reunis"</strong></p>
                  <h1>Bienvenue Administrateur</h1>
              </div>
              <div className='col-12 md-6 text-center'>
                <ul>
                  <li>
                    <Link to="/admin/comics_books" className="btn btn-primary">Liste des Comics</Link>
                  </li>
                  <li>
                    <Link to="/admin/create-comics_books" className="btn btn-primary">Créer un Nouveau Comics</Link>
                  </li>
                </ul>
              </div>
              <div className="hist-dc-comics row col-12 col-md-6 justify-content-center">
                  <img src={imgHistDcComics} alt="HistoireDcComics"/>
                  <h4>DC Comics</h4>
                  <p>
                  DC Comics est l'une des principales maisons d’édition américaines de comics, les initiales « DC » sont une abréviation de « Detective Comics »...</p>
              </div>
              <div className="hist-marvel row col-12 col-md-6 justify-content-center">
                  <img src={imgHistMarvel} alt="HistoireMarvel"/>
                  <h4>MARVEL</h4>
                  <p>Marvel Worldwide Inc., plus communément appelé Marvel Comics ou simplement Marvel, est une subdivision de Marvel Entertainment et l'une des principales maisons d'édition américaines de comics...</p>
              </div>
              <div className="history container row col-12 justify-content-around">
                  <Link to="https://fr.wikipedia.org/wiki/DC_Comics" className="DC btn btn-primary" href="/" role="button" target="_blank">HISTOIRE  DE  DC</Link>
                  <Link to="https://fr.wikipedia.org/wiki/Marvel_Comics#:~:text=Martin%20Goodman%20fonde%20la%20soci%C3%A9t%C3%A9,aussi%20pl%C3%A9biscit%C3%A9%20par%20les%20lecteurs." className="Marvel btn btn-primary" href="/" role="button" target="_blank">HISTOIRE  DE  MARVEL</Link>
              </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default Admin;





