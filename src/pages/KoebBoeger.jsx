import { NavLink } from "react-router-dom";
import biografier from "../images/biografier.png";
import borneboger from "../images/borneboger.png";
import fagboger from "../images/fagboger.png";
import gavekort from "../images/gavekort.png";
import klub from "../images/klub.png";
import lyrik from "../images/lyrik.png";
import moleskine from "../images/moleskine.png";
import must from "../images/must.png";
import nye from "../images/nye.png";
import signerede from "../images/signerede.png";
import skonlitteratur from "../images/skonlitteratur.png";
import spanding from "../images/spanding.png";
import tilbud from "../images/tilbud.png";
import Breadcrumbs from "../components/Breadcrumbs";

// DK & RK

export default function KoebBoeger() {
  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <div className="katUnderside">
            <div className="breadcrumbsMobil">
              <Breadcrumbs />
            </div>
            <h1 className="koebHeader">Udvalgte bøger fra KFM</h1>
            <div className="kategoriContainer">
              
              <NavLink to="mustread" className="kategoriCard">
                <div className="kategoriCard">
                  <img src={must} alt="Must read" className="kategoriImg" />
                  <p className="kategoriTxt">Must Read</p>
                </div>
              </NavLink>

              <NavLink to="ugenstilbud" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={tilbud}
                    alt="Ugens tilbud"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">Ugens tilbud</p>
                </div>
              </NavLink>

              <NavLink to="nyegodeboeger" className="kategoriCard">
                <div className="kategoriCard">
                  <img src={nye} alt="Nye gode bøger" className="kategoriImg" />
                  <p className="kategoriTxt">Nye gode bøger</p>
                </div>
              </NavLink>

              <NavLink to="signeredeboeger" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={signerede}
                    alt="Signerede bøger"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">Signerede bøger</p>
                </div>
              </NavLink>

              <NavLink to="laeseklubbenlaeser" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={klub}
                    alt="KFM læseklubberne læser"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">KFM læseklubberne læser</p>
                </div>
              </NavLink>

              <NavLink to="skoenlitteratur" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={skonlitteratur}
                    alt="Skønlitteratur"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">Skønlitteratur</p>
                </div>
              </NavLink>

              <NavLink to="biografier" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={biografier}
                    alt="Biografier"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">Biografier</p>
                </div>
              </NavLink>

              <NavLink to="lyrik" className="kategoriCard">
                <div className="kategoriCard">
                  <img src={lyrik} alt="Lyrik" className="kategoriImg" />
                  <p className="kategoriTxt">Lyrik</p>
                </div>
              </NavLink>

              <NavLink to="spaending" className="kategoriCard">
                <div className="kategoriCard">
                  <img src={spanding} alt="Spænding" className="kategoriImg" />
                  <p className="kategoriTxt">Spænding</p>
                </div>
              </NavLink>

              <NavLink to="fagboeger" className="kategoriCard">
                <div className="kategoriCard">
                  <img src={fagboger} alt="Fagbøger" className="kategoriImg" />
                  <p className="kategoriTxt">Fagbøger</p>
                </div>
              </NavLink>

              <NavLink to="boerneboeger" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={borneboger}
                    alt="Børnebøger"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">Børnebøger</p>
                </div>
              </NavLink>

              <NavLink to="gavekort" className="kategoriCard">
                <div className="kategoriCard">
                  <img src={gavekort} alt="Gavekort" className="kategoriImg" />
                  <p className="kategoriTxt">Gavekort</p>
                </div>
              </NavLink>

              <NavLink to="moleskine" className="kategoriCard">
                <div className="kategoriCard">
                  <img
                    src={moleskine}
                    alt="Moleskine notesbøger og kalendere"
                    className="kategoriImg"
                  />
                  <p className="kategoriTxt">
                    Moleskine notesbøger og kalendere
                  </p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
