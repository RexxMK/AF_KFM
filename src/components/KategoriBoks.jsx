import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"


// DK


export default function KategoriBoks() {


    const [books, setBooks] = useState([]);
    const [isBooks, setIsBooks] = useState(true);

    useEffect(() => {
        async function getBooks() {
            const url = "https://advanced-frontend-71bba-default-rtdb.europe-west1.firebasedatabase.app/books.json";

            const response = await fetch(url);
            const data = await response.json();

            if (data !== null) {
                const booksArray = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setBooks(booksArray);
            } else {
                setIsBooks(false);
            }
        }
        getBooks();
    }, []);





    return (

        <section className="kategoriBoks">

            <p className="kategoriBoksTitel">Kategorier</p>

            <div className="kategoriBoksLinks">
                <NavLink to="mustread" className={kategoriPunkt}>Must Read</NavLink>
                <NavLink to="ugenstilbud" className={kategoriPunkt}>Ugens tilbud</NavLink>
                <NavLink to="nyegodeboeger" className={kategoriPunkt}>Nye gode bøger</NavLink>
                <NavLink to="signeredeboger" className={kategoriPunkt}>Signerede bøger</NavLink>
                <NavLink to="laeseklubbenlaeser" className={kategoriPunkt}>KFM læseklubberne læser</NavLink>
                <NavLink to="skønlitteratur" className={kategoriPunkt}>Skønlitteratur</NavLink>
                <NavLink to="biografier" className={kategoriPunkt}>Biografier</NavLink>
                <NavLink to="lyrik" className={kategoriPunkt}>Lyrik</NavLink>
                <NavLink to="spaending" className={kategoriPunkt}>Spænding</NavLink>
                <NavLink to="fagboeger" className={kategoriPunkt}>Fagbøger</NavLink>
                <NavLink to="boerneboeger" className={kategoriPunkt}>Børnebøger</NavLink>
                <NavLink to="gavekort" className={kategoriPunkt}>Gavekort</NavLink>
                <NavLink to="moleskine" className={kategoriPunkt}>Moleskine notesbøger og kalendere</NavLink>
            </div>

        </section>



    )
}