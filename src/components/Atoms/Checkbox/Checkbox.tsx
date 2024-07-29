import { useCallback, useState } from "react";
import "./Checkbox.css"

type Props = {
    id: string,
    label: string,
    checked?: boolean,
    onChange?: (id: string, checked: boolean) => void,
}

export default function Checkbox({ id, label, checked, onChange }: Props) {
    const [check, setCheck] = useState(false)

    // const handleOptionChange = () => {
    //     if (onChange) {
    //         onChange(id, !checked);
    //     } else {
    //         setCheck(!check)
    //     }
    // };

    const handleOptionChange = useCallback(() => {
        if (onChange) {
            onChange(id, !checked);
        } else {
            setCheck(!check)
        }
    }, [check, checked, id, onChange]);

    return (
        <>
            <div className="checkbox"  >
                <input
                    id={id}
                    type="checkbox"
                    value={id}
                    aria-checked={checked}
                    checked={checked}
                    onChange={handleOptionChange}
                    className={`checkbox ${checked || check ? 'checkbox--checked' : ''}`}
                    aria-label={label}
                />
                <label htmlFor={id} aria-label={label}>{label}</label>
            </div>
        </>
    )
}