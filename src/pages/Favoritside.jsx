import { Authdetaljer } from "../components/Auth/AuthDetaljer";
import Login from "../components/Auth/Login";
import Opret from "../components/Auth/Opret";
import { useEffect, useState } from "react";
import KategoriUnderside from "../components/KategoriUnderside";
import Bogkort from "../components/bogkort";

export default function Favoritside() {
    return (
        <>
         <h1>Hej favoritter</h1>
        </>
    )
} 
  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"books" bruges til at lagre listen over bøger, og "isBooks" bruges til at kontrollere, om der er bøger at vise.
  const [data, setData] = useState([]);
  const [isBooks, setIsBooks] = useState(true);

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
        setData(booksArray);
      }

      //Hvis der ikke er nogen data tilgængelig, opdateres "isBooks" til "false" for at vise en meddelelse om, at der ikke er noget at vise.
      else {
        setIsBooks(false);
      }
    }
    getBooks();
  }, []);

  // favoritListe defineres som et tomt array.
  let favoritListe = [];

  // Hvis der allerede er en favoritliste i localstorage, så indlæses den.
  if (localStorage.getItem("favoritter")) {
    favoritListe = JSON.parse(localStorage.getItem("favoritter"));
  }

  // Her filtrerer vi de bøger fra, som står på favoritlisten
  const skyggeFavoritListe = data.filter((book) =>
    favoritListe.includes(book.id)
  );

  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <div className="katUnderside">
            <KategoriUnderside
              headingText={"Mine favoritter"}
              katText={""}
              antalText={""}
            />
            {isBooks && skyggeFavoritListe.length > 0 ? (
              <div>
                {skyggeFavoritListe.map((book) => (
                  <Bogkort key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <p className="tomSideTxt">Du har ikke tilføjet nogen favoritter</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
