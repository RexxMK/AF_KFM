// denne side er kodet af: Ellen Bager

import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Logout() {
    useEffect(() => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Bruger er logget ud");
        }).catch((error) => {
            console.log("Fejl ved log ud");
        });

    }, []);

    return (
        <div className="pageContainer">
            <div className="katUnderside katHeading">
                <h1>Du er logget ud.</h1>
                <Link type="button" className="profilbtn" to="/LoginDialog">Log Ind</Link>
                    <div className="eller">
                        <span></span>
                        <h2>eller</h2>
                        <span></span>
                    </div>
                <Link type="button" className="profilbtn" to="/OpretDialog">Opret Profil</Link>
            </div>
        </div>
    )

}