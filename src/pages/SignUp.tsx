import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import './Pages.css';
import '../App.css';

export default function SignUp() {
    return (
        <>
            <NavBar />
            <div className="Content">
                <div className="Input">
                    <h4>Signup</h4>
                    <h2>Benvenuto!</h2>
                    <SignUpForm />
                </div>
            </div>
            <Footer />
        </>
    )
}