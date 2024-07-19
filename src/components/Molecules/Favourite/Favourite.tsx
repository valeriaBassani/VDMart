import './Favourite.css';
import { useState } from "react";

export default function Favourite() {
    const [favourite, setAsFavourite] = useState(false);

    const handleClick = (e: React.SyntheticEvent): void => {
        e.stopPropagation();
        setAsFavourite(!favourite);
    };
    return (
        <>
            <div className="favourite">
                <button className={` ${favourite ? 'favourite--active' : ''}`} onClick={handleClick} >
                    <label>{favourite ? 'Aggiunto' : 'Preferiti'}</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div >
        </>
    )
}