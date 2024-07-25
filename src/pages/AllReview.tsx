
import Review from "../components/Molecules/Review/Review"
import { ReactComponent as Star } from "./star.svg"
export default function AllReview() {
    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>Tutte le recensioni</h4>
                        <div className="row">
                            <div className="col main__section ">
                                <div className="row">
                                    <div className="col d-flex flex-column gap-2">
                                        <div className="row">
                                            <div className="col d-flex justify-content-between">
                                                <div className="col-auto d-flex gap-2">
                                                    <h3 style={{ color: "var(--primary)" }}>4.8</h3>
                                                    <div className="rating__stars">
                                                        <Star fill="#007FA3" />
                                                        <Star fill="#007FA3" />
                                                        <Star fill="#007FA3" />
                                                        <Star fill="#007FA3" />
                                                        <Star />
                                                    </div>
                                                </div>
                                                <label>Tot: 3 recensioni</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-center">
                                        <Review mail={""} />
                                    </div>
                                    <div className="col-6 d-flex justify-content-center">
                                        <Review mail={""} />
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