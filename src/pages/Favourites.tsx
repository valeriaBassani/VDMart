import Adv from "../components/Adv/Adv";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Favourites() {
    return (
        <>
            <NavBar />
            <div className="container-sm my-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>Annunci preferiti</h4>
                        <div className="row Fields">
                            <div className="col">
                                <div className="row py-2">
                                    <div className="col d-flex justify-content-end">
                                        <label>Tot: 3 preferiti</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col d-flex flex-column gap-3">
                                        <Adv />
                                        <Adv />
                                        <Adv />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    )

}