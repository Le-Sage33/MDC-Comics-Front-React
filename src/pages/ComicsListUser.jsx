import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const Comics_booksListUser = () => {
  // je créé un state comics_booksData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des comics_books
  // par défaut (donc au premier chargement du composant), le state contient un tableau vide
  const [comics_booksData, setComics_booksData] = useState([]);


  // je fais l'appel fetch vers l'url de mon api (qui est en local) qui renvoie un json contenant la liste des comics_books en BDD
  // quand l'appel est terminé, je stocke les données récupérées dans le state, ce qui force mon composant à se recharger
  useEffect(() => {
    fetch("http://localhost:3002/api/comics_books")
      .then((comics_booksDataJson) => {
        return comics_booksDataJson.json();
      })
      .then((comics_booksDataJs) => {
        setComics_booksData(comics_booksDataJs.data);
      });
  }, []);

  return (
    <div className="col-12 md-6 text-center">
      <Header/>
      <br></br>
      <div className="container col-12 md-6 flex">
        <h2>Voici la Liste des Heros</h2>
        <Link to="/accueil-user" className="btn btn-primary">Accueil</Link>
        <hr></hr>
        {/* 
          je boucle sur le state comics_booksData, qui contient la liste des comics_books 
        */}
        {comics_booksData.map((comics) => {
          return (
            <div className="row justify-content-center" key={comics.id}>
              <h3>{comics.name}</h3>
              <p>Univers: {comics.id_univers}</p>
              <p>Description : {comics.description}</p>

              {/* Je créé un lien (grâce au react router) vers la page de détail du comics et je lui passe en parametre l'id du comics actuel*/}
              <Link to={`/user/comics_books/${comics.id}`} className="btn btn-primary">Voir le Héros</Link>
              <Link to= {comics.address} className="btn btn-primary " target="_blank">Liens vers nos Partenaires</Link>
    
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Comics_booksListUser;