import { useState } from "react";

type Props = {
    label?: string,
    name: string,
    maxLength: number,
    request?: boolean,
}
export default function TextArea({ label, name, maxLength, request }: Props) {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

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
            <div className="Field">
                <div className="Label">
                    <label>{label}</label>
                    {request && <p>*</p>}
                </div>
                <div className="row text-end">
                    <div className="col">
                        <p className='Suggestion'>{count}/{maxLength}</p>
                    </div>
                </div>
                <textarea name="description" value={inputValue} onChange={handleDescriptionChange} className='Description'></textarea>
            </div>
        </>
    )

}

