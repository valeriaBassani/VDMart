import { useState } from "react"
import Toggle from "../../Atoms/Toggle/Toggle";

export default function Shipping() {

    const [checked, setIsChecked] = useState(false);

    return (
        <>
            <form className="fields">
                <h4>Spedizone</h4>
                <div className="row align-items-center">
                    <Toggle checked={checked} onChange={() => setIsChecked(!checked)} />
                </div>
            </form>
        </>
    )
}