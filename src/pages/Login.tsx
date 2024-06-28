import Footer from "../components/footer/Footer";
import LogInForm from "../components/LogInForm/LogInForm";
import NavBar from "../components/NavBar/NavBar";
import './Pages.css';
import '../App.css';

export default function LogIn() {
    return (
        <div>
            <NavBar />
            <div className="Content">
                <div className="Input">
                    <h4>Login</h4>
                    <h2>Bentornato!</h2>
                    <LogInForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}