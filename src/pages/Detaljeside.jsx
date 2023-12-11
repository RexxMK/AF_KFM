// denne side er kodet af: EB, DK & SD
import React, { useEffect, useState } from "react";
import Detaljekort from "../components/Detaljekort";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import { FaDownload } from "react-icons/fa";

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

  //SD
  useEffect(() => {
    const currentPath = location.pathname;

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

        const currentCategory = getCategoryFromPath(currentPath);

        const filteredList = booksArray.filter((book) =>
          book.kategori.includes(currentCategory)
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
  }, [location.pathname]);

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

  const getCategoryFromPath = (pathname) => {
    const parts = pathname.split("/");
    const categoryIndex = parts.indexOf("");
    if (categoryIndex !== -1 && categoryIndex < parts.length - 1) {
      const urlCategory = parts[categoryIndex + 1];
      console.log("URL Category:", urlCategory);
      const categoryMappings = {
        mustread: "must",
        ugenstilbud: "tilbud",
        nyegodeboeger: "nye",
        signeredeboeger: "signeret",
        laeseklubbenlaeser: "klub",
        skoenlitteratur: "skonlitteratur",
        biografier: "biografier",
        lyrik: "lyrik",
        spaending: "spaending",
        fagboeger: "fagboger",
        boerneboeger: "barn",
        gavekort: "fagboger",
        moleskine: "barn",
      };
      return categoryMappings[urlCategory] || urlCategory;
    }
    return "";
  };

  return (
    <>
      <div className="pageContainer">
        <div className="pageFlex">
          <section className="btn-sec">
            <div className="btn-wrap">
              <section className="knapper">
                <button
                  className="pre"
                  onClick={handlePrevious}
                  disabled={findBookIndex() === 0}
                >
                  <ArrowBackRoundedIcon />
                  <p>Forrige</p>
                </button>
                <button
                  className="next"
                  onClick={handleNext}
                  disabled={findBookIndex() === kategoriList.length - 1}
                >
                  <p>Næste</p>
                  <ArrowForwardRoundedIcon />
                </button>
              </section>
              <section className="deco-iconer">
                <MailOutlineSharpIcon />
                <FaDownload />
              </section>
            </div>
            <span className="line" id="linje"></span>
          </section>
          <Detaljekort
            key={book.id}
            book={book}
            bookDetaljeId={params.bookId}
          />
          <div className="breadcrumbsMobil">
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </>
  );
}
