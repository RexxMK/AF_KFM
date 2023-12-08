import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// RK
export default function KategoriUnderside({
  headingText,
  katText,
  antalText,
  books,
  setBooks,
}) {
  const [sortBy, setSortBy] = useState(false);

  const sortBooks = (property) => {
    const selectedOption = property.target.value;

    let sortedBooks = [...books];

    switch (selectedOption) {
      case "titel":
        sortedBooks.sort((a, b) => a.titel.localeCompare(b.titel));
        break;
      case "prisL":
        sortedBooks.sort((a, b) => a.pris - b.pris);
        break;
      case "prisH":
        sortedBooks.sort((a, b) => b.pris - a.pris);
        break;
      case "dato":
        sortedBooks.sort((a, b) => new Date(a.dato) - new Date(b.dato));
        break;
      case "mostSold":
        sortedBooks.sort((a, b) => b.mestKøbt - a.mestKøbt);
        break;
      default:
        break;
    }

    setBooks(sortedBooks);
  };

  return (
    <div>
      <div className="katHeading">
        <h1>{headingText}</h1>
        <p>{katText}</p>
        <div className="katSort">
          <p>{antalText}</p>
          <div className="katSortKnap">
            <p>Sorter efter:</p>
            <div className="katSortField">
              <select onChange={sortBooks} defaultValue="mostSold">
                <option value="titel">Titel</option>
                <option value="prisL">Pris (lav)</option>
                <option value="prisH">Pris (høj)</option>
                <option value="dato">Dato</option>
                <option value="mostSold">Mest købte</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
