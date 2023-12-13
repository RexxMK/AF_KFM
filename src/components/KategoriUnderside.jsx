// RK

// Komponenten modtager forskellige props som headingText, katText, antalText, books og setBooks.
// På den måde kan komponenten nemt anvendes på alle kategori sider, og teksten kan nemt justeres
export default function KategoriUnderside({
  headingText,
  katText,
  antalText,
  books,
  setBooks,
}) {
  // Funktionen 'sortBooks' tager imod en egenskab (property) og sorterer bøgerne baseret på den valgte egenskab.
  // Denne funktion bruges som en event handler for ændring af <select>-elementet.
  const sortBooks = (property) => {
    const selectedOption = property.target.value;

    let sortedBooks = [...books];

    // Når <select>-elementet ændres, kaldes sortBooks-funktionen og sorterer bøgerne baseret på den valgte egenskab:
    // titel, pris (lav eller høj), dato eller mest solgte.
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
      // Dato er ikke en egenskab vi har tildelt bøgerne i Firebase, så den sortering virker ikke
      case "dato":
        sortedBooks.sort((a, b) => new Date(a.dato) - new Date(b.dato));
        break;
      // Antal salg af hver bog er ikke data vi har, så den sortering virker ikke
      case "mostSold":
        sortedBooks.sort((a, b) => b.sold - a.sold);
        break;
      default:
        break;
    }

    // Efter sorteringen opdateres bøgerne ved at kalde setBooks med den sorterede liste af bøger.
    setBooks(sortedBooks);
  };

  return (
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
  );
}
