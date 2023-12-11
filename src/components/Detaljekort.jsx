// denne side er kodet af: Ellen Bager, RK & DK

import { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import FavoritHjerte from "./FavoritHjerte";
import Bogkort from "./Bogkort";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detaljekort({ book, bookDetaljeId }) {
  // Jeg bruger 'useState' til at oprette to tilstande: number og isEditing.
  // number holder værdien af tallet, som vil blive vist i den hvide boks, og isEditing styrer, om brugeren redigerer tallet i boksen.
  const [number, setNumber] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  // Denne funktion aktiveres, når brugeren klikker på den hvide boks. Den sætter isEditing til true, hvilket gør inputfeltet synligt.
  const handleBoxClick = () => {
    setIsEditing(true);
  };

  // Denne funktion opdaterer number-tilstanden, når der sker ændringer i inputfeltet (når brugeren skriver et nyt tal)
  const handleInputChange = (e) => {
    setNumber(Number(e.target.value));
  };

  // Denne funktion kaldes, når brugeren f.eks. klikker uden for inputfeltet.
  // Den sætter isEditing til false, hvilket skifter boksen tilbage til visningstilstanden med tallet.
  const handleInputBlur = () => {
    setIsEditing(false);
  };

  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"books" bruges til at lagre listen over bøger, og "isBooks" bruges til at kontrollere, om der er bøger at vise.
  const [books, setBooks] = useState([]);
  const [isBooks, setIsBooks] = useState(true);

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

  // Vi laver en skyggeliste til visning af 4 relaterede produkter nederst på detaljesiden.
  useEffect(() => {
    const antalRelaterede = 4;
    setSkyggeBogListe(books.slice(0, antalRelaterede));
  }, [books]);

  let favoritListe = [];

  // Hvis der allerede er en favoritliste i localstorage, så indlæses den.
  if (localStorage.getItem("favoritter")) {
    favoritListe = JSON.parse(localStorage.getItem("favoritter"));
  }

  // For at links til relaterede bøger virker
  const { bookId } = useParams();

  return (
    <div className="detaljekort">
      <div className="detaljekortContainer">
        <div className="detaljekortImg">
          <div className="detaljekortLikeMobil">
            <FavoritHjerte bookid={bookDetaljeId} />
          </div>
          <img
            src={book.billede}
            alt="Billede af bogcover"
            className="bogcoverImg"
          />
        </div>

        <div>
          <div className="detaljekortTitel">
            <h2 className="detaljekortHeader">
              {book.forfatter}, {book.titel}
            </h2>
          </div>
          <div className="detaljekortFooter">
            <div>
              <div className="detaljekortPrisLike">
                <div className="detaljekortPris">
                  <h2>{book.pris}</h2>
                  <p>(inkl. moms)</p>
                </div>
                <div className="detaljekortLike">
                  <FavoritHjerte bookid={bookDetaljeId} />
                </div>
              </div>
            </div>
            <div className="lagerstatus">
              Lagerstatus: <FaCheck /> På lager
            </div>
            <div className="detaljekortFlex detaljekortKobSamlet">
              <div
                className="whiteBox koebantal"
                style={{
                  backgroundColor: "var(--white)",
                  color: "var(--darkgrey)",
                  width: "142px",
                  height: "32px",
                  display: "flex",
                  padding: "6px 12px",
                  cursor: "pointer",
                  marginLeft: "15px",
                  marginRight: "20px",
                }}
                onClick={handleBoxClick}
              >
                {isEditing ? (
                  <input
                    type="number"
                    value={number}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    autoFocus
                    style={{
                      width: "80%",
                      height: "80%",
                      fontSize: "14px",
                    }}
                  />
                ) : (
                  <span>{number}</span>
                )}
              </div>
              <div className="detaljekortKurv">
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    marginRight: "15px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "var(--headinggrey)",
                      height: "32px",
                      width: "38px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaCartShopping
                      style={{ color: "var(--katlightgrey)", width: "15px" }}
                    />
                  </div>
                  <div className="detaljekortKobKnap">Køb</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detaljesideDiv">
        <p className="beskrivelseHeader">Beskrivelse</p>
        <p className="beskrivelseTxt">{book.beskrivelse}</p>
      </div>

      <div className="relateredeDiv">
        <div className="katUnderside">
          <h1 className="koebHeader relateredeHeader">Relaterede produkter</h1>

          <div className="bogkortFlexbox">
            {skyggeBogListe.map((book) => (
              <Link
                key={book.id}
                to={`/detaljeside/${book.id}`}
                className="detaljesideLink"
              >
                <Bogkort key={book.id} book={book} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
