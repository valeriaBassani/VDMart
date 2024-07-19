import { useState } from "react";
import "./Checkbox.css"

type Props = {
    id: string,
    label: string,
    checked?: boolean,
    onChange?: (id: string, checked: boolean) => void,
}

export default function Checkbox({ id, label, checked, onChange }: Props) {
    const [check, setCheck] = useState(false)

    const handleOptionChange = () => {
        if (onChange) {
            onChange(id, !checked);
        } else {
            setCheck(!check)
        }
    };

    return (
        <>
            <div className="checkbox" >
                <input
                    id={id}
                    type="checkbox"
                    value="vehicles"
                    checked={checked}
                    onChange={handleOptionChange}
                    className={`checkbox ${checked || check ? 'checkbox--checked' : ''}`}
                />
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}