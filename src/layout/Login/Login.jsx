import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Login/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // j'empêche le rechargement automatique de la page
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire username et password
    const username = event.target.username.value;
    const password = event.target.password.value;

    // je fais une requête vers l'api (express) sur l'url login avec la méthode POST
    fetch("http://localhost:3002/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // j'envoie dans le corps de la requête POST les données du formulaire formattées en JSON
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then((responseJson) => {
      return responseJson.json();
    })
    .then((responseJs) => {
      
      const jwt = responseJs.token;
      const userRole = responseJs.user.roles; // Récupération du rôle d'utilisateur dans la réponse

      localStorage.setItem("jwt", jwt);
      localStorage.setItem("userRole", userRole); // Stockage du rôle d'utilisateur dans le localStorage
    })
    .then(() => {
      const userRole = localStorage.getItem("userRole");

      if (userRole === "admin") { // Vérification du rôle d'utilisateur avant de rediriger vers le composant restreint
        navigate("/accueil-admin");
      } else {
        navigate("/accueil-user");
      }
    });

  };
  
  // je créé un formulaire avec deux champs username et password pour connecter mon utilisateur j'attache un event listener sur le submit du formulaire
  return (
    <>
      <Header/>
      <div className="formlogin">
        
        <form onSubmit={handleSubmit}>
          <h2>Connecte toi...</h2>
          <br></br>
          <div>
            <label>
              Username:<input type="text" name="username" />
            </label>
          </div>
          <br></br>
          <div>
            <label>
              Password: <input type="password" name="password" />
            </label>
          </div>
          
          <button className="btn btn-primary" type="submit">Connexion</button>
          <li>
            <Link to="/" className="btn btn-primary">Créer un Compte</Link>
          </li>
        </form>
      </div>
        
      <Footer/>
    </>
      
  );
  
};

export default Login;