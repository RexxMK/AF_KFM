// denne side er kodet af: Ellen Bager

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

export default function LoginDialog() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)// funktion fra firebase authentication, som logger brugeren ind med indtastet email og password. 
            .then((userCredential) => {
                console.log(userCredential); //Hvis login er en succes, vil "userCredential" indeholde information om brugeren.
                navigate("/");
            })
            .catch((error) => {
                console.log(error); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
                alert("E-mail eller kodeord er ugyldigt") // giver brugeren en fejl, hvis ikke den kender E-mail eller Kodeord.
            });
    }

    return (
        <section>
            <div className="pageContainer">
          <div className="katUnderside katHeading">
            <div className="log-in-container">
            <form onSubmit={Login}>
                <h1>Log Ind</h1>
                <p className="size login-overskrift">Indtast dine informationer i felterne. <br />
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
                    </input>
                    <h6 className="size">Kodeord</h6>
                    <input
                        className="input"
                        type="password"
                        placeholder="Indtast dit Kodeord"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                    <button type="submit" className="login-submit">Log Ind</button>
                </div>
            </form >
            </div>
            </div>
            </div>
        </section>
    )
}