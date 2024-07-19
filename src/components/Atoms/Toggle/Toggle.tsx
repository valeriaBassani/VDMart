import './Toggle.css';
type Props = {
    checked: boolean
    onChange: (checked: boolean) => void
}
export default function Toggle({ checked, onChange }: Props) {
    const handleChange = () => {
        if (onChange) {
            onChange(!checked)
        }
    }

    return (
        <>
            <div className="toggle">
                <input type="checkbox" className={checked ? "checked" : ""} onChange={handleChange}  ></input>
                <span className="Round"></span>
                <label htmlFor="tech"><p>{checked ? "si" : "no"}</p></label>
            </div>
        </>
    )

}