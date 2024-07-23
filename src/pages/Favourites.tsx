import Adv from "../components/Organisms/AdvPreview/AdvPreview";

export default function Favourites() {
    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>Annunci preferiti</h4>
                        <div className="main__section">
                            <div className="row">
                                <div className="col d-flex flex-column gap-2">
                                    <div className="row">
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
            </div>
        </>
    )

}