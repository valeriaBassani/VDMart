import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
            <Link to={`/`}>Home</Link>
            <div className="Action">
                <Link to={`/favourites`} className="NavLink">Assistenza</Link>
                <Link to={`/messages`} className="NavLink">Privacy</Link>
                <Link to={`/CreateAdv`}>Crea un annuncio</Link>
                <Link to={`/signUp`} className="NavLink">Mappa del sito</Link>
                <Link to={`/login`}>Accesso</Link>
            </div>
            <div>
                <Link to={`/social`}>Social</Link>
            </div>
        </div>

    )
}