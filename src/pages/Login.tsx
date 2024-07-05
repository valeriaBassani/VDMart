import Footer from "../components/Footer/Footer";
import LogInForm from "../components/SignUpLogiInForm/LogInForm";
import NavBar from "../components/NavBar/NavBar";
import './Pages.css';
import '../App.css';

export default function LogIn() {
    return (
        <>
            <NavBar />
            <div className="row my-5 mx-3 justify-content-center">
                <div className="col d-flex justify-content-center">
                    <div className="Input">
                        <h4>Login</h4>
                        <h2>Bentornato!</h2>
                        <LogInForm />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}