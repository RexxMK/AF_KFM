import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";


// RK & DK


// Denne komponent er ansvarlig for at vise et hjerteikon, der kan bruges til at tilføje eller fjerne en bog fra en favoritliste. 

// Komponenten modtager et prop "bookid", der bruges til at identificere den specifikke bog.
export default function FavoritHjerte({ bookid }) {

  // isFavorited er en tilstandsvariabel, der indeholder information om hvorvidt bogen er tilføjet til favorit (false = ikke tilføjet).
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {

    // useEffect-hooket henter favoritter fra localStorage og læser dem som JSON-data.
    const favoritListe = JSON.parse(localStorage.getItem("favoritter")) || [];

    // Herefter tjekkes om bookid er inkluderet i listen.
    const isBookFavorited = favoritListe.includes(bookid);

    // Er bookid inkluderet i listen opdateres isFavorited til true, ellers til false.
    setIsFavorited(isBookFavorited);

  // useEffect-hooket køres når bookid ændres.
  }, [bookid]);


  // Funktion til håndtering af klik på hjerteikon.
  const handleIconClick = () => {

    // Tilstanden af isFavorited ændres med ! til det modsatte af hvad den er.
    setIsFavorited(!isFavorited);

    // favoritListe oprettes som et tomt array.
    let favoritListe = [];

    // Hvis der allerede ligger en favoritliste gemt i localStorage, hentes listen.
    if (localStorage.getItem("favoritter")) {
      favoritListe = JSON.parse(localStorage.getItem("favoritter"));
    }

    // Hvis isFavorited er false er bogen ikke tilføjet som favorit. 
    // Så når der klikkes på bogens hjerte, tilføjes bogens id til favoritListe med push-metoden.
    if (!isFavorited) {
      favoritListe.push(bookid);

    // Hvis isFavorited er true, er bogen allerede tilføjet som favorit.
    // Så når der klikkes på bogens hjerte, skal den fjernes fra favoritlisten.
    // Med idexOf-metoden bestemmes bogens indeks. Hvis indekset er forskelligt fra -1 (dvs. bogen blev fundet på listen),
    // fjernes elementet på den fundne indeksplads vha. splice-metoden.
    } else {
      const index = favoritListe.indexOf(bookid);
      if (index !== -1) {
        favoritListe.splice(index, 1);
      }
    }

    // Den opdaterede favoritliste gemmes i localStorage.
    localStorage.setItem("favoritter", JSON.stringify(favoritListe));
  };

  return (
    <div className="favoritHjerte">
      <label className="hjerteIkon" onClick={handleIconClick}>

        {/* Hvis isFavorited er true, skal FaHeart (fyldt) vises, ellers FaRegHeart (outline). */}
        {isFavorited ? <FaHeart /> : <FaRegHeart />}
      </label>
    </div>
  );
}
