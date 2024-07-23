import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import TextArea from "../../Atoms/textArea/textArea";
import Dialog from "../DialogPopUp/Dialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import check from "./check-circle 1.svg"

type Props = {
    category: string
}

export default function SupportForm({ category }: Props) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const text = formData.get('text') as string;
        console.log(email, text);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form ">
                <div className="fields container-md">
                    <h4>Scrivici</h4>
                    <InputField label="Email" type="email" name="email" placeholder="email" required={true} ></InputField>
                    <div className="create__section">
                        <div className="row">
                            <div className="col d-flex gap-2 py-2">
                                <label>Oggetto:</label>
                                <label style={{ color: "var(--primary)" }}> {category} </label>
                            </div>
                        </div>
                        <TextArea label="Messaggio" name="text" maxLength={300} required={true} />
                    </div>
                    <Submit label="Invia" className='btn--primary' onClick={handleClick} />
                </div>
            </form >

            <Dialog title='Pubblica annuncio' show={show} onHide={handleClick} >
                <div className="row">
                    <div className="col">
                        <img src={check} alt="Icon" />
                    </div>
                </div>
                <div className="row px-5 mx-5">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>Messaggio inviato!</label>
                                <p>Abbiamo preso in carico la tua segnalazione. <br></br>Verrai ricontattato dal team VDMart la più presto</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Link to={"/"} className="btn--secondary">Home</Link>
                                <Link to={"/area-riservata"} className="btn--primary">Area riservata</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}