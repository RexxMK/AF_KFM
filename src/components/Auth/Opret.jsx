import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

export default function Opret() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Opret = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        }); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
    }

    return(
        <div className="log-in-container">
            <form onSubmit={Opret}>
                <h1>Opret Profil</h1>
                <p>Indtast dine informationer i felterne.</p>
                <div className="login">
                    <input
                        type="email" 
                        placeholder="Indtast E-mail..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        type="password" 
                        placeholder="Indtast kodeord..." 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button type="submit">Opret Profil</button>
                </div>
            </form>
        </div>
    )
}