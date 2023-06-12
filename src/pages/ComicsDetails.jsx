import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const ComicsDetails = () => {
  // je créé un state pour stocker un comics
  const [comics, setComics] = useState(null);

  // je récupère l'id présent dans l'url
  const { id } = useParams();

  // j'utilise useEffect, pour executer l'appel à l'api une seule fois, au chargement du composant
  useEffect(() => {
    // je fais un appel fetch, vers l'url de l'api pour récupérer un comics en fonction de l'id présent dans l'url
    fetch(`http://localhost:3002/api/comics_books/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        // si j'ai une réponse de l'api, je stocke le comics renvoyé dans le state
        setComics(responseJs.data);
      });
  }, [id]);

  return (
    <div className="col-12 md-6 text-center">
      <Header />
      <br></br>
      <div className="container col-12 md-6 flex">
        {comics ? (
          <>
            <h2>Details du Heros</h2>
            <br></br>
            <Link to="/accueil-admin" className="btn btn-primary">Accueil</Link>
            <div className="">
              <h3>{comics.name}</h3>
              <img src={require("../images/Heros/" + comics.picture)} className="comics-picture" alt="Heros"/>
              <hr></hr>
              <div className=" text-center">
                <p>Description : {comics.description}</p>
              </div>
              <hr></hr>
              <br></br>
              
              <Link to= {comics.address} className="btn btn-primary " target="_blank">Liens vers nos Partenaires</Link>
              <Link to="/admin/comics_books" className="btn btn-primary">Retour vers la liste des Héros</Link>
            </div>
            <br></br>
          </>
        ) : (
          <p>Pas de Comics trouvé!</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default ComicsDetails;

