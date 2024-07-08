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
                <div className="col">

                </div>
                <div className="col">
                    <Favourite />
                </div>
            </div>
        </>
    )
}