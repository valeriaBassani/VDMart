import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../../Atoms/SubmitButton/Submit";

export default function RestoreForm() {

    const [email, setEmail] = useState("")

    const HandleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }, [email])

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form ">
                <div className="container-md main p-3 col d-flex flex-column gap-3">
                    <p>Inserisci la mail con cui ha registrato il tuo account. Riceverai le istruzioni per creare una nuova password</p>
                    <div className="field">
                        <label>Email*</label>
                        <input type="text" name="mail" placeholder="Email" value={email} onChange={HandleChange}></input>
                    </div>
                </div>
                <Submit label="Accedi" className='btn--primary' />
                <p>Non sei registrato? <Link to={`/registrazione`} className="link">Registrati</Link></p>
            </form>
        </>
    )
}
