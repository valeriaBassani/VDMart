import { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import AdvImages from "../../components/Molecules/AdvImages/AdvImages";
import Favourite from "../../components/Molecules/Favourite/Favourite";
import UserRate from "../../components/Molecules/UserRate/UserRate";
import Checkout from "../../components/Template/DialogPopUp/Checkout";
import Dialog from "../../components/Template/DialogPopUp/Dialog";
import Epilogue from "../../components/Template/DialogPopUp/Epilogue";
import { AdvData, emptyAds, getActualAdv } from "../../storesData/products";
import Button from "../../components/Atoms/Buttons/Buttons";
import check from "./check-circle 1.svg"
import "./AdvDetails.css"
import { useTranslation } from "react-i18next";
import { CurrentUserContext } from "../../App";


type Props = {
    details?: "adv" | "purchase" | "sold"
}
export default function AdvDetails({ details }: Props) {
    const { userState } = useContext(CurrentUserContext);

    const [adv, setAdv] = useState<AdvData>(emptyAds)
    const [isLogin, SetIsLogin] = useState(false)
    const { t } = useTranslation();

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const adv = await getActualAdv()
                setAdv(adv);
                if (userState !== null) {
                    SetIsLogin(true)
                }
            } catch (error) {
                console.error("Errore durante il recupero dell'annuncio", (error as Error).message);
            }
        };
        fetchAds();
    }, [userState]);

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
                <h4>{t('ads.Title')}</h4>
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
                                <p className="adv__date">07/10/2023</p>
                                <h3 className="adv__price">{adv.price},00€</h3>
                            </div>
                            <div className="row">
                                <div className="col d-flex flex-column gap-2 ">
                                    <Button className="btn--primary" onClick={showEpilogue} wide={true} aria-labelledby={t('ads.buy')}>{t('ads.buy')}</Button>
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
                                        <Button className="btn--disabled" aria-labelledby={t('ads.Title')}>{t('ads.message')}</Button>
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
            {currentModal === 'primo' && <Epilogue show={show} onHide={showEpilogue} article={adv} onSwitch={switchModals} />}
            {currentModal === 'secondo' && <Checkout show={show} onHide={showEpilogue} article={adv} onSwitch={switchModals} />}
            {currentModal === 'terzo' && <Dialog show={show} onHide={showEpilogue} title="Acquisto compleato" >
                <div className="row">
                    <div className="col">
                        <img src={check} alt="successo" />
                    </div>
                </div>
                <div className="row content">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>Acquisto completato!</label>
                                <p>L’acquisto del tuo articolo è andato a buon fine. <br></br> Rivedi i dettagli dalla tua area riservata o vedi altri annunci</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Link to={"/"} className="btn--secondary">Home</Link>
                                <Link to={"/area-riservata"} className="btn--primary">Area riservata</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>}
        </>
    )

}