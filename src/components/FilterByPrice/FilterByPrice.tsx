import { useState } from "react"
import Submit from "../SubmitButton/Submit";

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
            <form className="Fields" onSubmit={handleSubmit}>
                <h4>Prezzo</h4>
                <div className="Multiple">
                    <div className="Field" style={{ width: '46%' }}>
                        <label>Da</label>
                        <input type="text" name="min" placeholder="min" value={data.min} onChange={HandleChange}></input>
                    </div>
                    <div className="Field" style={{ width: '46%' }}>
                        <label>A</label>
                        <input type="text" name="max" placeholder="max" value={data.max} onChange={HandleChange}></input>
                    </div>
                </div>
                <div className="Actions" style={{ gap: '8px' }}>
                    <Submit label="Cerca" className='Confirm' />
                    <Submit label="Ripristina" onClick={handleReset} className='Reset' />
                    {/* <input type="submit" value="Cerca" className='ConfirmButton' ></input> */}
                    {/* <input type="submit" value="Ripristina" className='ResetButton' onClick={handleReset}></input> */}
                </div>
            </form>
        </>
    )
}