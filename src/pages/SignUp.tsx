import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/SignUpLogiInForm/SignUpForm";
import './Pages.css';
import '../App.css';
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <>
            <NavBar />
            <div className="Content">
                <div className="Input">
                    <h4>SignUp</h4>
                    <h2>Benvenuto!</h2>
                    <SignUpForm />
                </div>
            </div>
            <Footer />
        </>
    )
}