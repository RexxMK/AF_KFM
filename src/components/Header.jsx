import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <NavLink to="/">Køb Bøger</NavLink>
            <NavLink to="/favoritside">Dine Favoritter</NavLink>
        </header>
    )
}