import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getFavourites } from "../storesData/account";
import { AdvData } from "../storesData/products";
import AdvPreview from "../components/Organisms/AdvPreview/AdvPreview";

export default function Favourites() {
    const [fav, setFav] = useState<AdvData[]>([])
    useEffect(() => {
        const fetchAds = async () => {
            try {
                setFav(await getFavourites())
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
                                            <label>< abbr title={t('favourites.total')} > Tot: </ abbr > 3 {t('favourites.counter')}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex flex-column gap-3">
                                            {fav && fav.length > 0 ? (
                                                fav.map((fav) => {
                                                    return <AdvPreview adv={fav} />;
                                                })
                                            ) : (
                                                <p>No advertisements available.</p>
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