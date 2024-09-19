import { Link } from "react-router-dom";
import ReviewPreview from "../../Molecules/ReviewPreview/ReviewPreview";
import { getRatingVote, User } from "../../../storesData/account";
import { useEffect, useState } from "react";
import "./UserArea.css"
import { useTranslation } from "react-i18next";

type Props = {
    user: User
    isActual: boolean
}
export default function UserArea({ user, isActual }: Props) {
    const { t } = useTranslation();
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
                            <h4>{t('reviews.title')}</h4>
                            <div className="col d-flex gap-2 align-items-end">
                                <p>{t('reviews.overallScore')} </p><h3 style={{ color: "var(--primary)" }}>{totRate}</h3>
                            </div>
                            <div className="col-auto d-flex justify-content-end align-items-end">
                                <p>Tot: {user.review.length} {t('reviews.totalReviews')}</p>
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
                            <p>{t('reviews.noReviews')}</p>
                        )}
                    </div>
                </div>
                {user.review.length > 2 && (<div className="row text-end">
                    <div className="col">
                        {isActual ? (<Link to={`/tutte-le-recensioni`} className="link">{t('reviews.seeAllReviews')}</Link>) : (<Link to={`/tutte-le-recensioni-utente`} className="link">{t('reviews.seeAllReviews')}</Link>)}
                    </div>
                </div>)}
            </div >
        </>
    )
}
