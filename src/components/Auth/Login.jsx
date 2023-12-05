// denne side er kodet af: Ellen Bager

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

export default function Login() {

    // Jeg bruger 'useState' til at oprette to tilstande: email og password
    // Email og password er en værdi der bruges til at logge ind
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)// funktion fra firebase authentication, som logger brugeren ind med indtastet email og password. 
        .then((userCredential) => {
            console.log(userCredential); //Hvis login er en succes, vil "userCredential" indeholde information om brugeren.
        })
        .catch((error) => {
            console.log(error); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
            alert("E-mail eller kodeord er ugyldigt") // giver brugeren en fejl, hvis ikke den kender E-mail eller Kodeord.
        }); 
    }

    return(
        <div className="log-in-container h1">
            <form onSubmit={Login}> {/* Kalder funktionen Login, som logger brugeren ind */}
                <h1>Log Ind</h1>
                <p className="size login-overskrift">Indtast dine informationer i felterne.
                    Hvis du ikke har en bruger, kan du oprette en profil.
                </p>
                <div className="login">
                    <h6 className="size">E-mail</h6>
                    <input
                        className="input"
                        type="email" 
                        placeholder="Indtast din E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input> {/* bruges til at udfylde Email */} 
                    <h6 className="size">Kodeord</h6>
                    <input
                        className="input"
                        type="password" 
                        placeholder="Indtast dit Kodeord" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>  {/* bruges til at udfylde Kodeord */} 
                    <button type="submit" className="login-submit">Log Ind</button>
                     {/* logger ind på sin profil ved hjælp af firebase */} 
                </div>
            </form>
        </div>
    )
}