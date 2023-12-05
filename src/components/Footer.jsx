// denne side er kodet af: Ellen Bager

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Dk from "../assets/dk.png";
import Jcb from "../assets/jcb.png";
import Kort1 from "../assets/kort1.png";
import Kort2 from "../assets/kort2.png";
import Mastercard from "../assets/mastercard.png";
import Mobilepay from "../assets/mobilepay.png";
import Visa from "../assets/visa.png";
import Visa1 from "../assets/visa1.png";

export default function Footer() {
    return(
        <>
            <div className="footer">
                <div className="text">
                    <p style={{fontWeight:"bold"}}>Kristian F. Møller</p>
                    <p>Store Torv 5</p>
                    <p>8000 Aarhus C</p>
                    <p>Telefonnr.: 86130699</p>
                    <p>E-mail: kfm@kfm.dk</p>
                    <p>CVR-nummer: 13901880</p>
                    <p>Sitemap</p> 
                </div>
                <a href="https://www.facebook.com/KFMboghandleren" className="social"><FaFacebookSquare /> Facebook</a>
                <a href="https://www.instagram.com/kfmboghandleren/" className="social"><FaInstagram /> Instagram</a>
                <div>
                    <img src={Dk} alt="" className="betaling"/>
                    <img src={Visa} alt="" className="betaling"/>
                    <img src={Mastercard} alt="" className="betaling"/>
                    <img src={Visa1} alt="" className="betaling"/>
                    <img src={Jcb} alt="" className="betaling"/>
                    <img src={Kort2} alt="" className="betaling"/>
                    <img src={Kort1} alt="" className="betaling"/>
                    <img src={Mobilepay} alt="" className="betaling"/>
                </div>
            </div>
        </>
    );
}