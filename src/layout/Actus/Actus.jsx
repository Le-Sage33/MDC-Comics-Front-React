import React from "react";
import { Link } from "react-router-dom";
import "../Actus/Actus.css";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import imgActu1 from "../../images/actualites/rock-pop-wizz-angouleme.jpg";
import imgActu2 from "../../images/actualites/printemps-du-livre-grenoble.jpg";
import imgActu3 from "../../images/actualites/Festival-Eauze-BD.jpg";
import imgActu4 from "../../images/actualites/fete-de-la-bd-gardons-la-bulle.jpg";

const Actus = () => {

    return (
        <div>
            <Header/>
            <div className="Actus container-fluid" >
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                    
                        <h3 id="Actus" >ACTUALITES</h3>
                        
                        <p><strong>Comics, BD, Festivals, Films...</strong></p>
                    </div>
                    <div className="colonne-gauche  col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActu1} alt="Actualité1"/>
                            <h4>Rock ! Pop ! Wizz ! Quand la BD monte le son</h4>
                            <p>
                                Exposition inédite à la Cité de la bande dessinée d’Angoulême : « Rock ! Pop ! Wizz ! Quand la BD monte le son » La Cité internationale de la bande dessinée et de l’image d’Angoulême a le plaisir d’accueillir la toute première exposition qui explorera les relations entre musique pop, rock et bande dessinée
                                Du 25 janvier au 31 décembre 2023
                            </p>
                        </Link>
                    </div>
                    <div className="colonne-centre col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActu2} alt="Actualité2"/>
                            <h4>Momie Grenoble au Printemps du livre</h4>
                            <p>
                                Du 31/03/2023 au 02/04/2023
                                La ville de Grenoble organise la 21e édition du Printemps du livre. Et pour ne pas perdre les bonnes habitudes, vous trouverez vos libraires Momie pour accompagner l'évenement.
                            </p>
                        </Link>
                    </div>
                    <div className="colonne-droite col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActu3} alt="Actualité3"/>
                            <h4>30e édition du Festival BD d'ÉAUZE</h4>
                            <p>
                                Du 06/08/2023 au 06/08/2023 ÉAUZE 
                                Une trentaine d'auteurs internationaux dans le Gers. ENTRÉE GRATUITE. Toutes les infos sur eauzebd.com
                                Site web : www.eauzebd.com
                            </p>
                        </Link>
                    </div>
                    <div className=" colonne-gauche col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActu4} alt="Actualité4"/>
                            <h4>7ème Fête de la BD "Gardons la Bulle"</h4>
                            <p>
                                Du 06/05/2023 au 07/05/2023 ALES
                                Un événement gratuit pour toute la famille. Une vingtaine d'auteurs en dédicace. Des animations. Pour en savoir plus : www.gardonslabulle.sitew.fr
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to="/" className="btn btn-primary" href="#" role="button">Voir + D'Actualités...</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Actus;