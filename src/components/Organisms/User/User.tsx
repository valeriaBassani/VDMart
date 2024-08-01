import { Link } from "react-router-dom";
import ReviewPreview from "../../Molecules/ReviewPreview/ReviewPreview";
import { UserInfo } from "../../Molecules/UserInfo";

type Props = {
    isActual: boolean
}

export default function User({ isActual }: Props) {
    return (
        <>
            <div className="main__section p-4 my-3">
                <div className="row">
                    <div className="col">
                        <UserInfo isActual={isActual} />
                    </div>
                </div>
                <div className="row border-top pt-4">
                    <div className="col d-flex flex-column gap-3">
                        <div className="row">
                            <div className="col">
                                <div className="row gap-2">
                                    <h4>Recensioni da altri utenti</h4>
                                    <div className="col d-flex gap-2 align-items-end">
                                        <p>Punteggio complessivo: </p><h3 style={{ color: "var(--primary)" }}>4.8</h3>
                                    </div>
                                    <div className="col-auto d-flex justify-content-end align-items-end">
                                        <p>Tot: 7 recensioni</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                <ReviewPreview mail="bassannivaleria01@gmail.com" />
                            </div>
                            <div className="col d-flex justify-content-center">
                                <ReviewPreview mail="bassannivaleria01@gmail.com" />
                            </div>
                            <div className="col d-flex justify-content-center">
                                <ReviewPreview mail="bassannivaleria01@gmail.com" />
                            </div>
                        </div>
                        <div className="row text-end">
                            <div className="col">
                                <Link to={`/tutte-le-recensioni`} className="link">Vedi tutte</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
