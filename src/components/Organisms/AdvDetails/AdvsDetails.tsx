import { useCallback, useState } from "react"
import AdvImages from "../../Molecules/AdvImages/AdvImages"
import Favourite from "../../Molecules/Favourite/Favourite"
import "./AdvsDetails.css"
import Button from "../../Atoms/Buttons/Buttons"
import UserRate from "../../Molecules/UserRate/UserRate"
import Epilogue from "../../Template/DialogPopUp/Epilogue"
import Checkout from "../../Template/DialogPopUp/Checkout"
import Dialog from "../../Template/DialogPopUp/Dialog"
import { Link } from "react-router-dom"
import check from "./check-circle 1.svg"

type Props = {
    article?: string,
    details?: "adv" | "purchase" | "sold"
}

export default function AdvDetails({ article, details }: Props) {

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
                <h4>Dettagli annuncio</h4>
                <div className="main__section mt-2 p-4">
                    <div className="row">
                        <div className="col">
                            <AdvImages />
                        </div>
                        <div className="col d-flex flex-column gap-5 mt-5">
                            <div className="row gap-2">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="adv__category">Tecnologia</h5>
                                    </div>
                                    <div className="col-auto">
                                        <Favourite />
                                    </div>
                                </div>
                                <h4>Ipad terza generazione nuovo</h4>
                                <p className="adv__date">07/10/2023</p>
                                <h3 className="adv__price">145,00€</h3>
                            </div>
                            <div className="row">
                                <div className="col d-flex flex-column gap-2 ">
                                    <Button className="btn--primary" onClick={showEpilogue} wide={true}>Acquista questo articolo</Button>
                                    <div className="row">
                                        <div className="col-auto ">
                                            <div className="col d-flex gap-2 adv__shipping">
                                                <p>Spedizione disponibile: </p>
                                                <b>24,90€</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3 d-flex align-items-center gap-2">
                                        <Button className="btn--disabled">Contatta il venditore</Button>
                                        <UserRate mail={"Ilaria"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col adv__description">
                            <h4>Descrizione</h4>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
            {currentModal === 'primo' && <Epilogue show={show} onHide={showEpilogue} article={"bici"} onSwitch={switchModals} />}
            {currentModal === 'secondo' && <Checkout show={show} onHide={showEpilogue} article={"bici"} onSwitch={switchModals} />}
            {currentModal === 'terzo' && <Dialog show={show} onHide={showEpilogue} title="Acquisto compleato" >
                <div className="row">
                    <div className="col">
                        <img src={check} alt="Icon" />
                    </div>
                </div>
                <div className="row px-5 mx-5">
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