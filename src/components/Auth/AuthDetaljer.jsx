// denne side er kodet af: Ellen Bager

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import { auth } from "../../Firebase"

export const Authdetaljer = () => {
    // Jeg bruger 'useState' til at oprette en tilstand: authUser
    // authUser er en værdi der bruges til at opdatere værrdien
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {// lytter efter om det sker ændringer i brugerens autentificeringsstatus
            if (user) {
                setAuthUser(user);// opdatere værdien af "authuser" når der er en bruger logget ind
            } else {
                setAuthUser(null)// opdatere værdien af "authuser" til "null" når der ikke er en bruger logget ind
            }
        });

        return () => {
            listen();
        }
    }, []);

    const Logud = () => {
        signOut(auth).then(() =>{
            console.log('Logget ud')
        }).catch(error => console.log(error))
    }

    return <div>{authUser ? <><p>{`Logget ind som ${authUser.email}`}</p><button onClick={Logud}>Log ud</button></> : <p>Logget ud</p>}</div>;
    //Hvis "authUser" er sand (ikke null), vises en hilsen og en knap til at logge ud. Hvis "authUser" er falsk (null), vises en besked om, at brugeren er logget ud.
};