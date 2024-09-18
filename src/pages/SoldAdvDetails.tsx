import { useState, useEffect } from "react";
import AdvImages from "../components/Molecules/AdvImages/AdvImages";
import { AdvData, emptyAds, getActualAdv, getBuyer } from "../storesData/products";
import { emptyUser } from "../storesData/users";
import { User } from "../storesData/account";
import UserRate from "../components/Molecules/UserRate/UserRate";
import { useTranslation } from "react-i18next";

export default function SoldAdvDetails() {
    const [adv, setAdv] = useState<AdvData>(emptyAds)
    const { t } = useTranslation();
    const [buyer, setBuyer] = useState<User | null>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const adv = await getActualAdv()
                setAdv(adv);
                const buyer = getBuyer(adv)
                if (buyer !== null) {
                    setBuyer(await buyer)
                }
            } catch (error) {
                console.error("Errore durante il recupero dell'annuncio", (error as Error).message);
            }
        };
        fetchAds();
    }, []);


    return (
        <>
            <div className="container-lg mb-5">
                <h4>{t('sold.title')}</h4>
                <div className="main__section mt-2 p-4">
                    <div className="row">
                        <div className="col">
                            <AdvImages adv={adv} />
                        </div>
                        <div className="col d-flex flex-column gap-5 mt-5">
                            <div className="row gap-2">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="adv__category">{adv.category}</h5>
                                    </div>
                                </div>
                                <h4>{adv.title}</h4>
                                <p className="adv__date">{adv.publishData}</p>
                                <h3 className="adv__price">{adv.price},00€</h3>
                                <div className="row">
                                    <div className="col-auto ">
                                        <div className="col d-flex gap-2" id="shipping">
                                            <p>{t('sold.purchased')}</p>
                                            {buyer && (<UserRate mail={buyer.email} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col adv__description">
                            <h4>{t('activeAds.descriptionTitle')}</h4>
                            <p>{adv.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}