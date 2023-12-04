import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../Firebase";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        }); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
    }

    return(
        <div className="log-in-container">
            <form onSubmit={Login}>
                <h1>Log ind</h1>
                <p>Indtast dine informationer i felterne.
                    Hvis du ikke har en bruger, kan du oprette en profil.
                </p>
                <div className="login">
                    <input
                        type="email" 
                        placeholder="Indtast din E-mail" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                    <input
                        type="password" 
                        placeholder="Indtast dit kodeord" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button type="submit">Log ind</button>
                </div>
            </form>
        </div>
    )
}