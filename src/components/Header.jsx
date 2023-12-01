import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import Logo from "../img/kfm-logo.png"
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


//SD
export default function Header() {
    
    const [txtMenuDisplay, setTxtMenuDisplay] = useState('none');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);

    const toggleTxtMenu = () => {
        setTxtMenuDisplay((prevDisplay) => (prevDisplay === 'none' ? 'flex' : 'none'));
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 950);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);


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
                        <button className="burger-menu" onClick={toggleTxtMenu}>
                            <MenuSharpIcon />
                        </button>
                        <div className="txt-menu" style={{ display: isMobile ? txtMenuDisplay : 'flex' }}>
                            <div className="menu-wrap">
                                <a className="menupunkt">Forside</a>
                                <NavLink to="/" className="menupunkt">Køb Bøger</NavLink>
                                <a className="menupunkt">Køb Moleskine</a>
                                <a className="menupunkt">Bøger vi anbefaler</a>
                                <a className="menupunkt info">
                                    <p>Information</p>
                                    <ArrowDropDownIcon/>
                                </a>
                                <a className="menupunkt">Eventkalender</a>
                            </div>
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