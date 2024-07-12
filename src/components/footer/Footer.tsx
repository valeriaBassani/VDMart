import { Link } from "react-router-dom";
import './Footer.css';
import Icon from "../Icon";
import logo from './logo.svg';

export default function Footer() {
    return (
        <div className="Footer">
            <Link to={`/`}><Icon url={logo} /></Link>
            <div className="Action">
                <Link to={`/assistenza`} className="NavLink">Assistenza</Link>
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