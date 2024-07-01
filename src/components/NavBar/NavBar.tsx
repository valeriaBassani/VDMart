import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
            {/* <a href={`/login`}>Your Name</a>  questa sintassi non utilizza il router, ma esegue un nuovo richiamo URL */}
            <Link to={`/`}>Home</Link>
            <div className="Actions">
                <Link to={`/favourites`} className="NavLink">Preferiti</Link>
                <Link to={`/messages`} className="NavLink">Messaggi</Link>
                <Link to={`/signUp`} className="Secondary">Crea un annuncio</Link>
                <Link to={`/signUp`} className="link">Registrati</Link>
                <Link to={`/login`} className="Primary">Accedi</Link>
            </div>
        </div>
    )
}