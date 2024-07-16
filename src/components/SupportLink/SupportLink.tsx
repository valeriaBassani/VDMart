import { Link } from "react-router-dom";

export default function SupportLink() {
    return (
        <>
            <div className="breadcrumb" style={{ color: "black" }}>
                <div className="row">
                    <div className="col d-flex gap-1">
                        <p>Hai bisogno di aiuto?</p><Link to={`/assistenza`} className="link"> contatta l'Assistenza</Link>
                    </div>
                </div>
            </div>
        </>
    )
}