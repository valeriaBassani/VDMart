import { useState } from "react";
import "./textArea.css"

type Props = {
    label?: string,
    name: string,
    value?: string,
    maxLength: number,
    required?: boolean,
}
export default function TextArea({ label, name, maxLength, value, required }: Props) {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(value);

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const newValue = e.target.value;
        const isDeleting = newValue.length < count;
        if (newValue.length <= maxLength || isDeleting) {
            setInputValue(e.target.value);
            setCount(newValue.length);
        }
    }

    return (
        <>
            <div className="field">
                <div className="field__label">
                    <label>{label}</label>
                    {required && <p>*</p>}
                </div>
                <div className="row text-end">
                    <div className="col">
                        <p className='field__suggestion'>{count}/{maxLength}</p>
                    </div>
                </div>
                <textarea name="Description" value={inputValue} onChange={handleDescriptionChange}></textarea>
            </div>
        </>
    )

}

