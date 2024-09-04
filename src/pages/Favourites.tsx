import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { User } from "../storesData/account";
import AdvPreview from "../components/Organisms/AdvPreview/AdvPreview";
import { emptyUser, getActualUser } from "../storesData/users";

export default function Favourites() {
    const [user, setUser] = useState<User>(emptyUser)
    useEffect(() => {
        const fetchAds = async () => {
            try {
                setUser(await getActualUser())
            } catch (error) {
                console.error("Errore durante il recupero dei preferiti", (error as Error).message);
            }
        };
        fetchAds();
    }, []);
    const { t } = useTranslation();
    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>{t('favourites.title')}</h4>
                        <div className="main">
                            <div className="row">
                                <div className="col d-flex flex-column gap-2">
                                    <div className="row">
                                        <div className="col d-flex">
                                            <label> {t('favourites.total')}: {user.favourites.length}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex flex-column gap-3">
                                            {user.favourites && user.favourites.length > 0 ? (
                                                user.favourites.map((fav, i) => {
                                                    return <AdvPreview key={i} adv={fav} />;
                                                })
                                            ) : (
                                                <p>{t('favourites.noAds')}</p>
                                            )}
                                        </div>
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