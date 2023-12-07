import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import FavoritHjerte from "./FavoritHjerte";
import { useNavigate } from "react-router-dom";

// RK

export default function Bogkort({ book }) {
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

  // DK & RK
  let favoritListe = [];

  // Hvis der allerede er en favoritliste i localstorage, så indlæses den.
  if (localStorage.getItem("favoritter")) {
    favoritListe = JSON.parse(localStorage.getItem("favoritter"));
  }

  // DK
  // Når der klikkes på en bogs billede eller forfatter/titel, skal brugeren navigeres til detaljesiden for den pågældende bog.
  const navigate = useNavigate();

  function handleClick() {
    navigate(`seBog/${book.id}`);
  }

  // DK & RK
  return (
    <div className="bogkortContainer">
      <div className="bogkortLike">
        <FavoritHjerte bookid={book.id} />
      </div>
      <div className="bogkortBog">
        <div className="bogkortImg" onClick={handleClick}>
          <img src={book.billede} alt="Billede af bogcover" />
        </div>
      </div>
      <div className="bogkortTitel" onClick={handleClick}>
        <h2>
          {book.forfatter}, {book.titel}
        </h2>
      </div>
      <div className="bogkortFooter">
        <div className="bogkortFlex">
          <div className="bogkortPris">
            <h2>{book.pris} DKK</h2>
            <p>(inkl. moms)</p>
          </div>
        </div>
        <div className="bogkortFlex">
          <div className="whiteBox" onClick={handleBoxClick}>
            {isEditing ? (
              <input
                type="number"
                value={number}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoFocus
              />
            ) : (
              <span>{number}</span>
            )}
          </div>
          <div className="bogkortKurv">
            <button>
              <div className="bogkortKurvIkon">
                <FaCartShopping className="bogkortFaCart" />
              </div>
              <div className="bogkortKurvKoeb">Køb</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
