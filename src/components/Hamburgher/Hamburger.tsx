import { Link } from "react-router-dom"
import "./Hamburger.css"

type Props = {
    className: string;
}
export default function Hamburger({ className }: Props) {
    return (
        <>
            <div className={className}>
            </div>
            <div className="container-fluid p-4 NavBar">
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <Link to={`/home`}>Home</Link>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end gap-4">
                        <Link to={`/favourites`} className="NavLink">Preferiti</Link>
                        <Link to={`/messages`} className="NavLink">Messaggi</Link>
                        <Link to={`/signUp`} className="Secondary">Crea un annuncio</Link>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-end gap-4">
                        <Link to={`/signUp`} className="link">Registrati</Link>
                        <Link to={`/login`} className="Primary">Accedi</Link>
                    </div>
                </div>
            </div>
        </>
    )
}