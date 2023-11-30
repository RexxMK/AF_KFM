import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

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

  return (
    <div className="bogkortContainer">
      <div className="bogkortImg">
        <img src={book.billede} alt="Billede af bogcover" />
      </div>
      <div className="bogkortTitel">
        <h2>
          {book.forfatter}, {book.titel}
        </h2>
      </div>
      <div className="bogkortFooter">
        <div className="bogkortFlex">
          <div className="bogkortPris">
            <h2>{book.pris}</h2>
            <p>(inkl. moms)</p>
          </div>
          <div className="bogkortLike"></div>
        </div>
        <div className="bogkortFlex">
          <div
            className="whiteBox"
            style={{
              backgroundColor: "var(--white)",
              color: "var(--darkgrey)",
              width: "51px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              marginLeft: "15px",
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
                  textAlign: "center",
                }}
              />
            ) : (
              <span>{number}</span>
            )}
          </div>
          <div className="bogkortKurv">
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
              <div
                style={{
                  backgroundColor: "var(--black)",
                  fontSize: "12.25px",
                  height: "32px",
                  width: "90px",
                  color: "var(--white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Køb
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
