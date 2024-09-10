
import { useEffect, useState } from "react"
import { emptyUser, getActualUser } from "../storesData/users"
import ReviewPreview from "../components/Molecules/ReviewPreview/ReviewPreview"
import { getRatingVote } from "../storesData/account"

export default function AllReview() {
    const [user, setUser] = useState(emptyUser)
    const [totRate, setTotRate] = useState(0)
    useEffect(() => {
        const fetchUserAndRating = async () => {
            try {
                const actualUser = await getActualUser();
                setUser(actualUser);
                const rating = await getRatingVote(actualUser);
                setTotRate(rating);
            } catch (error) {
                console.error("Errore durante il recupero dell'utente o del rating", (error as Error).message);
            }
        };
        fetchUserAndRating();
        console.log(user);

    }, []);

    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>Tutte le recensioni</h4>
                        <div className="row">
                            <div className="col main__section ">
                                <div className="row">
                                    <div className="col d-flex flex-column gap-2">
                                        <div className="row">
                                            <div className="col d-flex justify-content-between">
                                                <div className="col-auto d-flex gap-2 align-items-end">
                                                    <p>Punteggio complessivo: </p><h3 style={{ color: "var(--primary)" }}>{totRate}</h3>
                                                </div>
                                                <label>Tot: {user.review.length} recensioni</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {user.review && user.review.length > 0 ? (
                                        user.review.map((rev) => (
                                            <div className="col d-flex justify-content-center" >
                                                <ReviewPreview rev={rev} />
                                            </div>
                                        ))
                                    ) : <p>nessuna recenione</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}