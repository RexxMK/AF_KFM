import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import Logo from "../images/kfm-logo.png"
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

//SD
export default function Header() {

  //Burger Menu SD
  const [txtMenuDisplay, setTxtMenuDisplay] = useState('none');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

  //Her er en toggle function
  //det bruges til menu knappen
  //ved tryk af menuknappen skifter display fra none til flex
  const toggleTxtMenu = () => {
    setTxtMenuDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
  };

  //Denne function virker efter størrelsen af skærmen
  //Når skærmen er ligmed eller mindre end 950px
  //Så opdaterer det imellem isMobile og txtmenuDisplay 
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 950);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 


  return (
    <header>
      {/*Søg wrap = første stribe med søg feltet */}
      <section className="sog-wrap">
        <div className="sog">
          <form>
            <input type="search" placeholder="Indtast søgning"/>
            <button>Søg</button>
          </form>
        </div>
      </section>

      {/*Striben med logo billedet*/}
      <section className="logo">
        <div className="logo-wrap">
          <img src={Logo} />
        </div>
      </section>

      {/*Navigationen*/}
      <nav>
        <div className="header-wrap">

          {/*Knappen som åbner burger menu'en,
          Er kun synlig i mindre skærme
          Functionen virker ved at klikke på knappen*/}
          <button className="burger-menu" onClick={toggleTxtMenu}>
            <MenuSharpIcon />
          </button>

          {/*Venstre side af navigatione,
            den med kun tekst*/}
            {/*Display skiftes efter skærm størrelsen*/}
          <div className="txt-menu" style={{ display: isMobile ? txtMenuDisplay : 'flex' }}>
            <div className="menu-wrap">
              <a className="menupunkt">Forside</a>
              {/*Functionen virker ved at klikke på knappen*/}
              <NavLink to="/" className="menupunkt" onClick={toggleTxtMenu}>Køb Bøger</NavLink>
              <a className="menupunkt">Køb Moleskine</a>
              <a className="menupunkt">Bøger vi anbefaler</a>
              <a className="menupunkt info">
                <p>Information</p>
                <ArrowDropDownIcon />
              </a>
              <a className="menupunkt">Eventkalender</a>
            </div>
          </div>

          {/*Højre siden af navigationen,
                      Den med ikonerne*/}
          <div className="icon-menu">

            {/*Profil wrap med drop down*/}
            <NavLink to="/login" className="iconpunkt profil">
              {/*Profil knappens context*/}
              <p>Min Profil</p>
              <PersonSharpIcon />
            </NavLink>

            {/*Favorit knap*/}
            <NavLink to="/favoritside" className="iconpunkt">
              <p>Dine Favoritter</p>
              <FavoriteSharpIcon />
            </NavLink>
            <a className="iconpunkt kurv">
              <p>Din indkøbskurv er tom</p>
              <div className="kurv-wrap"><ShoppingCartSharpIcon /></div>
            </a>
          </div>
        </div>
      </nav>
    </header >
  )
}