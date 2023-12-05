// denne side er kodet af: Ellen Bager

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

export default function Opret() {

    // Jeg bruger 'useState' til at oprette tre tilstande: email, password og name
    // Email og password er en værdi der bruges til at logge ind ved hjælp af firebase
    // Name er en værdi vi bruger til at give brugeren feedback på en mere personlig måde, ved hjælp af navn. 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const Opret = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)// funktion fra firebase authentication, som opretter en profil med brugernes indtastede email og password. 
        .then((userCredential) => {
            console.log(userCredential); //Hvis oprettelsen er en succes, vil "userCredential" indeholde information om den nye bruger. 
        })
        .catch((error) => {
            console.log(error); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
            alert("Navn, E-mail eller Kodeord er ugyldigt.") // giver brugeren en fejl, hvis ikke felterne er udfyldt ordentligt
        }); 
    }

    const getName = (e) => {
        localStorage.setItem("name", JSON.stringify(name)); //Gemmer "name" i localStorage
    }

    return(
        <div className="log-in-container">
            <form onSubmit={Opret}> {/* kalder functionen Opret, som opretter en profil */}
                <h1>Opret Profil</h1>
                <p className="size login-overskrift">Indtast dine informationer i felterne.</p>
                <span className="line"></span>
                <div className="login">
                    <h6 className="size">Navn</h6>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Indtast Navn..."
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    /> {/* bruges til at udfylde name */} 
                    <h6 className="size">E-mail</h6>
                    <input
                        className="input"
                        type="email" 
                        placeholder="Indtast E-mail..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> {/* bruges til at udfylde Email */} 
                    <h6 className="size">Kodeord</h6>
                    <input
                        className="input"
                        type="password" 
                        placeholder="Indtast Kodeord..." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> {/* bruges til at udfylde Kodeord */} 
                    <button type="submit" className="login-submit" onClick={getName}>Opret Profil</button> 
                    {/* Opretter en profil med firebase. Kalder funktion "getName" som gemmer name i localstorage */} 
                </div>
            </form>
        </div>
    )
}