import React from 'react';
import { Link } from 'react-router-dom';
import './bonsplans.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import imgActuBonPlans1 from "../../images/bons-plans/green-lantern-saga-2-promo.jpg";
import imgActuBonPlans2 from "../../images/bons-plans/bon plans carrefour comics or.jpg";
import imgActuBonPlans3 from "../../images/bons-plans/bon-plan-collection-promo-le-meilleur-de-dc-comics.jpg";
import imgActuBonPlans4 from "../../images/bons-plans/coffret-anniversaire-spiderman.jpg";


const BonsPlans = () => {

    return (
        <div>
            <Header/>
            <div className="bons-plans container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <h3>BONS PLANS</h3>
                        <p><strong>Bons plans: Comics, BD, Films...</strong></p>
                    </div>
                    <div className="colonne-gauche  col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuBonPlans1} alt="ActualitésBonPlan1"/>
                            <h4>Green Lantern Saga Numero 02</h4>
                            <p>
                                Sinestro est un Green Lantern ! et il doit aider Hal Jordan contre les Sinestro Corps !
                                Guy Gardner et John Stewart mènent une équipe de Green Lanterns contre une force qui consume des planètes entières !
                                Bon Plan: 3€ au lieu de 7.50€
                            </p>
                        </Link>
                    </div>
                    <div className="colonne-centre col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuBonPlans2} alt="ActualitésBonPlan2"/>
                            <h4>Marvel Gold Collection 3,99€- Carrefour</h4>
                            <p>
                            La nouvelle collection Marvel est disponible dans les magasins Carrefour, 10 tomes à 3.99 euros pièce.<br/>
                1- Dark Avengers, 2- Uncanny Avengers, 3- Uncanny Inhumains, 4- Les Gardiens de la Galaxie, 5- Secret Avengers, 6- Secret Warriors, 7- Squadron Supreme, 8- Thunderbolts, 9 - X-Force, 10- X-TREME X-men
                            </p>
                        </Link>
                    </div>
                    <div className="colonne-droite col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuBonPlans3} alt="ActualitésBonPlan3"/>
                            <h4>Le meilleur de DC Comics à 4,90€</h4>
                            <p>
                            Disponible en librairie, mais également en GSS et GSA, découvrez cette sélection de 10 récits complets. Vous avez toujours voulu débuter Batman, Wonder Woman, ou tout simplement les comics ? C’est le moment!
                            </p>
                        </Link>
                    </div>
                    <div className=" colonne-gauche col-12 col-md-3 text-center">
                        <Link to="/" className="btn" href="">
                            <img src={imgActuBonPlans4} alt="ActualitésBonPlan4"/>
                            <h4>Coffret Spider-Man Anniversaire</h4>
                            <p>
                            Pack complet La collection anniversaire Spider-Man anniversaire Spider-Man, 69€ 
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <Link to="/" className="btn btn-primary" href="#" role="button">Voir + de BONS PLANS</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default BonsPlans;