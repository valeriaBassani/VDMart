import { Link } from "react-router-dom";
import './NavBar.css';
import { useState } from "react";
import Icon from "../Icon";
import heart from './heart.svg';
import message from './message.svg';
import plus from './plus.svg';
import logo from './logo.svg';

export default function NavBar() {
    const [visible, setVisible] = useState(false);

    const handleClick = (e: React.SyntheticEvent): void => {
        setVisible(!visible);
    };

    return (
        <>
            <div className="container-fluid p-4 NavBar">
                <div className="row">
                    <div className="col-1 d-flex align-items-center">
                        <Link to={`/home`}><Icon url={logo} /></Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end gap-4">
                        <Link to={`/favourites`} className="NavLink"><Icon url={heart} />Preferiti</Link>
                        <Link to={`/messages`} className="NavLink"><Icon url={message} />Messaggi</Link>
                        <Link to={`/create`} className="Secondary"><Icon url={plus} />Crea un annuncio</Link>
                        <Link to={`/signUp`} className="link">Registrati</Link>
                        <Link to={`/login`} className="Primary">Accedi</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-4 Hamburger">
                <div className="row mb-3">
                    <div className="col-1 d-flex align-items-center">
                        <Link to={`/home`}><Icon url={logo} /></Link>
                    </div>
                    <div className="col d-flex justify-content-end gap-3">
                        <Link to={`/create`} className="Secondary"><Icon url={plus} />Crea un annuncio</Link>
                        <Link to={`/login`} className="Primary">Accedi</Link>
                        <button className="Icon" onClick={handleClick}></button>
                    </div>
                </div>
                <div className={`row text-end justify-content-end ${visible ? 'Visible' : 'Invisible'}`}>
                    <div className="col d-flex justify-content-end">
                        <div className={" More"}>
                            <Link to={`/favourites`} className="NavLink"><Icon url={heart} />Preferiti</Link>
                            <Link to={`/messages`} className="NavLink"><Icon url={message} />Messaggi</Link>
                            <Link to={`/signUp`} className="link">Registrati</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-4 Hamburger Mobile">
                <div className="row mb-3">
                    <div className="col-1 d-flex align-items-center">
                        <Link to={`/home`}><Icon url={logo} /></Link>
                    </div>
                    <div className="col d-flex justify-content-end gap-1">
                        <Link to={`/login`} className="Secondary">Accedi</Link>
                        <button className="Icon" onClick={handleClick}></button>
                    </div>
                </div>
                <div className={`row text-end justify-content-end ${visible ? 'Visible' : 'Invisible'}`}>
                    <div className="col d-flex justify-content-end">
                        <div className={" More"}>
                            <Link to={`/create`} className="Secondary"><Icon url={plus} />Crea un annuncio</Link>
                            <Link to={`/favourites`} className="NavLink"><Icon url={heart} />Preferiti</Link>
                            <Link to={`/messages`} className="NavLink"><Icon url={message} />Messaggi</Link>
                            <Link to={`/signUp`} className="link">Registrati</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}