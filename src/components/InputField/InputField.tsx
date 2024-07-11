import { useState } from "react"
import "./InputField.css"

type Props = {
    label?: string,
    type: string,
    name: string,
    placeholder: string,
    suggest?: string,
    request?: boolean,
}

export default function InputField({ label, type, name, placeholder, suggest, request }: Props) {

    const [inputValue, setInputValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <div className="Field">
                <div className="Label">
                    <label>{label}</label>
                    {request && <p>*</p>}
                </div>
                <input type={type} name={name} placeholder={placeholder} value={inputValue} onChange={handleChange}></input>
                <label className="Suggestion">
                    {suggest}
                </label>
                <label className="Error">
                </label>
            </div>
        </>
    )
}

