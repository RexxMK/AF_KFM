import { NavLink } from "react-router-dom";
import FacebookImg from "../images/fb_follow.png";
import Breadcrumbs from "./Breadcrumbs";

// DK

export default function VenstreBokse() {
  return (
    <section className="venstreBokse">
      <Breadcrumbs />

      {/* Kategorier */}

      <div className="venstreBoks">
        <p className="venstreBoksTitel">Kategorier</p>

        <div className="venstreBoksLinks">
          <NavLink to="mustread" className="kategoriPunkt">
            Must Read
          </NavLink>
          <NavLink to="ugenstilbud" className="kategoriPunkt">
            Ugens tilbud
          </NavLink>
          <NavLink to="nyegodeboeger" className="kategoriPunkt">
            Nye gode bøger
          </NavLink>
          <NavLink to="signeredeboeger" className="kategoriPunkt">
            Signerede bøger
          </NavLink>
          <NavLink to="laeseklubbenlaeser" className="kategoriPunkt">
            KFM læseklubberne læser
          </NavLink>
          <NavLink to="skoenlitteratur" className="kategoriPunkt">
            Skønlitteratur
          </NavLink>
          <NavLink to="biografier" className="kategoriPunkt">
            Biografier
          </NavLink>
          <NavLink to="lyrik" className="kategoriPunkt">
            Lyrik
          </NavLink>
          <NavLink to="spaending" className="kategoriPunkt">
            Spænding
          </NavLink>
          <NavLink to="fagboeger" className="kategoriPunkt">
            Fagbøger
          </NavLink>
          <NavLink to="boerneboeger" className="kategoriPunkt">
            Børnebøger
          </NavLink>
          <NavLink to="gavekort" className="kategoriPunkt">
            Gavekort
          </NavLink>
          <NavLink to="moleskine" className="kategoriPunkt">
            Moleskine notesbøger og kalendere
          </NavLink>
        </div>
      </div>

      {/* Blog */}

      <div className="venstreBoks">
        <p className="venstreBoksTitel">Blog</p>

        <div className="venstreBoksLinks">
          <p className="kategoriPunkt boldTxt">Nyeste blog indlæg</p>
          <p className="kategoriPunkt">
            Maggie O'Farrell, Portræt af en ung brud{" "}
            <span className="smallDate">03/10 2023</span>
          </p>
          <p className="kategoriPunkt">
            Gilgamesh <span className="smallDate">03/10 2023</span>
          </p>
          <p className="kategoriPunkt">
            Vigdis Hjorth, Femten år{" "}
            <span className="smallDate">03/10 2023</span>
          </p>
        </div>
      </div>

      {/* Facebook */}

      <div className="venstreBoks">
        <p className="venstreBoksTitel">Facebook</p>

        <div className="venstreBoksLinks">
          <img
            src={FacebookImg}
            alt="Billede af KFM's Facebookside."
            className="facebookImg"
          />
        </div>
      </div>
    </section>
  );
}
