import './Pages.css';
import '../App.css';
import { useState } from 'react';
import InputField from '../components/Atoms/InputField/InputField';
import Submit from '../components/Atoms/SubmitButton/Submit';
import { Link } from 'react-router-dom';

export default function Restore() {

    const [error, setError] = useState("")
    const [show, setShow] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const inputValue = (e.currentTarget.elements.namedItem('mail') as HTMLInputElement).value;
        if (inputValue === "") {
            setError("campo obbligaotorio")
        } else {
            setError("")
            setShow(true)
            console.log(inputValue);
        }
    }
    return (
        <body>
            <div className="container-fluid d-flex justify-content-center" style={{ height: "70vh" }}>
                <div className="row my-5 mx-3 justify-content-center">
                    <div className="col d-flex justify-content-center">
                        <div className="input ">
                            <h4>Recupero password</h4>
                            <form onSubmit={handleSubmit} className="form  ">
                                <div className="container-md main__section p-3 col d-flex flex-column gap-3">
                                    <p>Inserisci la mail con cui ha registrato il tuo account. Riceverai le istruzioni per creare una nuova password</p>
                                    <InputField label="Email*" type="text" name="mail" error={error} placeholder="Email" />
                                </div>
                                {show && <p style={{ color: "grey" }}>funzionalità in fase di sviluppo</p>}
                                <Submit label="Invia" className='btn--primary' />
                                <p>Non sei registrato? <Link to={`/registrazione`} className="link">Registrati</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}