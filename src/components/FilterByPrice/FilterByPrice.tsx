import { useState } from "react"
import Submit from "../SubmitButton/Submit";
import "./FilterByPrice.css"

export default function PriceFilter() {

    const [data, setData] = useState({
        min: 0,
        max: 0,
    });

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleReset = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setData({
            min: 0,
            max: 0,
        });
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(data.min, data.max);
    }

    return (
        <>
            <div className="row-sm Fields">
                <div className="col p-0">
                    <h4>Prezzo</h4>
                    <div className="row Range">
                        <div className="InputContainer">
                            <div className="In">
                                <label>Da</label>
                                <input type="text" name="min" placeholder="min" value={data.min} onChange={HandleChange}></input>
                            </div>
                            <div className="In">
                                <label>A</label>
                                <input type="text" name="max" placeholder="max" value={data.max} onChange={HandleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row py-3 Range">
                        <div className="InputContainer">
                            <Submit label="Cerca" className='Confirm' onClick={handleSubmit} />
                            <Submit label="Ripristina" onClick={handleReset} className='Reset' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}