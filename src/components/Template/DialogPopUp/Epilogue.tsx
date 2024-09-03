import { Modal } from "react-bootstrap";
import UserRate from "../../Molecules/UserRate/UserRate";
import Button from "../../Atoms/Buttons/Buttons";
import ipad from "./ipad.jpg"
import "./DialogPopUp.css"
import { AdvData } from "../../../storesData/products";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../../../storesData/users";
import { useNavigate } from "react-router-dom";

type Props = {
    article: AdvData
    show: boolean,
    onSwitch: (modale: string) => void;
    onHide: () => void;
}
export default function Epilogue({ article, show, onSwitch, onHide }: Props) {
    const navigate = useNavigate();
    const [isLogin, SetIsLogin] = useState(false)
    useEffect(() => {
        const fetchAds = async () => {
            try {
                SetIsLogin(await isLoggedIn())
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, [])

    const handleLogin = () => {
        onHide()
        navigate('/login')
    }

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
                            <div className="container-sm px-5">
                                <div className="main row gap-4">
                                    <h4>Il tuo acquisto</h4>
                                    <div className="row adv__info">
                                        <div className="col-auto pe-0">
                                            <img src={ipad} alt="Ipad"></img>
                                        </div>
                                        <div className="col d-flex flex-column gap-1 py-3 pe-4">
                                            <h5 className="adv__category">{article.category}</h5>
                                            <h4>{article.title}</h4>
                                            <UserRate mail={article.seller} />
                                        </div>
                                    </div>
                                    <div className="row border-top pt-2 justify-content-between">
                                        <div className="col d-flex justify-content-between">
                                            <h4>Prezzo</h4>
                                            <h3 style={{ color: "var(--primary)" }}>{article.price},00€</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {!isLogin ? (<Button className="btn--primary" wide={true} onClick={handleLogin} >Accedi per poter effettuare l'acquisto</Button>)
                                        : (
                                            <>{article.shipping && (
                                                <div className="col d-flex flex-column gap-2">
                                                    <label>Acquisto a distanza</label>
                                                    <Button className="btn--primary" wide={true} onClick={() => onSwitch('secondo')} >Checkout</Button>
                                                    <div className="col d-flex gap-2 adv__shipping">
                                                        <p>spedizione disponibile:</p>
                                                        <b>{article.shippingPrice}€</b>
                                                    </div>
                                                </div>
                                            )}
                                                <div className="col">
                                                    <label>Scambio a mano</label>
                                                    <Button className="btn--secondary" wide={true}>Contatta il venditore</Button>
                                                </div></>)}

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
}