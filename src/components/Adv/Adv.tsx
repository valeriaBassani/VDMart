import ipad from "./ipad.jpg"
import './Adv.css';
import Favourite from "../Favourite/Favourite";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";

export default function Adv() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dettagli-annuncio');
    }
    return (
        <>
            <div className="Adv" onClick={handleClick}>
                <div className="row Info">
                    <div className="col-auto pe-0">
                        <img src={ipad} alt="Ipad"></img>
                    </div>
                    <div className="col d-flex flex-column gap-4 py-3">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 id="category">Tecnologia</h5>
                                <p id="date">07/10/2023</p>
                            </div>
                            <Favourite />
                        </div>
                        <div>
                            <h4>Ipad terza generazione nuovo</h4>
                            <div className="d-flex gap-1">
                                <h3 id="price">145,00€</h3>
                                <div id="shipping"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto Dsk py-3 px-4 d-flex flex-column gap-2">
                        <div className="col Dsk">
                            <Favourite />
                            <Review mail="Ilaria" />
                        </div>
                    </div>
                </div>
                <div className=" row d-flex flex-column align-items-start pb-3 px-4">
                    <div className="col Mobile">
                        <Review mail="Ilaria" />
                    </div>
                </div>
            </div>
        </>
    )
}