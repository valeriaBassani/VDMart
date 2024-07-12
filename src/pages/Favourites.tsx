import Adv from "../components/Adv/Adv";
import Footer from "../components/Footer/Footer";

export default function Favourites() {
    return (
        <>
            <div className="container-sm mb-5 p-4">
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
        </>
    )

}