import { Authdetaljer } from "../components/Auth/AuthDetaljer";
import Login from "../components/Auth/Login";
import Opret from "../components/Auth/Opret";

export default function Favoritside() {
    return (
        <>
         <h1>Hej favoritter</h1>

         <Login />
         <Opret />
         <Authdetaljer />
        </>
    )
}