import { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import AdvImages from "../components/Molecules/AdvImages/AdvImages";
import Favourite from "../components/Molecules/Favourite/Favourite";
import UserRate from "../components/Molecules/UserRate/UserRate";
import Dialog from "../components/Template/DialogPopUp/Dialog";
import { AdvData, emptyAds } from "../storesData/products";
import Button from "../components/Atoms/Buttons/Buttons";
import Review from "../components/Template/Review";
import check from "./check-circle 1.svg"
import { CurrentUserContext } from "../App";
import { useTranslation } from "react-i18next";

export default function PurchasedAdvDetails() {

    const { userState } = useContext(CurrentUserContext);
    const { t } = useTranslation();
    const [adv, setAdv] = useState<AdvData>(emptyAds)
    const [isLogin, SetIsLogin] = useState(false)

    useEffect(() => {
        if (userState !== null) {
            SetIsLogin(true)
            const adsString = localStorage.getItem('actualAdv');
            const adv: AdvData = adsString ? JSON.parse(adsString) : emptyAds;
            setAdv(adv)
            //crush
            // const fetchAds = async () => {
            //     try {
            //         const adv = await getActualAdv()
            //         setAdv(adv);
            //     } catch (error) {
            //         console.error("Errore durante il recupero dell'annuncio", (error as Error).message);
            //     }
            // };
            // fetchAds();
        } else {
            SetIsLogin(false)
        }
    }, []);

    const [currentModal, setCurrentModal] = useState("primo");

    const switchModals = (modale: string) => {
        setCurrentModal(modale);
    };

    const [show, setShow] = useState(false)
    const showEpilogue = useCallback(() => {
        setCurrentModal("primo");
        setShow(!show)
    }, [show])
    return (
        <>
            <div className="container-lg mb-5">
                <h4>{t('purchased.title')}</h4>
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
                                    <div className="col-auto">
                                        {isLogin && <Favourite adv={adv} />}
                                    </div>
                                </div>
                                <h4>{adv.title}</h4>
                                <p className="adv__date">{adv.publishData}</p>
                                <h3 className="adv__price">{adv.price},00€</h3>
                            </div>
                            <div className="row">
                                <div className="col d-flex flex-column gap-2 ">
                                    <div className="row">
                                        <div className="col-auto ">
                                            <div className="col d-flex gap-2 adv__shipping">
                                                {adv.shipping && (<>
                                                    <p>{t('activeAds.shippingAvailable')}</p>
                                                    <b>{adv.shippingPrice}€</b>
                                                </>)}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-3 d-flex align-items-center gap-2">
                                        <Button className="btn--primary" wide={true} onClick={showEpilogue} aria-labelledby="scrivi una recensione">Scrivi una recensione</Button>
                                        <UserRate mail={adv.seller} />
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
            {currentModal === 'primo' && <Review show={show} onHide={showEpilogue} article={adv} onSwitch={switchModals} />}
            {currentModal === 'secondo' && <Dialog show={show} onHide={showEpilogue} title={t('dialog.sended')} >
                <div className="row">
                    <div className="col">
                        <img src={check} alt={t('dialog.sended')} />
                    </div>
                </div>
                <div className="row content">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>{t('dialog.sended')}!</label>
                                <p>{t('dialog.review')}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Link to={"/"} className="btn--secondary">Home</Link>
                                <Link to={"/area-riservata"} className="btn--primary">{t('navbar.private-area')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>}
        </>
    )
}