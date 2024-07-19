import { Link } from "react-router-dom";
import './Footer.css';
import Icon from "../../Atoms/Icon";
import logo from './logo.svg';

export default function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-4">
                    <Link to={`/`}><Icon url={logo} /></Link>
                </div>
                <div className="col-4 d-flex flex-column gap-4">
                    <Link to={`/assistenza`} className="navbar__link">Assistenza</Link>
                    <Link to={`/messages`} className="navbar__link">Privacy</Link>
                    <Link to={`/CreateAdv`} className="navbar__link">Crea un annuncio</Link>
                    <Link to={`/signUp`} className="navbar__link">Mappa del sito</Link>
                    <Link to={`/login`} className="navbar__link">Accedi</Link>
                </div>
                <div className="col-4 text-end">
                    <Link to={`/social`} className="navbar__link">Social</Link>
                </div>
            </div>
        </div>

    )
}