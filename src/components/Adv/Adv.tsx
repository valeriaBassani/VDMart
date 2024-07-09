import ipad from "./ipad.jpg"
import './Adv.css';
import Favourite from "../Favourite/Favourite";
import Review from "../Review/Review";

export default function Adv() {
    return (
        <>
            <div className="Adv">
                <div className="col">
                    <div className="row">
                        <div className="col" >
                            <div className="row Info">
                                <div className="col-4">
                                    <img src={ipad}></img>
                                </div>
                                <div className="col d-flex flex-column gap-4 ps-0" >
                                    <div className="row ">
                                        <div className="col">
                                            <div className="row justify-content-between">
                                                <div className="col">
                                                    <h5 id="category">Tecnologia</h5>
                                                </div>
                                                <div className="col-auto Mobile">
                                                    <Favourite />
                                                </div>
                                            </div>
                                            <p id="date">07/10/2023</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h4>Ipad 3</h4>
                                        <div className="col d-flex gap-1">
                                            <h3 id="price">145,00€</h3>
                                            <div id="shipping"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto ps-0 Dsk">
                                    <Favourite />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex flex-column align-items-end " >
                            <Review mail="Ilaria" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}