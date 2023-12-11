// denne side er kodet af: Ellen Bager

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


    return(
        <div>
            {loggedIn ? ( // Viser en besked, når brugeren er logget ind
                <>
                    <div style={{ marginTop: "50px", color: "black" }}>Du er logget ind som {username}</div>
                    <button type="button" className="login-submit" onClick={GaaTilLogoutside}>Log ud</button>
                </>
            ) : (
                <div>
                    <h1>Du er ikke logget ind</h1>
                    <Link type="button" className="profilbtn" to="/LoginDialog">Log Ind</Link>
                    <div className="eller">
                        <span></span>
                        <h2>eller</h2>
                        <span></span>
                    </div>
                    <Link type="button" className="profilbtn" to="/OpretDialog">Opret Profil</Link>
                </div>

            )}

        </div>
    )
}