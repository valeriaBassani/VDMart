import { useCallback, useContext, useState } from "react"
import { Link } from "react-router-dom"
import { DeleteAccount } from "../DeleteAccount/DeleteAccount"
import InputField from "../../Atoms/InputField/InputField"
import Button from "../../Atoms/Buttons/Buttons"
import Dialog from "../../Template/DialogPopUp/Dialog"
import Icon from "../../Atoms/Icon"
import "./styles.css"
import { User } from "../../../storesData/account"
import { CurrentUserContext } from "../../../App"
import Submit from "../../Atoms/SubmitButton/Submit"
import { updateActualUser } from "../../../storesData/users"

type Props = {
    user: User
    isActual: boolean
}

export default function UserInfo({ user, isActual }: Props) {
    const { setUserState } = useContext(CurrentUserContext);
    const [visible, setVisible] = useState(false);

    const handleClick = useCallback(() => {
        setVisible(!visible)
    }, [visible])

    const [show, setShow] = useState(false)
    const showDialog = useCallback(() => {
        setShow(!show)
    }, [show])

    const handleLogOut = useCallback(() => {
        setUserState(null)
        localStorage.removeItem('actualUser');
    }, [setUserState])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const us: any = {}

        formData.forEach((value, key) => {
            us[key] = value;
        });

        const parseUser: User = {
            name: user.name,
            lastName: user.lastName,
            street: us.street,
            number: us.number,
            city: us.city,
            provincia: us.provincia,
            phone: us.phone,
            email: user.email,
            password: user.password,
            confirmPassword: user.confirmPassword,
            favourites: user.favourites,
            actives: user.actives,
            purchased: user.purchased,
            sold: user.sold,
            review: user.review
        }
        console.log(parseUser);

        updateActualUser(parseUser)
        setUserState(parseUser)
        handleClick()
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row ">
                    <div className="col-auto">
                        <div className="profile__icon">
                            <h3>{user.name[0]}</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`row gap-3 ${visible ? 'profile--show' : ''}`}>
                            <div className="col d-flex flex-column gap-2" >
                                <p className="profie__active">{user.actives.length} annunci attivi</p>
                                <h4>{user.name} {user.lastName}</h4>
                                <p>{user.email}</p>
                                <p>tel: {user.phone}</p>
                                {isActual && (
                                    <p>{user.street} {user.number} - {user.city}, {user.provincia}</p>
                                )}
                            </div>
                            {isActual && (
                                <div className="col-auto d-flex align-items-start" >
                                    <Button className="btn--edit" onClick={handleClick}><Icon url="./images/edit.svg" margin="0.5em" alt="modifica" />Modifica</Button>
                                    <Button className="btn--edit" onClick={showDialog}><Icon url="./images/log-out.svg" margin="0.5em" alt="esci" />Esci</Button>
                                </div>
                            )}
                        </div>
                        <div className={`row ${visible ? '' : 'profile--show'}`}>
                            <div className="col d-flex flex-column gap-2">
                                <p id="category">3 annunci attivi</p>
                                <h4>{user.name} {user.lastName}</h4>
                                <p>{user.email}</p>
                                <div className="row">
                                    <div className="col">
                                        <InputField label="Indirizzo" value={user.street} type="text" name="street" placeholder="Via" required={true}></InputField>
                                    </div>
                                    <div className="col-4">
                                        <InputField label="N." type="number" value={user.number} name="number" placeholder="N." required={true}></InputField>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <InputField label="Città" value={user.city} type="text" name="city" placeholder="Città" required={true}></InputField>
                                    </div>
                                    <div className="col-4">
                                        <InputField label="Pv" value={user.provincia} type="text" name="provincia" placeholder="Pv" required={true}></InputField>
                                    </div>
                                </div>
                                <InputField label="Telefono" type="tel" value={user.phone} name="phone" placeholder="Tel." required={true}></InputField>
                                <DeleteAccount user={user} />
                            </div>
                            <div className="col d-flex align-items-start justify-content-end" >
                                <div className="row">
                                    <div className="col d-flex gap-2">
                                        <Submit label="Salva" className="btn--confirm" />
                                        {/* <button className="btn--confirm" onClick={handleClick}>Salva</button> */}
                                        <button className="btn--edit" onClick={handleClick}>Annulla</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </form>
            <Dialog show={show} onHide={showDialog} title="Logout" >
                <div className="row">
                    <div className="col">
                        <img src="./images/help-circle.svg" alt="Icon" />
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
                                <Link to={"/"} className="btn--primary" onClick={handleLogOut}>Esci</Link>
                                <Link to={"/area-riservata"} className="btn--secondary" onClick={showDialog}>Annulla</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >
        </>
    )
}
