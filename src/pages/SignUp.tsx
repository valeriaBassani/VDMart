import SignUpForm from "../components/Organisms/SignUpLogiInForm/SignUpForm";
import './Pages.css';
import '../App.css';
import { useTranslation } from "react-i18next";

export default function SignUp() {
    const { t } = useTranslation();
    return (
        <>
            <div className="row my-5 mx-3 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <div className="input">
                        <h4>SignUp</h4>
                        <h2>{t('signUp.title')}!</h2>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </>
    )
}