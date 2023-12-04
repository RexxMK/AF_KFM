// denne side er kodet af: Ellen Bager

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

export default function Opret() {

    // Jeg bruger 'useState' til at oprette to tilstande: email og password
    // Email og password er en værdi der bruges til at logge ind
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Opret = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)// funktion fra firebase authentication, som opretter en profil med brugernes indtastede email og password. 
        .then((userCredential) => {
            console.log(userCredential); //Hvis oprettelsen er en succes, vil "userCredential" indeholde information om den nye bruger. 
        })
        .catch((error) => {
            console.log(error);
        }); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
    }

    return(
        <div className="log-in-container">
            <form onSubmit={Opret}> {/* kalder functionen Opret, som opretter en profil */}
                <h1>Opret Profil</h1>
                <p className="size">Indtast dine informationer i felterne.</p>
                <div className="login">
                    <h6 className="size">Navn</h6>
                    <h6 className="size">E-mail</h6>
                    <input
                        className="input"
                        type="email" 
                        placeholder="Indtast E-mail..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <h6 className="size">Kodeord</h6>
                    <input
                        className="input"
                        type="password" 
                        placeholder="Indtast kodeord..." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button type="submit" className="login-submit">Opret Profil</button>
                </div>
            </form>
        </div>
    )
}