import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import { auth } from "../../Firebase"

export const Authdetaljer = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null)
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
};