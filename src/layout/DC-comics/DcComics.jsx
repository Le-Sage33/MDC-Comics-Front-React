import React from 'react';
import { Link } from 'react-router-dom';
import '../DC-comics/dc-comics.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import imgHistDcComics from "../../images/deco-MDC-Comics/logo-DC.jpg";
import imgActuDcComics1 from "../../images/actus-dc-comics/batman-cours-des-hiboux-part1.jpg";
import imgActuDcComics2 from "../../images/actus-dc-comics/batman-silence-part1.jpg";
import imgActuDcComics3 from "../../images/actus-dc-comics/justice-league-aux-origines.jpg";
import imgActuDcComics4 from "../../images/actus-dc-comics/superman-le-derniers-fils.jpg";

const DcComics = () => {

  return (
    <div>
      <Header/>
      {/* Univers DC Comics */}
      <div className="dc-comics container-fluid">
        <div className="row justify-content-center">
          <div className='hist-dc-comics row col-12 col-md-6 justify-content-center'>
            <img src={imgHistDcComics} alt="HistoireDcComics"/>
                <p>
                DC Comics est l'une des principales maisons d’édition américaines de comics, les initiales « DC » sont une abréviation de « Detective Comics »...</p>
                <Link to="https://fr.wikipedia.org/wiki/DC_Comics" className="DC btn btn-primary" href="/" role="button" target="_blank">HISTOIRE  DE  DC</Link>
          </div>
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
      <Footer/>
    </div>
  );
};

export default DcComics;

