import './FilterMobile.css';
import { useState } from "react";
import CategoryFilter from "../FiletrByCategory/FiletrByCategory";
import PriceFilter from "../FilterByPrice/FilterByPrice";
import Shipping from "../FilterByShipping/FilterByShipping";
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

export default function FilterMobile() {
    const [visible, setVisible] = useState(false);

    const handleClick = (e: React.SyntheticEvent): void => {
        setVisible(!visible);
    };

    return (
        <>
            <h4>Ricerca un articolo</h4>
            <div className="row">
                <div className="col">
                    <SearchBar />
                </div>
                <div className="col-3">
                    <Button label='Filtri' className='Primary' onClick={handleClick}></Button>
                </div>
            </div>
            <div className="container-fluid p-4">
                <div className={`row text-end justify-content-end ${visible ? 'Visible' : 'Invisible'}`}>
                    <div className="col-3 d-flex gap-3 More">
                        <CategoryFilter />
                        <PriceFilter />
                        <Shipping />
                    </div>
                </div>
            </div>
        </>

    )
}