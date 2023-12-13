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

    //HTML og CSS af SD
    return (
        <div className="pageContainer">
            <div className="katUnderside katHeading">
                <section className="nonLogged">
                    <h1>Du er ikke logget ind</h1>
                    <p>Log ind for at fortsætte. <br></br><br></br>
                    Hvis du er ny her, må du oprette en bruger for at fortsætte
                    </p>
                    <Link type="button" className="profilbtn" to="/LoginDialog">Log Ind</Link>
                    <Link type="button" className="profilbtn" to="/OpretDialog">Opret Profil</Link>
                </section>
            </div>
        </div>
    )

}