// denne side er kodet af: Ellen Bager

import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../Firebase";

export default function Opret() {

    // Jeg bruger 'useState' til at oprette fire tilstande: email, password, confirmPassword name og loggedIn
    // Email og password er en værdi der bruges til at logge ind ved hjælp af firebase
    // ConfirmPassword er en værdi som sikre at brugeren opretter sin profil med den rigtige password
    // Name er en værdi vi bruger til at give brugeren feedback på en mere personlig måde, ved hjælp af navn.
    // LogedIn er en værdi vi bruger til at give brugeren besked om at de er logget ind 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true); //Viser "loggedIn" hvis brugeren er logget ind. 
                setName(user.email);
            } else {
                setLoggedIn(false); // viser ikke "loggedIn", hvis brugeren ikke er logget ind. Viser derfor "Opret profil"
            }
        });

        return () => unsubscribe();
    }, []); // Dette kode gør at "loggedIn" altid vil blive vist, hvis brugeren er logget ind

    const Opret = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Kodeordene stemmer ikke overens.");
            return;
        } // Giver brugeren besked hvis ikke man har skrevet det samme kodeord
        createUserWithEmailAndPassword(auth, email, password)// funktion fra firebase authentication, som opretter en profil med brugernes indtastede email og password. 
            .then((userCredential) => {
                console.log(userCredential); //Hvis oprettelsen er en succes, vil "userCredential" indeholde information om den nye bruger. 
                setLoggedIn(true);
            })
            .catch((error) => {
                console.log(error); // giver en fejl i consollen hvis ikke email og password passer med en bruger oprettet i firebase
                alert("Navn, E-mail eller Kodeord er ugyldigt.") // giver brugeren en fejl, hvis ikke felterne er udfyldt ordentligt
            });
    };

    const getName = (e) => {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
        localStorage.setItem("name", JSON.stringify(name)); //Gemmer "name" i localStorage
        setName(formattedName);
    };

    return (
        <div className="log-in-container" style={{ textAlign: "center" }}>
            {loggedIn ? ( // Viser en besked, når brugeren er logget ind
                <>
                    <p className="loggedin">Du er logget ind som {name}</p>
                    <button className="login-submit" onClick={() => setLoggedIn(false)}>Log ud</button>
                </>
            ) : (
                <form onSubmit={Opret}> {/* kalder functionen Opret, som opretter en profil */}
                    <h1>Opret Profil</h1>
                    <p className="size login-overskrift">Indtast dine informationer i felterne.</p>
                    <div className="login">
                        <span className="line"></span>
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
                            placeholder="Indtast kodeord..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> {/* bruges til at udfylde Kodeord */}
                        <h6 className="size">Gentag Kodeord</h6>
                        <input
                            className="input"
                            type="password"
                            placeholder="Gentag kodeord..."
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        /> {/* bruges til at udfylde Gentag Kodeord, så det er det rigtige kkodeord der bliver brugt */}
                        <button type="submit" className="login-submit" onClick={getName}>Opret Profil</button>
                        {/* Opretter en profil med firebase. Kalder funktion "getName" som gemmer name i localstorage */}
                    </div>
                </form>
            )}
        </div>
    )
}