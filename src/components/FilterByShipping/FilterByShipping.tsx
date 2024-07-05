import { useState } from "react"
import './SearchFilter.css';

export default function Shipping() {

    const [checked, setIsChecked] = useState(false);

    return (
        <>
            <form className="Fields" >
                <h4>Spedizone</h4>
                <div className="Toggle">
                    <input type="checkbox" className={checked ? "checked" : ""} onChange={() => setIsChecked((prev) => !prev)}  ></input>
                    <span className="Round"></span>
                    <label htmlFor="tech"><p>Solo se disponibile</p></label>
                </div>
            </form>
        </>
    )
}