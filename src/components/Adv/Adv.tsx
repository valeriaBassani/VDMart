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
                                <div className="col-auto pe-0">
                                    <img src={ipad}></img>
                                </div>
                                <div className="col d-flex flex-column gap-4 py-3" >
                                    <div className="row ">
                                        <div className="col">
                                            <div className="row justify-content-between">
                                                <div className="col">
                                                    <h5 id="category">Tecnologia</h5>
                                                </div>
                                                <div className="col-auto MobileFilter ps-0 pe-4">
                                                    <Favourite />
                                                </div>
                                            </div>
                                            <p id="date">07/10/2023</p>
                                        </div>
                                    </div>
                                    <div className="row gap-2">
                                        <h4>Ipad terza generazione nuovo</h4>
                                        <div className="col d-flex gap-1">
                                            <h3 id="price">145,00€</h3>
                                            <div id="shipping"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto Dsk py-3 px-4">
                                    <div className="row">
                                        <div className="col">
                                            <Favourite />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Review mail="Ilaria" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row MobileFilter">
                        <div className="col d-flex flex-column align-items-start pb-3 px-4" >
                            <Review mail="Ilaria" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}