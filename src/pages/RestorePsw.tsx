import './Pages.css';
import '../App.css';
import RestoreForm from "../components/Organisms/RestorePswForm/Restore";

export default function Restore() {
    return (
        <body>
            <div className="container-fluid d-flex justify-content-center" style={{ height: "70vh" }}>
                <div className="row my-5 mx-3 justify-content-center">
                    <div className="col d-flex justify-content-center">
                        <div className="input">
                            <h4>Recupero password</h4>
                            <RestoreForm />
                        </div>
                    </div>
                </div>
            </div>
        </body>

    )
}