import { Modal } from "react-bootstrap";
import InputField from "../../Atoms/InputField/InputField";
import Submit from "../../Atoms/SubmitButton/Submit";
import "./DialogPopUp.css"

type Props = {
    article: string
    show: boolean,
    onSwitch: (modale: string) => void;
    onHide: () => void;
}
export default function Checkout({ article, show, onSwitch, onHide }: Props) {
    return (
        <div className="container" style={{ position: "absolute" }}>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Riepologo</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row py-4 pop-up">
                        <div className="col d-flex flex-column gap-4 justify-content-center">
                            <div className="container-sm px-5 row gap-4">
                                <div className="main">
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
                                    <div className="row border-top pt-2 justify-content-between">
                                        <div className="col d-flex justify-content-between">
                                            <h4>Prezzo</h4>
                                            <h3 style={{ color: "var(--primary)" }}>800,00€</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="main">
                                    <h4>Spedizione</h4>
                                    <InputField type={"text"} name={"address"} value="via natale battaglia, 8" placeholder="indirizzo" />
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
                                <Submit className="btn--primary" label="Conferma pagamento" onClick={() => onSwitch('terzo')}></Submit>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
}