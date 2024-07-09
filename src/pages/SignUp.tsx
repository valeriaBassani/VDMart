import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SignUpForm from "../components/SignUpLogiInForm/SignUpForm";
import './Pages.css';
import '../App.css';
import BreadCrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function SignUp() {
    return (
        <>
            <NavBar />
            <BreadCrumbs />
            <div className="row my-5 mx-3 justify-content-center">
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