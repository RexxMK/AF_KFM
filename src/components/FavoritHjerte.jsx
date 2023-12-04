import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// RK & DK

export default function FavoritHjerte({ bookid }) {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favoritListe = JSON.parse(localStorage.getItem("favoritter")) || [];
    const isBookFavorited = favoritListe.includes(bookid);
    setIsFavorited(isBookFavorited);
  }, [bookid]);

  const handleIconClick = () => {
    setIsFavorited(!isFavorited);

    let favoritListe = [];

    if (localStorage.getItem("favoritter")) {
      favoritListe = JSON.parse(localStorage.getItem("favoritter"));
    }

    if (!isFavorited) {
      favoritListe.push(bookid);
    } else {
      const index = favoritListe.indexOf(bookid);
      if (index !== -1) {
        favoritListe.splice(index, 1);
      }
    }

    localStorage.setItem("favoritter", JSON.stringify(favoritListe));
  };

  return (
    <div className="favoritHjerte">
      <label className="hjerteIkon" onClick={handleIconClick}>
        {isFavorited ? <FaHeart /> : <FaRegHeart />}
      </label>
    </div>
  );
}
