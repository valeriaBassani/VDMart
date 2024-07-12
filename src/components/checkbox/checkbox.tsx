import "./Checkbox.css"

type Props = {
    id: string,
    label: string,
    checked?: boolean,
    onChange?: (id: string, checked: boolean) => void,
}

export default function Checkbox({ id, label, checked, onChange }: Props) {

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(id, !checked);
        }
    };

    return (
        <>
            <div className="Checkbox" >
                <input
                    id={id}
                    type="checkbox"
                    value="vehicles"
                    checked={checked}
                    onChange={handleOptionChange}
                    className={`${checked ? 'checked' : ''}`}
                />
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}