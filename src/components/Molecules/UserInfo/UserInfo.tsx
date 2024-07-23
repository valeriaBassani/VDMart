import Icon from "../../Atoms/Icon"
import edit from "./edit.svg"
import logout from "./log-out.svg"
import "./UserInfo.css"
import InputField from "../../Atoms/InputField/InputField"
import { useState } from "react"
import Button from "../../Atoms/Buttons/Buttons"
import { DeleteAccount } from "../DeleteAccount/DeleteAccount"
import Dialog from "../../Template/DialogPopUp/Dialog"
import { Link } from "react-router-dom"
import help from "./help-circle.svg"

type Props = {
    mail: string,
    isActual: boolean,
}
export default function UserInfo({ mail, isActual }: Props) {

    const [visible, setVisible] = useState(false);
    const handleClick = () => {
        setVisible(!visible)
    }
    const [show, setShow] = useState(false)
    const showDialog = () => {
        setShow(!show)
    }

    return (
        <>
            <div className="row ">
                <div className="col-auto">
                    <div className="profile__icon">
                        <h3>V</h3>
                    </div>
                </div>
                <div className="col">
                    <div className={`row gap-3 ${visible ? 'profile--show' : ''}`}>
                        <div className="col d-flex flex-column gap-2" >
                            <p className="profie__active">3 annunci attivi</p>
                            <h4>Valeria Bassani</h4>
                            <p>{mail}</p>
                            <p>tel: 3475693160</p>
                            {isActual ? (
                                <p>Via natale battaglia 8, Milano (MI), 24050</p>
                            ) : (
                                <></>
                            )}
                        </div>
                        {isActual ? (
                            <div className="col-auto d-flex align-items-start" >
                                <Button className="btn--edit" onClick={handleClick}><Icon url={edit} margin="0.5em" />Modifica</Button>
                                <Button className="btn--edit" onClick={showDialog}><Icon url={logout} margin="0.5em" />Esci</Button>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className={`row ${visible ? '' : 'profile--show'}`}>
                        <div className="col d-flex flex-column gap-2">
                            <p id="category">3 annunci attivi</p>
                            <h4>Valeria Bassani</h4>
                            <p>{mail}</p>
                            <div className="row">
                                <div className="col">
                                    <InputField label="Indirizzo" value="Via natale battaglia" type="text" name="street" placeholder="Via" required={true}></InputField>
                                </div>
                                <div className="col-4">
                                    <InputField label="N." type="number" value="8" name="number" placeholder="N." required={true}></InputField>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <InputField label="Città" value="Milano" type="text" name="city" placeholder="Città" required={true}></InputField>
                                </div>
                                <div className="col-4">
                                    <InputField label="Pv" value="MI" type="text" name="provincia" placeholder="Pv" required={true}></InputField>
                                </div>
                            </div>
                            <InputField label="Telefono" type="tel" value="3475693160" name="phone" placeholder="Tel." required={true}></InputField>
                            <DeleteAccount mail="user" />
                        </div>
                        <div className="col d-flex align-items-start justify-content-end" >
                            <div className="row">
                                <div className="col d-flex gap-2">
                                    <button className="btn--confirm" onClick={handleClick}>Salva</button>
                                    <button className="btn--edit" onClick={handleClick}>Annulla</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog show={show} onHide={showDialog} title="Elimina account" >
                <div className="row">
                    <div className="col">
                        <img src={help} alt="Icon" />
                    </div>
                </div>
                <div className="row px-5 mx-5">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>Uscire dal tuo profilo?  </label>
                                <p>Potrai sempre accedere di nuovo e avere accesso alle tue informazioni</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Link to={"/"} className="btn--primary">Esci</Link>
                                <Link to={"/area-riservata"} className="btn--secondary" onClick={showDialog}>Annulla</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
        </>
    )
}