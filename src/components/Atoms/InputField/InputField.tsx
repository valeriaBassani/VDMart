import { useCallback, useState } from "react"
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

    const [inputValue, setInputValue] = useState(value);
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     setInputValue(e.target.value);
    //     if (onChange) {
    //         onChange(e.target.name, e.target.value);
    //     }
    // };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.name, e.target.value);
        }
    }, [onChange])

    return (
        <>
            <div className="field">
                <div className="field__label">
                    <label htmlFor={name}>{label}</label>
                    {required && <p>*</p>}
                </div>
                <input type={type} id={name} name={name} placeholder={placeholder} aria-placeholder={placeholder} aria-label={name} aria-required={required} aria-describedby="input--suggestion" value={inputValue} onChange={handleChange}></input>
                <label id="input--suggestion" className="field__suggestion">{suggest}</label>
                <label className="field__error"></label>  {/* aggiungere aria-invalid come riferimento all'errore */}
            </div>
        </>
    )
}

