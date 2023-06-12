import React from 'react';
import { Link } from 'react-router-dom';
import '../Marvel/marvel.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import imgActuMarvel1 from "../../images/actus-marvel/Hulk-Tome-36.jpg";
import imgActuMarvel2 from "../../images/actus-marvel/avengers1.jpg";
import imgActuMarvel3 from "../../images/actus-marvel/Deadpool1.jpg";
import imgActuMarvel4 from "../../images/actus-marvel/4-Fantastiques-1.jpg";
import imgHistMarvel from "../../images/deco-MDC-Comics/logo-marvel-fond-rouge.jpg";

const Marvel = () => {

    return (
        <div>
            <Header/> 
            <div className="marvel container-fluid">
                <div className="row justify-content-center">
                    <div className="hist-marvel row col-12 col-md-6 justify-content-center">
                        <img src={imgHistMarvel} alt="HistoireMarvel"/>
                        <p>Marvel Worldwide Inc., plus communément appelé Marvel Comics ou simplement Marvel, est une subdivision de Marvel Entertainment et l'une des principales maisons d'édition américaines de comics...</p>
                        <Link to="https://fr.wikipedia.org/wiki/Marvel_Comics#:~:text=Martin%20Goodman%20fonde%20la%20soci%C3%A9t%C3%A9,aussi%20pl%C3%A9biscit%C3%A9%20par%20les%20lecteurs." className="Marvel btn btn-primary" href="/" role="button" target="_blank">HISTOIRE  DE  MARVEL</Link>
                    </div>
                    <div className="col-12 text-center">
                        <h3>MARVEL</h3>
                        <p><strong>Actualités Marvel: Comics, Films etc...</strong></p>
                    </div>
                    <div className="colonne-gauche  col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuMarvel1} alt="ActualitéMarvel1"/>
                            <h4>Hulk (6e Série - Semic - Marvel Comics)</h4>
                            <p>
                                Une BD de David, Peter et Angel Medina chez Marvel France (Version Intégrale) - 1998
                                Info édition : Contient: - L'incroyable Hulk (II) 446 "Manhattan sera à moi!" (The Incredible Hulk (II) 446 "I'll Take Manhattan" 10/1996). - L'incroyable Hulk (II) 447 "le syndrome du survivant" (The Incredible Hulk (II) 447 "Survivor's Guilt" 11/1996)
                            </p>
                        </Link>
                    </div>
                    <div className="colonne-centre1 col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuMarvel2} alt="ActualitéMarvel2"/>
                            <h4>Avengers (Marvel France - 1997)</h4>
                            <p>
                                Avengers 1
                                Dépot légal : 02/1997
                                - Avenger annual 23 "Etranger sur un plan astral" - Captain America 444 "La puissance et la gloire" - Thor 491 "la machine chapitre 1 Crucifixion"
                            </p>
                        </Link>
                    </div>
                    <div className="colonne-centre2 col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuMarvel3} alt="ActualitéMarvel3"/>
                            <h4>Deadpool 1 (Marvel France 1ère série - 1998)</h4>
                            <p>
                                Les Débuts fracassants du mercenaire le plus allumé de l'univers Marvel !!
                                Une BD de Kelly, Joe et Ed McGuinness chez Marvel France - 1998
                            </p>
                        </Link>
                    </div>
                    <div className=" colonne-droite col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuMarvel4} alt="ActualitéMarvel4"/>
                            <h4>Fantastic Four (La Renaissance des héros)</h4>
                            <p>
                                Fantastic Four 1
                                Une BD de Loeb, Jeph et Rob Liefeld chez Marvel France - 1998
                                les plus grands héros de la Terre unis pour combattre Onslaught, individu redoutable prêt à tout détruire et dont les pouvoirs psi rivalisaient avec ceux de Galactus lui-même !
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to="/" className="Marvel btn btn-primary" href="BtnMarvel" role="button">Voir + d'Actus MARVEL</Link>
                    </div>
                </div>  
            </div>
            <Footer/>
        </div>
    );
};

export default Marvel;