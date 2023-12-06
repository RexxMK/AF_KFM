// denne side er kodet af: EB, DK & SD

import React, { useEffect, useState } from "react";
import Detaljekort from "../components/Detaljekort";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Detaljeside() {

  // DK
  // useParams bruges til at hente URL-parametre fra den aktuelle route. Her til ruten med den pågældende bogs id.
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Tilstandsvariablen book initialiseres. Den får senere indsat data til om den pågældende bog.
  const [book, setBook] = useState({});
  const [kategoriList, setKategoriList] = useState([]);
  const [isBooks, setIsBooks] = useState(true);

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

  useEffect(() => {
    async function getBooks() {
      const booksUrl =
        "https://advanced-frontend-71bba-default-rtdb.europe-west1.firebasedatabase.app/books.json";
      const response = await fetch(booksUrl);
      const data = await response.json();
      if (data !== null) {
        const booksArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        const filteredList = booksArray.filter((book) =>
          book.kategori.includes("must")
        );
        if (filteredList.length > 0) {
          setKategoriList(filteredList);
          setIsBooks(true);
        } else {
          setIsBooks(false);
        }
      }
    }
    getBooks();
  }, []);

  const findBookIndex = () => {
    return kategoriList.findIndex((b) => b.id === params.bookId);
  };

  const handlePrevious = () => {
    const currentIndex = findBookIndex();
    if (currentIndex > 0) {
      const previousBookId = kategoriList[currentIndex - 1].id;
      navigate(`../${getPrefix()}seBog/${previousBookId}`);
    }
  };

  const handleNext = () => {
    const currentIndex = findBookIndex();
    if (currentIndex < kategoriList.length - 1) {
      const nextBookId = kategoriList[currentIndex + 1].id;
      navigate(`../${getPrefix()}seBog/${nextBookId}`);
    }
  };

  const getPrefix = () => {
    const parts = location.pathname.split("/");
    const prefixIndex = parts.indexOf("seBog");
    if (prefixIndex !== -1 && prefixIndex < parts.length - 1) {
      return parts[prefixIndex - 1] + "/";
    }
    return "";
  };

  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <Detaljekort key={book.id} book={book} />
          <div className="navigationButtons">
            <button onClick={handlePrevious} disabled={findBookIndex() === 0}>Forrige</button>
            <button onClick={handleNext} disabled={findBookIndex() === kategoriList.length - 1}>Næste</button>
          </div>
          <div className="breadcrumbsMobil">
            <Breadcrumbs />
          </div>

          <Detaljekort key={book.id} book={book} />
        </div>
      </div>
    </>
  );
}
