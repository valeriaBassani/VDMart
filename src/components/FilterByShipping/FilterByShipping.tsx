import { useState } from "react"
import './FilterByShipping.css';

export default function Shipping() {

    const [checked, setIsChecked] = useState(false);

    return (
        <>
            <form className="Fields">
                <h4>Spedizone</h4>
                <div className="row align-items-center">
                    <div className="col-auto pe-0 Toggle">
                        <input type="checkbox" className={checked ? "checked" : ""} onChange={() => setIsChecked((prev) => !prev)}  ></input>
                        <span className="Round"></span>
                    </div>
                    <div className="col d-flex flex-column justify-content-center">
                        <label htmlFor="tech">Solo se disponibile</label>
                    </div>
                </div>
            </form>
        </>
    )
}