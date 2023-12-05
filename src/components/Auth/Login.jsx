// denne side er kodet af: Ellen Bager

import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase";

export default function Login() {

    // Jeg bruger 'useState' til at oprette tre tilstande: email, password og loggedIn
    // Email og password er en værdi der bruges til at logge ind
    // logedIn er en værdi som bruges til at give brugeren besked om at de er logget ind
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); 

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true); //Viser "loggedIn" hvis brugeren er logget ind. 
            } else {
                setLoggedIn(false); // viser ikke "loggedIn", hvis brugeren ikke er logget ind. Viser derfor "Log Ind"
            }
        });

        return () => unsubscribe();
    }, []); // Dette kode gør at "loggedIn" altid vil blive vist, hvis brugeren er logget ind

    const Login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)// funktion fra firebase authentication, som logger brugeren ind med indtastet email og password. 
        .then((userCredential) => {
            console.log(userCredential); //Hvis login er en succes, vil "userCredential" indeholde information om brugeren.
            setLoggedIn(true);
        })
        .catch((error) => {
            console.log(error); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
            alert("E-mail eller kodeord er ugyldigt") // giver brugeren en fejl, hvis ikke den kender E-mail eller Kodeord.
        }); 
    }


    return(
        <div className="log-in-container h1">
            {loggedIn ? ( // Viser en besked, når brugeren er logget ind
                <>
                    <p className="loggedin">Du er logget ind som {name}</p>
                    <button className="login-submit" onClick={() => setLoggedIn(false)}>Log ud</button>
                </>
            ) : (
                <form onSubmit={Login}> {/* Kalder funktionen Login, som logger brugeren ind */}
                    <h1>Log Ind</h1>
                    <p className="size login-overskrift">Indtast dine informationer i felterne.
                        Hvis du ikke har en bruger, kan du oprette en profil.
                    </p>
                    <div className="login">
                    <span className="line"></span>
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
            )}
        </div>
    )
}