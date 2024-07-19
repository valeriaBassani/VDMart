import { Link } from "react-router-dom";
import Review from "../Molecules/Review/Review";
import UserInfo from "../UserInfo/UserInfo";

type Props = {
    mail: string;
}

export default function User({ mail }: Props) {

    return (
        <>
            <div className="Create mt-3">
                <div className="row">
                    <div className="col">
                        <UserInfo mail="valeria.bassani@gmail.com" isUser={true} />
                    </div>
                </div>
                <div className="row mt-4 border-top pt-4">
                    <div className="col d-flex flex-column gap-3">
                        <div className="row">
                            <div className="col">
                                <div className="row gap-2">
                                    <h4>Recensioni da altri utenti</h4>
                                    <div className="col d-flex gap-2 align-items-center">
                                        <p>Punteggio complessivo: </p><h3 style={{ color: "var(--primary)" }}>4.8</h3>
                                    </div>
                                    <div className="col d-flex justify-content-end align-items-end">
                                        <p>Tot: 7 recensioni</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 d-flex justify-content-center">
                                <Review mail="bassannivaleria01@gmail.com" />
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Review mail="bassannivaleria01@gmail.com" />
                            </div>
                            <div className="col-4 d-flex justify-content-center">
                                <Review mail="bassannivaleria01@gmail.com" />
                            </div>
                        </div>
                        <div className="row text-end">
                            <div className="col">
                                <Link to={`/preferiti`} className="link">Vedi tutte</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
