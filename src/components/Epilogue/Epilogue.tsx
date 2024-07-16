import { Link } from "react-router-dom";
import Review from "../Review/Review";
import Submit from "../SubmitButton/Submit";
import ipad from "./ipad.jpg"
type Props = {
    article: string,
}
export default function Epilogue({ article }: Props) {

    return (
        <>
            <div className="container-sm p-5">
                <div className="Create row gap-4">
                    <h4>Il tuo acquisto</h4>
                    <div className="row Info">
                        <div className="col-auto pe-0">
                            <img src={ipad} alt="Ipad"></img>
                        </div>
                        <div className="col d-flex flex-column gap-1 py-3 pe-4">
                            <h5 id="category">Tecnologia</h5>
                            <h4>Ipad terza generazione nuovo</h4>
                            <Review mail="Ilaria" />
                        </div>
                    </div>
                    <div className="row border-top pt-4 align-items-center">
                        <div className="col-6">
                            <h4>Prezzo</h4>
                        </div>
                        <div className="col-6 text-end">
                            <h3 style={{ color: "var(--primary)" }}>800,00€</h3>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col d-flex flex-column gap-2">
                        <label>Acquisto a distanza</label>
                        <Submit className="Primary" label="Checkout" ></Submit>
                        <p id="shipping">spedizione 45,00€</p>
                    </div>
                    <div className="col">
                        <label>Scambio a mano</label>
                        <Link to={`/login`} className="Secondary" style={{ width: "100%" }}>Contatta il venditore</Link>
                    </div>
                </div>
            </div>
        </>
    )

}