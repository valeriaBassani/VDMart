import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            <Link to={`/home`}>Home</Link>
            <div className="Action">
                <Link to={`/favourites`} className="NavLink">Assistenza</Link>
                <Link to={`/messages`} className="NavLink">Privacy</Link>
                <Link to={`/CreateAdv`} className="NavLink">Crea un annuncio</Link>
                <Link to={`/signUp`} className="NavLink">Mappa del sito</Link>
                <Link to={`/login`} className="NavLink">Accedi</Link>
            </div>
            <div>
                <Link to={`/social`} className="NavLink">Social</Link>
            </div>
        </div>

    )
}