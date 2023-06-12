import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import { Link } from "react-router-dom";

const UpdateComics = () => {
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

  

  const navigate = useNavigate();

  // si l'utilisateur n'est pas connecté (pas de jwt dans le localStorage) on le redirige vers la page de connexion
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const jwtData = token.split(".")[1];
    const decodedJwt = JSON.parse(atob(jwtData));
    const expirationTime = decodedJwt.exp * 1000;

    const timeoutId = setTimeout(() => {
      navigate("/admin/login");
    }, expirationTime - Date.now());

    return () =>clearTimeout(timeoutId);
  }, [navigate]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    let name = null;
    if (event.target.name) {
      name = event.target.name.value;
    }

    let description = null;
    if (event.target.description) {
      description = event.target.description.value;
    }

    let picture = null;
    if (event.target.picture) {
      picture = event.target.picture.value;
    }

    let address = null;
    if (event.target.address) {
      address = event.target.address.value;
    }

    const token = localStorage.getItem("jwt");

    // on fait un appel vers l'API (express) on lui spécifie la méthode PUT (pour mettre à jour) et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent à ce qui est attendu par l'API
    fetch(`http://localhost:3002/api/comics_books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        picture: picture,
        address: address,
        }),

      // si l'api renvoie une reponse 200
      // ça veut dire que tout s'est bien passé
      // alors on affiche un message dans la console
    }).then((response) => {
      if (response.status === 200) {
        console.log("Comics Modifié");
        <p>Le Comics a bien été modifié!</p>;
        // sinon on affiche un message d'erreur
        // car cela veut dire que le comics n'a pas été modifier
      } else {
        console.log("Erreur aucune modification!");
        <p>Attention, Le Comics n'a pas été modifié!</p>;
      }
    });
  };

  return (
    <div className="formupdate text-center">
      <Header/>
      <br></br>
        {comics ? (
          <div  >
            <h2>Mise à jour du Comics : {comics.name}</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="picture">
                    Picture:  <input type="text" name="picture" alt="Image Comics" defaultValue={comics.picture} /> 
                  </label>
                </div>
                <br></br>
                <div>
                  <label htmlFor="name">
                    Nom du comics:  <input type="text" name="name" defaultValue={comics.name} />
                  </label>
                </div>
                <br></br>
                <div>
                  <label htmlFor="description">
                    Description:  <input type="text" name="description" defaultValue={comics.description} />
                  </label>
                </div>
                <br></br>
                <div>
                  <label htmlFor="address">
                    Liens internet:  <input type="text" name="address" defaultValue={comics.address}/>
                  </label>
                </div>
                <Link to="/accueil-admin" className="btn btn-primary">Accueil</Link>
                <button type="submit" className="btn btn-primary">Mettre à jour le comics</button>
            </form>
          </div>
        ) : (
            <h2>Chargement...</h2>
        )}
      <Footer/>
    </div>
  );
};

export default UpdateComics;