import LogInForm from "../components/Organisms/SignUpLogiInForm/LogInForm";
import './Pages.css';
import '../App.css';
import { useTranslation } from "react-i18next";

export default function LogIn() {
    const { t } = useTranslation();
    return (
        <>
            <div className="row my-5 mx-3 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <div className="input">
                        <h4>Login</h4>
                        <h2>{t('login.title')}</h2>
                        <LogInForm />
                    </div>
                </div>
            </div>
        </>

    )
}