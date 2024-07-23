import AdvImages from "../../Molecules/AdvImages/AdvImages"
import "./ActiveAdv.css"
import Button from "../../Atoms/Buttons/Buttons"
import { Link, useNavigate } from "react-router-dom"
import Dialog from "../../Molecules/PopUp/Dialog"
import help from "./help-circle.svg"
import { useState } from "react"

type Props = {
    article?: string,
}

export default function ActiveAdv({ article }: Props) {

    const [show, setShow] = useState(false)
    const showDialog = () => {
        setShow(!show)
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/modifica-annuncio-attivo');
    }

    return (
        <>
            <div className="container-lg mb-5">
                <h4>Dettagli annuncio attivo</h4>
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
                                </div>
                                <h4>Ipad terza generazione nuovo</h4>
                                <p className="adv__date">07/10/2023</p>
                                <h3 className="adv__price">145,00€</h3>
                                <div className="row">
                                    <div className="col-auto ">
                                        <div className="col d-flex gap-2" id="shipping">
                                            <p className="adv__shipping">Spedizione disponibile: </p>
                                            <p>costo: 24,90€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex gap-2 ">
                                    <Button className="btn--primary" onClick={handleClick} wide={true}>Modifica annuncio</Button>
                                    <Button className="btn--delete" onClick={showDialog}>Elimina annuncio</Button>
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
            <Dialog title="Elimina annuncio" show={show} onHide={showDialog} >
                <div className="row">
                    <div className="col">
                        <img src={help} alt="Icon" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label>Rimuovere questo annuncio? </label>
                        <p>L'annuncio non sarà più visibile agli altri utenti e perderai le informazioni sul tuo articolo</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex gap-2 justify-content-center">
                        <Link to={"/"} className="btn--delete" >Elimina</Link>
                        <Link to={"/dettagli-annuncio-attivo"} className="btn--secondary" onClick={showDialog}>Annulla</Link>
                    </div>
                </div>
            </Dialog>
        </>
    )

}