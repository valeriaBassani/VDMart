import { Link, useNavigate } from "react-router-dom";
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { useTranslation } from "react-i18next";

export default function LogIn() {
    const { t } = useTranslation();
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
            <form onSubmit={handleSubmit} className="form " aria-labelledby="login--form">
                <div className=" container-md main__section">
                    <h4 id="login--form">{t('login.subtitle')}</h4>
                    <InputField label="Email" type="email" name="email" placeholder="email" required={true} ></InputField>
                    <InputField label="Password" type="password" name="password" placeholder="password" required={true} ></InputField>
                    <Link to={`/recupera-password`} className="link">{t('login.restore-psw')}</Link>
                </div>
                <Checkbox label={t('login.remember-me')} id="rememberMe" />
                <Submit label="Accedi" className='btn--primary' onClick={handleClick} />
                <p>{t('login.signIn')} <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link></p>
            </form>
        </>
    )
}
