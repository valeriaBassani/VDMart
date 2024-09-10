import { Link, useNavigate } from "react-router-dom";
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { useTranslation } from "react-i18next";
import { accessUser } from "../../../storesData/account";
import { useCallback, useContext, useEffect, useState } from "react";
import { getUserByEmail } from "../../../storesData/users";
import { CurrentUserContext } from "../../../App";

type FormData = {
    mail: string;
    password: string;
}
export default function LogIn() {
    const { t } = useTranslation();
    const { userState, setUserState } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(false)
    const [errors, setErrors] = useState({
        mail: "",
        password: "",
    })

    const validateForm = (credentials: any): boolean => {
        let errors = false
        setErrors({
            mail: "",
            password: "",
        })
        if (credentials.mail === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                mail: 'Campo obbligatorio'
            }));
        }
        if (credentials.password === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'Campo obbligatorio'
            }));
        }
        return errors
    }
    const [err, setErr] = useState("")

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setErr("")

        const formData = new FormData(e.currentTarget);
        const credentials: FormData = {
            mail: formData.get('email') as string,
            password: formData.get('password') as string,
        };

        let error = validateForm(credentials)
        if (!error) {
            try {
                if (rememberMe === true) {
                    localStorage.setItem('rememberUser', JSON.stringify(credentials));
                } else {
                    localStorage.removeItem('rememberUser');
                }
                const result = await accessUser(credentials);
                if (result) {
                    const user = getUserByEmail(credentials.mail)
                    setUserState(await user)
                    navigate('/area-riservata');
                }
            } catch (error) {
                setErr((error as Error).message)
                console.error("Errore durante l'accesso:", (error as Error).message);
            }
        }
    }, [navigate, rememberMe, setUserState])

    const handleRememberChange = useCallback(() => {
        setRememberMe(!rememberMe)
    }, [rememberMe])

    const [rememberMeUser, setRememberMeUser] = useState<FormData>({ mail: "", password: "" })
    useEffect(() => {
        const usersJSON = localStorage.getItem('rememberUser');
        if (usersJSON) {
            setRememberMeUser(usersJSON ? JSON.parse(usersJSON) : []);
            setRememberMe(true)
        }
    }, [userState])

    return (
        <>
            <form onSubmit={handleSubmit} className="form " aria-labelledby="login--form">
                <div className=" container-md main__section">
                    <h4 id="login--form">{t('login.subtitle')}</h4>
                    <InputField label="Email" value={rememberMeUser.mail} type="email" name="email" placeholder="email" error={errors.mail} required={true} ></InputField>
                    <InputField label="Password" value={rememberMeUser.password} type="password" name="password" placeholder="password" error={errors.password} required={true} ></InputField>
                    <div className="field__error">{err}</div>
                    <Link to={`/recupera-password`} className="link">{t('login.restore-psw')}</Link>
                </div>
                <Checkbox label={t('login.remember-me')} id="rememberMe" checked={rememberMe} onChange={handleRememberChange} />
                <Submit label="Accedi" className='btn--primary' />
                <p>{t('login.signIn')} <Link to={`/registrazione`} className="link">{t('navbar.signIn')}</Link></p>
            </form>
        </>
    )
}
