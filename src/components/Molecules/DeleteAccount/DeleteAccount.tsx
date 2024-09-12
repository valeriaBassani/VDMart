import { useState } from "react";
import Button from "../../Atoms/Buttons/Buttons"
import Dialog from "../../Template/DialogPopUp/Dialog";
import help from "./help-circle.svg"
import check from "./check-circle 1.svg"
import { Link } from "react-router-dom";
import { User } from "../../../storesData/account";
import { deleteAccount } from "../../../storesData/users";

type Props = {
    user: User
}

export function DeleteAccount({ user }: Props) {

    const [show, setShow] = useState(false)
    const showDialog = () => {
        setShow(!show)
    }

    const [currentModal, setCurrentModal] = useState("primo");

    const switchModals = async () => {
        try {
            await deleteAccount(user);
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
        setCurrentModal("secondo");
    };

    const close = () => {
        setCurrentModal("primo");
        setShow(false)
    }

    return (
        <>
            <Button className="btn--edit field__error" onClick={showDialog}>Elimina account</Button>
            {currentModal === 'primo' && <Dialog show={show} onHide={close} title="Elimina account" >
                <div className="row">
                    <div className="col">
                        <img src={help} alt="confermare" />
                    </div>
                </div>
                <div className="row px-5 mx-5">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>Eliminare il tuo profilo utente? </label>
                                <p>L’azione è irreversibile e perderai tutte le informazioni associate al tuo account</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Button className="btn--delete" onClick={switchModals}>Elimina</Button>
                                <Link to={"/area-riservata"} className="btn--secondary" onClick={showDialog}>Annulla</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >}

            {
                currentModal === 'secondo' && <Dialog show={show} onHide={close} title="Elimina account" >
                    <div className="row">
                        <div className="col">
                            <img src={check} alt="Successo" />
                        </div>
                    </div>
                    <div className="row px-5 mx-5">
                        <div className="col d-flex flex-column gap-3 main p-3">
                            <div className="row">
                                <div className="col">
                                    <label>Account eliminato correttamente.</label>
                                    <p>Potrai registrarti di nuovo con la tua mail o con una nuova mail</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex gap-2 justify-content-center">
                                    <Link to={"/"} className="btn--primary">Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            }
        </>
    )
}