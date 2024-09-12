
import { useEffect, useState } from "react"
import { emptyUser, getOtherUser, getUserByEmail } from "../storesData/users"
import ReviewPreview from "../components/Molecules/ReviewPreview/ReviewPreview"
import { getRatingVote } from "../storesData/account"

export default function AllReviewOtherUser() {
    const [user, setUser] = useState(emptyUser)
    const [totRate, setTotRate] = useState(0)
    useEffect(() => {
        const fetchUserAndRating = async () => {
            try {
                const userMail = await getOtherUser();
                const otherUser = getUserByEmail(userMail)
                setUser(await otherUser);
                const rating = await getRatingVote(await otherUser);
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
                                    <div className="col reviews" >
                                        {user.review && user.review.length > 0 ? (
                                            user.review.map((rev) => (
                                                <ReviewPreview rev={rev} />
                                            ))
                                        ) : <p>nessuna recenione</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}