import { useState } from "react"
import "./InputField.css"

type Props = {
    label?: string,
    type: "text" | "number" | "password" | "email" | "tel",
    src?: string,
    name: string,
    placeholder: string,
    suggest?: string,
    required?: boolean,
    value?: string | number,
    onChange?: (id: string, value: string | number) => void,
}

export default function InputField({ label, type, name, placeholder, suggest, required, onChange, value }: Props) {

    const [inputValue, setInputValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.name, e.target.value);
        }
    };

    return (
        <>
            <div className="Field">
                <div className="Label">
                    <label>{label}</label>
                    {required && <p>*</p>}
                </div>
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={handleChange}></input>
                <label className="Suggestion">
                    {suggest}
                </label>
                <label className="Error">
                </label>
            </div>
        </>
    )
}

