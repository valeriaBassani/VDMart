import { useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../SubmitButton/Submit";
import InputField from "../InputField/InputField";

export default function LogIn() {

    const [checked, setIsChecked] = useState(false);
    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIsChecked(!checked);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        console.log(email, password, checked);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="Form ">
                <div className="Fields container-md">
                    <h4>Accedi al tuo profilo</h4>
                    <InputField label="Email" type="text" name="email" placeholder="email" request={true} ></InputField>
                    <InputField label="Password" type="password" name="password" placeholder="password" request={true} suggest="password boh" ></InputField>
                    <Link to={`/recupera-password`} className="link">Password dimenticata?</Link>
                </div>
                <div className="Checkbox">
                    <input type="checkbox" className={checked ? "checked" : ""} name="rememberMe" value="rememberMe" checked={checked} onChange={handleCheck}></input>
                    <label htmlFor="rememberMe">Ricordami</label>
                </div>
                <Submit label="Accedi" className='Primary' />
                <p>Non sei registrato? <Link to={`/signUp`} className="link">Registrati</Link></p>
            </form>
        </>
    )
}

// <form onSubmit={handleSubmit} className="Form ">
//     <div className="Fields container-md">
//         <h4>Accedi al tuo profilo</h4>
//         <InputField label="Email" type="text" name="name" placeholder="nome" ></InputField>
//         <InputField label="Password" type="password" name="password" placeholder="password" suggest="password boh" ></InputField>
//         <div className="Field">
//             <label>Nome*</label>
//             <input type="text" name="nome" placeholder="nome" value={formData.email} onChange={HandleChange}></input>
//         </div>
//         <div className="Field">
//             <label>Password*</label>
//             <input type="password" name="password" placeholder="password" value={formData.password} onChange={HandleChange}></input>
//         </div>
//         <Link to={`/recupera-password`} className="link">Password dimenticata?</Link>
//     </div>
//     <div className="Checkbox">
//         <input type="checkbox" className={checked ? "checked" : ""} name="rememberMe" value="rememberMe" checked={checked} onChange={handleCheck}></input>
//         <label htmlFor="rememberMe">Ricordami</label>
//     </div>
//     <Submit label="Accedi" className='Primary' />
//     <input type="submit" value="Accedi" className="Primary"></input>
//     <p>Non sei registrato? <Link to={`/signUp`} className="link">Registrati</Link></p>
// </form>