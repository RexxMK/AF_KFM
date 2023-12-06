// denne side er kodet af: Ellen Bager & DK
import { useEffect, useState } from "react";
import Detaljekort from "../components/Detaljekort";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Detaljeside() {
  // DK
  // useParams bruges til at hente URL-parametre fra den aktuelle route. Her til ruten med den pågældende bogs id.
  const params = useParams();

  // Tilstandsvariablen book initialiseres. Den får senere indsat data til om den pågældende bog.
  const [book, setBook] = useState({});

  // URL til den pågældende bog.
  const url = `https://advanced-frontend-71bba-default-rtdb.europe-west1.firebasedatabase.app/books/${params.bookId}.json`;

  useEffect(() => {
    // getBook er en asynkron funktion, der med fetch henter data fra url i JSON-format.
    async function getBook() {
      const response = await fetch(url);
      const data = await response.json();

      // book opdateres med den pågældende bogs data.
      setBook(data);
    }
    getBook();

    // useEffect-hooket skal køre hver gang værdien af url ændres, altså når der klikkes på et nyt bogkort.
  }, [url]);

  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <div className="breadcrumbsMobil">
            <Breadcrumbs />
          </div>

          <Detaljekort key={book.id} book={book} />
        </div>
      </div>
    </>
  );
}
