import ipad from "./ipad.jpg"
import './Adv.css';
import Favourite from "../Favourite/Favourite";

type Props = {
    article: string;
    category: string;
    date: Date;
    price: number;
    shipping: boolean;
    favourite: boolean;
    seller: string;
}

export default function Adv() {
    return (
        <>
            <div className="row Adv">
                <div className="col">
                    <img src={ipad}></img>
                </div>
                <div className="col d-flex flex-column gap-3">
                    <div className="row">
                        <div className="col">
                            <p id="category">Tecnologia</p>
                            <p>07/10/2023</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h4>Ipad 3</h4>
                            <div className="row">
                                <div className="col d-flex gap-2">
                                    <h3 id="price">145,00€</h3>
                                    <div id="shipping"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <Favourite />
                </div>
            </div>
        </>
    )
}