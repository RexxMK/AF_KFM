// denne side er kodet af: EB

import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    // Jeg bruger 'useState' til at oprette tre tilstande: email, password og loggedIn
    // Email og password er en værdi der bruges til at logge ind
    // logedIn er en værdi som bruges til at give brugeren besked om at de er logget ind
    const [loggedIn, setLoggedIn] = useState(false); 
    const [username, setUSername] = useState("");
    const navigate = useNavigate();

    useEffect(() => { 
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                setUSername(user.email);
            } else {
                setLoggedIn(false);
            }
        });

    }, [setLoggedIn]); // Dette kode gør at "loggedIn" altid vil blive vist, hvis brugeren er logget ind

    function GaaTilLogoutside() {
        navigate("/logout");
    }

    //HTML og CSS af SD
    return(
        <div className="pageContainer">
          <div className="katUnderside katHeading">
          <div className="log-in-container">
            {loggedIn ? ( // Viser en besked, når brugeren er logget ind
                <>
                    <div className="welcome" style={{ marginTop: "50px", color: "black" }}>
                        <h1>Velkommen til din profil </h1>
                        <h2>Du er logget ind som {username}</h2>
                        <p>Her kan du få et overblik over dine tidligere og aktuelle ordre. <br></br>
                        Har du brug for at lukke din konto, har du muligheden for at slette din profil. <br></br>
                        Ellers kan du sikkert forlade din session ved at logge ud.</p>
                    </div>
                    <a className="mock-btn">Dine Ordrer</a>
                    <a className="mock-btn">Slet Profil</a>
                    <button type="button" className="login-submit" onClick={GaaTilLogoutside}>Log ud</button>
                </>
            ) : (
                <section className="nonLogged">
                    <h1>Du er ikke logget ind</h1>
                    <p>Log ind for at fortsætte. <br></br><br></br>
                    Hvis du er ny her, må du oprette en bruger for at fortsætte
                    </p>
                    <Link type="button" className="profilbtn" to="/LoginDialog">Log Ind</Link>
                    <Link type="button" className="profilbtn" to="/OpretDialog">Opret Profil</Link>
                </section>

            )}
        </div>
        </div>
        </div>
    )
}