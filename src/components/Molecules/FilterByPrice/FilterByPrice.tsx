import { useState } from "react"
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";


export default function PriceFilter() {

    const [data, setData] = useState({
        min: 0,
        max: 0,
    });

    const handleChange = (id: string, value: string | number) => {
        console.log("here");
        setData({
            ...data,
            [id]: value,
        });
    };

    const handleReset = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setData({
            min: 0,
            max: 0,
        });
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(data);
        console.log(data.min, data.max);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="filter">
                <h4>Prezzo</h4>
                <div className="row">
                    <div className="col-6">
                        <InputField type="text" name="min" placeholder="min" value={data.min} onChange={handleChange}></InputField>
                    </div>
                    <div className="col-6">
                        <InputField type="text" name="max" placeholder="max" value={data.max} onChange={handleChange}></InputField>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Submit label="Cerca" className='btn--confirm' />
                    </div>
                    <div className="col">
                        <Submit label="Ripristina" onClick={handleReset} className='btn--reset' />
                    </div>
                </div>
            </form>
        </>
    )
}