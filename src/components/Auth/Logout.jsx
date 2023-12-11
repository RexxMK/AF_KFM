import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";

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
        <h2>Du er logget ud.</h2>
    )

}