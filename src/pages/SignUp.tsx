import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/SignUpLogiInForm/SignUpForm";
import './Pages.css';
import '../App.css';

export default function SignUp() {
    return (
        <>
            <NavBar />
            <div className="row mt-5 mb-5 ml-3 mr-3 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <div className="Input">
                        <h4>SignUp</h4>
                        <h2>Benvenuto!</h2>
                        <SignUpForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}