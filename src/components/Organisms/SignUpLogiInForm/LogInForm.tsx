import { Link, useNavigate } from "react-router-dom";
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import Checkbox from "../../Atoms/Checkbox/Checkbox";

export default function LogIn() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/area-riservata');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form ">
                <div className="fields container-md">
                    <h4>Accedi al tuo profilo</h4>
                    <InputField label="Email" type="email" name="email" placeholder="email" required={true} ></InputField>
                    <InputField label="Password" type="password" name="password" placeholder="password" required={true} ></InputField>
                    <Link to={`/recupera-password`} className="link">Password dimenticata?</Link>
                </div>
                <Checkbox label="Ricordami" id="rememberMe" />
                <Submit label="Accedi" className='btn--primary' onClick={handleClick} />
                <p>Non sei registrato? <Link to={`/registrazione`} className="link">Registrati</Link></p>
            </form>
        </>
    )
}
