import Adv from "../components/Adv/Adv";
import BreadCrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Favourites() {
    return (
        <>
            <NavBar />
            <BreadCrumbs />
            <div className="container-sm my-3 p-4">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>Annunci preferiti</h4>
                        <div className="row Ads">
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