import { useCallback } from 'react';
import './Toggle.css';
type Props = {
    checked: boolean
    onChange: (checked: boolean) => void
}
export default function Toggle({ checked, onChange }: Props) {

    const handleChange = useCallback(() => {
        if (onChange) {
            onChange(!checked)
        }
    }, [checked, onChange])

    return (
        <>
            <div className="toggle">
                <input type="checkbox" className={checked ? "toggle--checked" : ""} onChange={handleChange}  ></input>
                <span className="Round"></span>
                <label htmlFor="tech"><p>{checked ? "si" : "no"}</p></label>
            </div>
        </>
    )

}