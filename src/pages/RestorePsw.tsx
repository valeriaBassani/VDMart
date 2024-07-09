import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import './Pages.css';
import '../App.css';
import BreadCrumbs from "../components/Breadcrumbs/Breadcrumbs";
import RestoreForm from "../components/RestoreForm/Restore";

export default function Restore() {
    return (
        <body>
            <NavBar />
            <BreadCrumbs />
            <div className="container-fluid d-flex justify-content-center" style={{ height: "70vh" }}>
                <div className="row my-5 mx-3 justify-content-center">
                    <div className="col d-flex justify-content-center">
                        <div className="Input">
                            <h4>Recupero password</h4>
                            <RestoreForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>

    )
}