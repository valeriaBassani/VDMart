import { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import InputField from "../InputField/InputField";
import Submit from "../SubmitButton/Submit";
import ipad from "./ipad.jpg"
import Button from "../Buttons/Buttons";
import UserRate from "../UserRate/UserRate";


type Props = {
    title: string,
    article: string,
}

export default function PopUpPurchase({ title, article }: Props) {

    const [second, setSecond] = useState(true)

    const showSecond = () => {
        setSecond(false)
    }

    const [show, setShow] = useState(true)
    function onHide(): void {
        setShow(false)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>{title}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {second ? (
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
                                            <UserRate mail="Ilaria" />
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
                                        <Button className="Primary" wide={true} onClick={showSecond}>Checkout</Button>
                                        <p id="shipping">spedizione 45,00€</p>
                                    </div>
                                    <div className="col">
                                        <label>Scambio a mano</label>
                                        <Button className="Secondary" wide={true}>Contatta il venditore</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="container-sm p-5 row gap-4">
                                <div className="Create">
                                    <h4>Il tuo acquisto</h4>
                                    <div className="row my-2">
                                        <div className="col" style={{ color: "var(--placeholder)" }}>
                                            <div className="col d-flex justify-content-between">
                                                <p>Articolo</p>
                                                <p>800,00€</p>
                                            </div>
                                            <div className="col d-flex justify-content-between">
                                                <p>Spedizione</p>
                                                <p>45,00€</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border-top pt-2 align-items-center">
                                        <div className="col-6">
                                            <h4>Prezzo</h4>
                                        </div>
                                        <div className="col-6 text-end">
                                            <h3 style={{ color: "var(--primary)" }}>800,00€</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="Create">
                                    <h4>Spedizione</h4>
                                    <InputField type={"text"} name={"address"} placeholder={"via natale battaglia, 8"} />
                                    <div className="row">
                                        <div className="col">
                                            <InputField label="Numero carta" type="number" name="card" placeholder="XXXX-XXXX-XXXX-XXXX" required={true}></InputField>
                                        </div>
                                        <div className="col-4">
                                            <InputField label="CVV" type="number" name="cvv" placeholder="XXX" required={true}></InputField>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <InputField label="Titolare" type="text" name="name" placeholder="Nome Cognome" required={true}></InputField>
                                        </div>
                                        <div className="col-4">
                                            <InputField label="Scandeza" type="number" name="expire" placeholder="MM/AAAA" required={true}></InputField>
                                        </div>
                                    </div>
                                </div>
                                <Submit className="Primary" label="Conferma pagamento"></Submit>
                            </div>
                        </>
                    )}
                </Modal.Body>
            </Modal >
        </>
    )

}