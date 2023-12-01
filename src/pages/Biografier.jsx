import React, { useEffect, useState } from "react";


// DK


export default function Biografier() {


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



    const bigrafierListe = books.filter((book) => book.kategori.includes("biografier"));



    
}