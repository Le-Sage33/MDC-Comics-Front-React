import React from "react";
import { Link } from "react-router-dom";
import "../Main/main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import imgActuCarousel from "../../images/deco-MDC-Comics/dc marvel.png";
import imgMarvelCarousel from "../../images/deco-MDC-Comics/heros-marvel.jpg";
import imgDccomicsCarousel from "../../images/deco-MDC-Comics/heros DC comics complet.jpg";
import imgBonplanCarousel from "../../images/deco-MDC-Comics/heros dc-marvel bon plans.jpg";
import imgHistDcComics from "../../images/deco-MDC-Comics/logo-DC.jpg";
import imgHistMarvel from "../../images/deco-MDC-Comics/logo-marvel-fond-rouge.jpg";
import imgActu1 from "../../images/actualites/rock-pop-wizz-angouleme.jpg";
import imgActu2 from "../../images/actualites/printemps-du-livre-grenoble.jpg";
import imgActu3 from "../../images/actualites/Festival-Eauze-BD.jpg";
import imgActu4 from "../../images/actualites/fete-de-la-bd-gardons-la-bulle.jpg";
import imgActuDcComics1 from "../../images/actus-dc-comics/batman-cours-des-hiboux-part1.jpg";
import imgActuDcComics2 from "../../images/actus-dc-comics/batman-silence-part1.jpg";
import imgActuDcComics3 from "../../images/actus-dc-comics/justice-league-aux-origines.jpg";
import imgActuDcComics4 from "../../images/actus-dc-comics/superman-le-derniers-fils.jpg";
import imgActuMarvel1 from "../../images/actus-marvel/Hulk-Tome-36.jpg";
import imgActuMarvel2 from "../../images/actus-marvel/avengers1.jpg";
import imgActuMarvel3 from "../../images/actus-marvel/Deadpool1.jpg";
import imgActuMarvel4 from "../../images/actus-marvel/4-Fantastiques-1.jpg";
import imgActuBonPlans1 from "../../images/bons-plans/green-lantern-saga-2-promo.jpg";
import imgActuBonPlans2 from "../../images/bons-plans/bon plans carrefour comics or.jpg";
import imgActuBonPlans3 from "../../images/bons-plans/bon-plan-collection-promo-le-meilleur-de-dc-comics.jpg";
import imgActuBonPlans4 from "../../images/bons-plans/coffret-anniversaire-spiderman.jpg";

const Main = () => {

  return (

    <div>
        <br></br>
        {/* Carousel */}
        <div className="container">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="title carousel-inner">
                    <div className="carousel-item active">
                        <h2>Actualites</h2>
                        <img src={imgActuCarousel} alt="CarouselActualités"/>
                    </div>
                    <div className="carousel-item">
                        <h2>Marvel</h2>
                        <img src={imgMarvelCarousel} alt="CarouselMarvel"/>
                    </div>
                    <div className="carousel-item">
                        <h2>DC Comics</h2>
                        <img src={imgDccomicsCarousel} alt="CarouselDcComics"/>
                    </div>
                    <div className="carousel-item">
                        <h2>Bons Plans</h2>
                        <img src={imgBonplanCarousel} alt="CarouselBonPlan"/>
                    </div>
                </div>
            </div>
        </div>
        {/* HISTOIRE DC MARVEL */}
        <div className="container col-12">
            <div className=" container row justify-content-center">
                <div className="col-12 text-center">
                    <h3>MDC Comics</h3>
                    <p><strong>"Le Meilleur de l'Univers DC Comics et Marvel reunis"</strong></p>
                    <p><strong>MDC Comics</strong> à pour vocation de réunir les différents super-heros des Univers Marvel et DC Comics en un seul endroits: Comics, Biographie, Actualités, Bons Plans...etc...<br></br>
                    Vous ne raterez rien de vos super heros préférez! et peut etre en découvrirez vous d'autre....</p>
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
        {/* ACTUALITES */}
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
        {/* DC Comics */}
        <div className="dc-comics container-fluid">
            <div className="row justify-content-center">
        
                <div className="col-12 md-6 text-center">
                    <h3 id='DC' >DC COMICS</h3>
                    <p>
                    <strong>Actualités DC: Comics, Films etc...</strong>
                    </p>
                </div>
                <div className="colonne-gauche  col-12 col-md-3 text-center">
                    <Link to="/" className="btn" href="#">
                    <img src={imgActuDcComics1} alt="ActualitéDcComics1" />
                    <h4>Batman - La Cour des hiboux - 1ère partie</h4>
                    <p>
                        Parution le 10/11/2015 La Cour des Hiboux est décrite comme
                        étant une organisation secrète tenue par des gens fortunés et
                        puissants de Gotham city. Son rôle est de contrôler la ville.
                        Elle agit pour cela principalement dans l'ombre et peut,
                        lorsque la situation l'exige, envoyer «L'Ergot», l'assassin de
                        la Cour, afin de régler le litige.
                    </p>
                    </Link>
                </div>
                <div className="colonne-centre col-12 col-md-3 text-center">
                    <Link to="/" className="btn" href="#">
                    <img src={imgActuDcComics2} alt="ActualitéDcComics2" />
                    <h4>Batman - Silence - 1ère partie</h4>
                    <p>
                        Parution le 18/08/2015 Batman se retrouve assailli par tous ses
                        ennemis, lorsqu'un mystérieux personnage, qui dissimule son
                        visage sous des bandelettes, apparaît. Son nom? Silence. Son
                        but? Harceler le justicier jusqu'à lui faire perdre raison.
                        Catwoman saura-t-elle lui apporter l'aide et le réconfort dont
                        il a cruellement besoin?
                    </p>
                    </Link>
                </div>
                <div className="colonne-droite col-12 col-md-3 text-center">
                    <Link to="/" className="btn" href="#">
                    <img src={imgActuDcComics3} alt="ActualitéDcComics3" />
                    <h4>Justice League Aux Origines</h4>
                    <p>
                        Tome 4 Collection: URBAN PREMIUM Il y a cinq ans, nul ne
                        connaissait l'existence des surhommes, et encore moins celle
                        des super-héros... Avec l'apparition de Superman, Batman, Green
                        Lantern et Wonder Woman, les autorités, effrayées par la
                        puissance de ces individus, les déclarèrent hors-la-loi.
                    </p>
                    </Link>
                </div>
                <div className="colonne-gauche col-12 col-md-3 text-center">
                    <Link to="/" className="btn" href="#">
                    <img src={imgActuDcComics4} alt="ActualitéDcComics4" />
                    <h4>Superman : le dernier fils</h4>
                    <p>
                        Un vaisseau spatial s’écrase en plein Metropolis : à l’intérieur,
                        un jeune enfant. Superman prend sous son aile le rescapé et
                        découvre qu’il vient, comme lui, de Krypton. Mais quel est le
                        secret de ce « Dernier Fils » ?
                    </p>
                    </Link>
                </div>
                <div className="col-md-4 text-center">
                    <Link to="#" className="DC btn btn-primary" href="#" role="button">Voir + d'Actus DC Comics</Link>
                </div>
            </div>
        </div>
        {/* Marvel */}
        <div className="marvel container-fluid">
                <div className="row justify-content-center">
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
            {/* BonsPlans */}
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


    </div>
    
       
    );
};

export default Main;