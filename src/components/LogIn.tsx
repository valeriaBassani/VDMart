import { useState } from "react";
import './Components.css';

export default function LogIn() {
    const [formData, setFormData] = useState({
        email: "",
        psw: "",
    });
    const dati = formData.email + ' ' + formData.psw; //variabie di stato sarebbe ridondante

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(formData.email, formData.psw);
    }

    return (
        <>
            <h4>Login</h4>
            <h2>Bentornato!</h2>
            <form onSubmit={handleSubmit} className="Form">
                <div className="Field">
                    <label>Nome*</label>
                    <input type="text" name="nome" placeholder="nome" value={formData.email} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Password*</label>
                    <input type="password" name="psw" placeholder="password" value={formData.psw} onChange={HandleChange}></input>
                </div>
                <p>* campo obbligatorio</p>
                <input type="submit"></input>
                <p>Non sei registrato? <a href="SingIn.tsx">Registrati</a></p>
            </form>
            <h1>{dati}</h1>
        </>
    )
}
