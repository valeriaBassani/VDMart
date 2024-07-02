import { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    // const dati = formData.email + ' ' + formData.psw; //variabie di stato sarebbe ridondante

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(formData.email, formData.password);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="Form">
                <div className="Fields">
                    <h4>Accedi al tuo profilo</h4>
                    <div className="Field">
                        <label>Nome*</label>
                        <input type="text" name="nome" placeholder="nome" value={formData.email} onChange={HandleChange}></input>
                    </div>
                    <div className="Field">
                        <label>Password*</label>
                        <input type="password" name="password" placeholder="password" value={formData.password} onChange={HandleChange}></input>
                    </div>
                    <Link to={`/signUp`} className="link">Password dimenticata?</Link>
                </div>
                <div>
                    <input type="submit" value="Accedi" className="Primary"></input>
                    <p>Non sei registrato? <Link to={`/signUp`} className="link">Registrati</Link></p>
                </div>
            </form>
            {/* <h1>{dati}</h1> */}
        </>
    )
}
