import { ReactComponent as Star } from "./star.svg"
import "./ReviewPreview.css"
import { User, UserReview } from "../../../storesData/account"
import { useEffect, useState } from "react"
import { emptyUser, getUserByEmail } from "../../../storesData/users"
type Props = {
    rev: UserReview
}
export default function ReviewPreview({ rev }: Props) {

    const [user, setUser] = useState<User>(emptyUser)
    useEffect(() => {
        const fetchAds = async () => {
            try {
                setUser(await getUserByEmail(rev.reviewer));
            } catch (error) {
                console.error("Errore durante il recupero dell'altro utente", (error as Error).message);
            }
        };
        fetchAds();
    }, [rev.reviewer])

    return (
        <>
            <div className="row review">
                <div className="col-auto">
                    <div className="review__icon">
                        <label>{user.name[0]}</label>
                    </div>
                </div>
                <div className="col d-flex flex-column align-items-start gap-2 py-2">
                    <h4>{user.name} {user.lastName}</h4>
                    <div className="rating__stars">
                        {rev.rating > 0 && (
                            Array.from({ length: rev.rating }, (_, index) => (
                                <Star key={index} fill="#880D1E" />
                            ))
                        )}
                        {rev.rating && (
                            Array.from({ length: 5 - rev.rating }, (_, index) => (
                                <Star />
                            ))
                        )}
                    </div>
                    <div className="review__text">
                        <p>{rev.content} </p>
                    </div>
                    <p className="adv__date">{rev.date}</p>
                </div>
            </div>
        </>
    )
}