import { useState } from "react"
import AdvImages from "../../Molecules/AdvImages/AdvImages"
import Favourite from "../../Molecules/Favourite/Favourite"
import PopUpPurchase from "../../PopUpPurchase/PopUpPurchase"
import "./AdvsDetails.css"
import Button from "../../Atoms/Buttons/Buttons"
import UserRate from "../../Molecules/UserRate/UserRate"

type Props = {
    article?: string,
    details?: "adv" | "purchase" | "sold"
}

export default function AdvDetails({ article, details }: Props) {
    const [show, setShow] = useState(false)
    const showEpilogue = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="container-lg mb-5">
                <h4>Dettagli annuncio</h4>
                <div className="Section mt-2 p-4">
                    <div className="row">
                        <div className="col">
                            <AdvImages />
                        </div>
                        <div className="col d-flex flex-column gap-5 mt-5">
                            <div className="row gap-2">
                                <div className="row">
                                    <div className="col">
                                        <h5 id="category">Tecnologia</h5>
                                    </div>
                                    <div className="col-auto">
                                        <Favourite />
                                    </div>
                                </div>
                                <h4>Ipad terza generazione nuovo</h4>
                                <p id="date">07/10/2023</p>
                                <h3 id="price">145,00€</h3>
                            </div>
                            <div className="row">
                                <div className="col d-flex flex-column gap-2 ">
                                    <Button className="btn--primary" onClick={showEpilogue} wide={true}>Acquista questo articolo</Button>
                                    <div className="row">
                                        <div className="col-auto ">
                                            <div className="col d-flex gap-2" id="shipping">
                                                <p>Spedizione disponibile: </p>
                                                <b>24,90€</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3 d-flex flex-column gap-2">
                                        <Button className="btn--secondary">Contatta il venditore</Button>
                                        <div className="row gap-2 ">
                                            <div className="col-auto">
                                                <UserRate mail={"Luigi"} />
                                            </div>
                                        </div>
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
            <div className="container">
                {show && <PopUpPurchase title="riepilogo acquisto" article="bici" />}
            </div>

        </>
    )

}