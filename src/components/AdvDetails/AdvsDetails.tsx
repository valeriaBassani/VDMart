import AdvImages from "../AdvImages/AdvImages"
import Favourite from "../Favourite/Favourite"
import Review from "../Review/Review"
import Submit from "../SubmitButton/Submit"
import "./AdvsDetails.css"

type Props = {
    article?: string,
    details?: "adv" | "purchase" | "sold"
}

export default function AdvDetails({ article, details }: Props) {
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
                                    <Submit className="Primary" label="Acquista questo articolo"></Submit>
                                    <div className="row">
                                        <div className="col">
                                            <p id="shipping2">Spedizione disponibile</p>
                                        </div>
                                        <div className="col-auto">
                                            <p>costo</p>
                                        </div>
                                    </div>
                                    <Submit className="Secondary" label="Contatta il venditore"></Submit>
                                    <div className="row gap-2 justify-content-end">
                                        <div className="col-auto">
                                            <Review mail={"Luigi"} />
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

        </>
    )

}