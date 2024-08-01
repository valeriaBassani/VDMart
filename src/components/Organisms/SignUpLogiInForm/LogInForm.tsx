import { Link, useNavigate } from "react-router-dom";
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { useTranslation } from "react-i18next";
import { accessUser } from "../../../storesData/account";
import { useCallback } from "react";

type FormData = {
    mail: string;
    password: string;
    remember: boolean;
}
export default function LogIn() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const credentials: FormData = {
            mail: formData.get('email') as string,
            password: formData.get('password') as string,
            remember: formData.get('remember') === 'on'
        };

        try {
            const result = await accessUser(credentials);
            if (result) {
                console.log("Accesso riuscito");
                navigate('/area-riservata');
            } else {
                console.log("Accesso negato");
            }
        } catch (error) {
            console.error("Errore durante l'accesso:", (error as Error).message);
        }

        // accessUser(credentials)
        //     .then((result) => {
        //         console.log("accesso riuscito");
        //         navigate('/area-riservata');
        //     })
        //     .catch((error) => {
        //         console.error("Errore durante l'accesso:", error);
        //     });
    }, [navigate])

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
                <Submit label="Accedi" className='btn--primary' />
                <p>{t('login.signIn')} <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link></p>
            </form>
        </>
    )
}
