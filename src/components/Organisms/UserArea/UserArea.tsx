import { Link } from "react-router-dom";
import ReviewPreview from "../../Molecules/ReviewPreview/ReviewPreview";
import { getRatingVote, User } from "../../../storesData/account";
import { useEffect, useState } from "react";
import "./UserArea.css"

type Props = {
    user: User
    isActual: boolean
}
export default function UserArea({ user, isActual }: Props) {
    const [totRate, setTotRate] = useState(0)
    useEffect(() => {
        const fetchAds = async () => {
            try {
                setTotRate(await getRatingVote(user))
            } catch (error) {
                console.error("Errore durante il recupero dell'altro utente", (error as Error).message);
            }
        };
        fetchAds();
    }, [user])
    return (
        <>
            <div className="col d-flex flex-column gap-3">
                <div className="row">
                    <div className="col">
                        <div className="row gap-2">
                            <h4>Recensioni da altri utenti</h4>
                            <div className="col d-flex gap-2 align-items-end">
                                <p>Punteggio complessivo: </p><h3 style={{ color: "var(--primary)" }}>{totRate}</h3>
                            </div>
                            <div className="col-auto d-flex justify-content-end align-items-end">
                                <p>Tot:{user.review.length} recensioni</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col reviews">
                        {user.review && user.review.length > 0 ? (
                            user.review.slice(0, 2).map((rev) => (
                                <ReviewPreview rev={rev} />
                            ))
                        ) : (
                            <p>Nessuna recensione</p>
                        )}
                    </div>
                </div>
                {user.review.length > 2 && (<div className="row text-end">
                    <div className="col">
                        {isActual ? (<Link to={`/tutte-le-recensioni`} className="link">Vedi tutte</Link>) : (<Link to={`/tutte-le-recensioni-utente`} className="link">Vedi tutte</Link>)}
                    </div>
                </div>)}

            </div >


        </>
    )
}
