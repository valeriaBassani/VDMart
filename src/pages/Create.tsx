import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import './Pages.css';
import '../App.css';
import CreateForm from "../components/CreateForm/CreateForm";

export default function LogIn() {
    return (
        <>
            <NavBar />
            <div className="container-lg my-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>Crea il tuo annuncio</h4>
                        <CreateForm />
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}