import SignUpForm from "../components/Organisms/SignUpLogiInForm/SignUpForm";
import './Pages.css';
import '../App.css';

export default function SignUp() {
    return (
        <>
            <div className="row my-5 mx-3 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <div className="Input">
                        <h4>SignUp</h4>
                        <h2>Benvenuto!</h2>
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </>
    )
}