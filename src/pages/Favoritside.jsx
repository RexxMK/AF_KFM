import { useEffect, useState } from "react";
import Bogkort from "../components/Bogkort";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Favoritside() {
  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"books" bruges til at lagre listen over bøger, og "isBooks" bruges til at kontrollere, om der er bøger at vise.
  const [data, setData] = useState([]);
  const [isBooks, setIsBooks] = useState(true);

  const [anbefalingerListe, setAnbefalingerListe] = useState([]);
  

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
        setAnbefalingerListe(booksArray);
      }

      //Hvis der ikke er nogen data tilgængelig, opdateres "isBooks" til "false" for at vise en meddelelse om, at der ikke er noget at vise.
      else {
        setIsBooks(false);
      }
    }
    getBooks();
  }, []);


  // Vi laver en skyggeliste til visning af 4 anbefalede produkter nederst på favoritsiden.
  useEffect(() => {
    const antalAnbefalinger = 4;
    setAnbefalingerListe(data.slice(0, antalAnbefalinger));
  }, [data]);

  // For at links til anbefalede bøger virker
  const { bookId } = useParams();


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
            <h1 className="koebHeader">Mine favoritter</h1>
            {isBooks && skyggeFavoritListe.length > 0 ? (
              <div>
                <div className="bogkortFlexbox">
                  <p className="favoritMobilTxt tomSideTxt">Scroll ned for at se anbefalinger til dig.</p>
                  {skyggeFavoritListe.map((book) => (
                    <Bogkort key={book.id} book={book} />
                  ))}
                </div>

                <div className="relateredeDiv">
                  <div className="katUnderside">
                    <h1 className="koebHeader relateredeHeader">Anbefalinger til dig</h1>
                    <div className="bogkortFlexbox">
                      {anbefalingerListe.map((book) => (
                        <Link key={book.id} to={`/detaljeside/${book.id}`} className="detaljesideLink">
                          <Bogkort key={book.id} book={book} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div> 
              </div> 


            ) : (
              <p className="tomSideTxt">
                Du har ikke tilføjet nogen favoritter.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
