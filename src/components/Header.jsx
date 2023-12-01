import { NavLink } from "react-router-dom";
import Logo from "../img/kfm-logo.png"
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
    return (
            <header>
                <section className="sog-wrap">
                    <div className="sog">
                        <form>
                            <input type="search" placeholder="Indtast søgning"/>
                            <button>Søg</button>
                        </form>
                    </div>
                </section>
                <section className="logo">
                    <div className="logo-wrap">
                        <img src={Logo}/>
                    </div>
                </section>
                <nav>
                    <div className="header-wrap">
                        <div className="txt-menu">
                            <a className="menupunkt">Forside</a>
                            <NavLink to="/" className="menupunkt">Køb Bøger</NavLink>
                            <a className="menupunkt">Køb Moleskine</a>
                            <a className="menupunkt">Bøger vi anbefaler</a>
                            <a className="menupunkt icon info">
                                <p>Information</p>
                                <ArrowDropDownIcon/>
                            </a>
                            <a className="menupunkt">Eventkalender</a>
                        </div>
                        <div className="icon-menu">
                            <NavLink to="/favoritside" className="menupunkt icon">
                                <p>Dine Favoritter</p>
                                <FavoriteSharpIcon/>
                            </NavLink>
                            <a className="menupunkt icon">
                                <p>Min Profil</p>
                                <PersonSharpIcon/>
                            </a>
                            <a className="menupunkt icon kurv">
                                <p>Din indkøbskurv er tom</p>
                                <div className="kurv-wrap"><ShoppingCartSharpIcon/></div>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
    )
}