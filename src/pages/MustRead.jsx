import React, { useEffect, useState } from "react";
import Bogkort from "../components/Bogkort";
import KategoriUnderside from "../components/KategoriUnderside";
import Breadcrumbs from "../components/Breadcrumbs";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';


// RK & DK

export default function MustRead({ book }) {
  // Her opretter jeg to tilstandsvariabler ved hjælp af "useState".
  //"books" bruges til at lagre listen over bøger, og "isBooks" bruges til at kontrollere, om der er bøger at vise.
  const [books, setBooks] = useState([]);
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
        setBooks(booksArray);
      }

      //Hvis der ikke er nogen data tilgængelig, opdateres "isBooks" til "false" for at vise en meddelelse om, at der ikke er noget at vise.
      else {
        setIsBooks(false);
      }
    }
    getBooks();
  }, []);

  // Der laves en skyggeliste for den pågældende kategori, som filterer efter kategori.

  /* books er en liste over alle bøger og deres attributter, herunder "kategori". 
  Med filter-metoden oprettes en ny liste ved at filtrere elementerne i books-listen baseret på betingelsen book.kategori.includes(" ").
  Hvis en bog indeholder tekststrengen must (vi har ingen gavekort i JSON-filen, så dette er bare som eksempel) i kategoriattributten returneres true. Ellers false.
  Hvis der returneres true, vises elementet i skyggelisten. Ellers ikke. */

  const kategoriListe = books.filter((book) => book.kategori.includes("must"));

  const [bogkortClassName, setBogkortClassName] = useState("bogkortContainer");

  const updateBogkortClassName = (bogkortGrid) => {
    setBogkortClassName(bogkortGrid);
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <div className="katUnderside">
            <div className="breadcrumbsMobil">
              <Breadcrumbs />
            </div>
            <KategoriUnderside
              headingText={"Must Read"}
              katText={"Månedens Must Read hos KFM"}
              antalText={"Viser 18 produkter"}
              books={books}
              setBooks={setBooks}
            />
            <section className="view-skift">
            <button onClick={() => {
              updateBogkortClassName("bogkortContainer");
              setIsActive(!isActive); 
            }}>
              {isActive ? <GridViewOutlinedIcon /> : <GridViewSharpIcon />}
            </button>
            <button onClick={() => {
              updateBogkortClassName("bogkortGrid");
              setIsActive(!isActive); 
            }}>
              {isActive ? <ViewAgendaIcon /> : <ViewAgendaOutlinedIcon />}
            </button>
            </section>
            {isBooks ? (
              <div className="bogkortFlexbox">
                {kategoriListe.map((book) => (
                  <Bogkort key={book.id} book={book} bogkortClassName={bogkortClassName}/>
                ))}
              </div>
            ) : (
              <p className="tomSideTxt">Ingen bøger at vise</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
