import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const Comics_booksList = () => {
  // je créé un state comics_booksData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des comics_books
  // par défaut (donc au premier chargement du composant), le state contient un tableau vide
  const [comics_booksData, setComics_booksData] = useState([]);

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();

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

  const handleDeleteClick = (comics) => {
    const token = localStorage.getItem("jwt");

    // je fais un appel fetch vers l'url de mon api avec la méthode DELETE et je passe l'id du comics à supprimer en paramètre de l'url
    fetch("http://localhost:3002/api/comics_books/" + comics.id, {
      method: "DELETE",
      // si l'url de mon api nécessite une authentification
      // je lui passe le JWT stocké en localStorage dans le header de la requête
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      // quand le fetch est terminé, je recharge la page actuelle grâce à la fonction navigate du react router
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-12 md-6 text-center">
      <Header/>
      <br></br>
      <div className="container col-12 md-6 flex">
        <h2>Administrateur: Voici la Liste des Comics books</h2>
        <Link to="/accueil-admin" className="btn btn-primary">Accueil</Link>
        <hr></hr>
        {/* 
          je boucle sur le state comics_booksData, qui contient la liste des comics_books 
        */}
        {comics_booksData.map((comics) => {
          return (
            <div className="row justify-content-center" key={comics.id}>
              <h3>{comics.name}</h3>
              
              <p>Description : {comics.description}</p>

              {/* Je créé un lien (grâce au react router) vers la page de détail du comics et je lui passe en parametre l'id du comics actuel*/}
              <Link to={`/admin/comics_books/${comics.id}`} className="btn btn-primary">Voir le Héros</Link>
              <Link to={`/admin/comics_books/${comics.id}/update`} className="btn btn-primary">Modifier le Héros</Link>
    
              {/* créé un bouton avec un event listener passe le comics actuel en paramètre de la fonction handleDeleteClick */}
              <button onClick={() => handleDeleteClick(comics)}className="btn-delete">Supprimer le Héros</button>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Comics_booksList;