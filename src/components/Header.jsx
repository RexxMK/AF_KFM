import { NavLink } from "react-router-dom";
import Logo from "../img/kfm-logo.png"
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useEffect, useState } from "react";

export default function Header() {



    
  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"books" bruges til at lagre listen over bøger, og "isBooks" bruges til at kontrollere, om der er bøger at vise.
  const [books, setBooks] = useState([]);
  const [isBooks, setIsBooks] = useState(true);

  // Til søgefunktion
  const [soegeTekst, setSoegeTekst] = useState("");
  const [skyggeBogListe, setSkyggeBogListe] = useState([]);

  useEffect(() => {
    async function getBooks() {
      //Der defineres en URL til at hente bøgerne data fra vores Firebase-database.
      const url =
        "https://advanced-frontend-71bba-default-rtdb.europe-west1.firebasedatabase.app/books.json";

      //Her bruges "fetch" til hente bøgernes data fra vores Firebase-database og konverterer dem til JSON-format.
      const response = await fetch(url);
      const data = await response.json();

      //Hvis der er data tilgængelig, laves dataerne til et array og opdaterer "books" til at indeholde denne liste af bøger.
      if (data !== null) {
        const booksArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBooks(booksArray);
        setSkyggeBogListe(booksArray);

      }

      //Hvis der ikke er nogen data tilgængelig, opdateres "isBooks" til "false" for at vise en meddelelse om, at der ikke er noget at vise.
      else {
        setIsBooks(false);
      }
    }
    getBooks();
  }, []);


  
  // handleSubmit-funktionen skal kaldes, når brugeren laver en søgning.
  function handleSubmit(e) {
    // Normalt genindlæses siden ved en formularindsendelse. Dette forhindres her med preventDefault.
    e.preventDefault();

    /* Med filter-metoden gennemgås hvert element i books og det vurderes om elementet skal inkluderes i det nye array, soegeResultat, 
    baseret på de to betingelser, s1 og s2. */
    let soegeResultat = books.filter((book) => {
      // Med s1 tjekkes om søgeteksten (som er gemt i soegeTekst) er inkluderet i titlen på en bog.
      // toLowerCase() sørger for at alt læses med små bogstaver, så der ikke gøres forskel på små og store bogstaver.
      const s1 = book.titel.toLowerCase().includes(soegeTekst.toLowerCase());

      // Med s2 tjekkes om søgeteksten er inkluderet i bogens forfatter.
      const s2 = book.forfatter.toLowerCase().includes(soegeTekst.toLowerCase());

      // Med s3 tjekkes om søgeteksten er inkluderet i beskrivelsen af en bog.
      const s3 = book.beskrivelse.find((ord) =>
        ord.toLowerCase().includes(soegeTekst.toLowerCase())
      );

      // Hvis enten s1, s2 eller s3 er sand, eksisterer søgeteksten i bogens titel, forfatter eller beskrivelse.
      return s1 || s2 || s3;
    });

    // Hvis længden på søgeresultatet er 0, betyder det, at der ikke blev fundet nogen bog, der matcher søgeteksten.
    if (soegeResultat.length === 0) {
      // I så fald er der ingen bøger at vise.
      setIsBooks(false);

    } else {
      // Ellers er der bøger at vise, hvilket sker ved at sætte skyggeBogListe til at være søgeresultatet.
      setIsBooks(true);
      setSkyggeBogListe(soegeResultat);
    }
  }




    return (
            <header>
                <section className="sog-wrap">
                    <div className="sog">
                        <form>
                            <input type="search" required value={soegeTekst} placeholder="Indtast søgning" onChange={(e) => setSoegeTekst(e.target.value)}/>
                            <button>Søg</button>
                        </form>
                    </div>
                </section>
                <section className="logo">
                    <div className="logo-wrap">
                        <img src={Logo}/>
                    </div>
                </section>
                <nav>
                    <div className="header-wrap">
                        <div className="txt-menu">
                            <a className="menupunkt">Forside</a>
                            <NavLink to="/" className="menupunkt">Køb Bøger</NavLink>
                            <a className="menupunkt">Køb Moleskine</a>
                            <a className="menupunkt">Bøger vi anbefaler</a>
                            <a className="menupunkt icon info">
                                <p>Information</p>
                                <ArrowDropDownIcon/>
                            </a>
                            <a className="menupunkt">Eventkalender</a>
                        </div>
                        <div className="icon-menu">
                            <NavLink to="/favoritside" className="menupunkt icon">
                                <p>Dine Favoritter</p>
                                <FavoriteSharpIcon/>
                            </NavLink>
                            <a className="menupunkt icon">
                                <p>Min Profil</p>
                                <PersonSharpIcon/>
                            </a>
                            <a className="menupunkt icon kurv">
                                <p>Din indkøbskurv er tom</p>
                                <div className="kurv-wrap"><ShoppingCartSharpIcon/></div>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
    )
}