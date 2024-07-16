import { useState } from "react"
import AdvImages from "../AdvImages/AdvImages"
import Favourite from "../Favourite/Favourite"
import Review from "../Review/Review"
import PopUpPurchase from "../PopUpPurchase/PopUpPurchase"
import Submit from "../SubmitButton/Submit"
import "./AdvsDetails.css"

type Props = {
    article?: string,
    details?: "adv" | "purchase" | "sold"
}

export default function AdvDetails({ article, details }: Props) {
    const [show, setShow] = useState(false)
    const showEpilogue = () => {
        console.log(show);

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
                                    <Submit className="Primary" label="Acquista questo articolo" onClick={showEpilogue}></Submit>
                                    <div className="row">
                                        <div className="col-auto ">
                                            <div className="col d-flex gap-2" id="shipping">
                                                <p>Spedizione disponibile: </p>
                                                <b>24,90€</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3 d-flex flex-column gap-2">
                                        <Submit className="Secondary" label="Contatta il venditore"></Submit>
                                        <div className="row gap-2 ">
                                            <div className="col-auto">
                                                <Review mail={"Luigi"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col Description">
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