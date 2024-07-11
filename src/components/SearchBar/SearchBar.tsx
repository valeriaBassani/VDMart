import { useState } from "react";
import "./SearchBar.css"
import lens from "./lens.svg"
import CategoryFilter from "../FiletrByCategory/FiletrByCategory";
import PriceFilter from "../FilterByPrice/FilterByPrice";
import Shipping from "../FilterByShipping/FilterByShipping";
import Submit from "../SubmitButton/Submit";

export default function SearchBar() {

    const [visible, setVisible] = useState(false);

    const handleClick = (e: React.SyntheticEvent): void => {
        setVisible(!visible);
    };
    return (
        <>
            <div className="row ">
                <div className="col d-flex flex-column ">
                    <div className="row align-items-end gap-2">
                        <div className="col p-0">
                            <h4>Ricerca un articolo</h4>
                            <div className="Search">
                                <input type="text" placeholder="Nome, marca, caratteristica"></input>
                                <img src={lens} className="Lens"></img>
                            </div>
                        </div>
                        <div className="col-auto p-0 MobileFilter" >
                            <Submit label='Filtri' className='Primary' onClick={handleClick} />
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