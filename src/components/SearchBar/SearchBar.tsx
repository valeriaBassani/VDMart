import { useState } from "react";
import Button from "../Button/Button"
import "./SearchBar.css"
import lens from "./lens.svg"
import CategoryFilter from "../FiletrByCategory/FiletrByCategory";
import PriceFilter from "../FilterByPrice/FilterByPrice";
import Shipping from "../FilterByShipping/FilterByShipping";

export default function SearchBar() {

    const [visible, setVisible] = useState(false);

    const handleClick = (e: React.SyntheticEvent): void => {
        setVisible(!visible);
    };
    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column gap-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="Search">
                                <input type="text" placeholder="Nome, marca, caratteristica"></input>
                                <img src={lens} className="Lens"></img>
                            </div>
                        </div>
                        <div className="col-3 Mobile">
                            <Button label='Filtri' className='Primary' onClick={handleClick}></Button>
                        </div>
                    </div>
                    <div className={`row ${visible ? 'Visible' : 'Invisible'}`}>
                        <div className="col d-flex flex-column gap-2">
                            <CategoryFilter />
                            <PriceFilter />
                            <Shipping />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}