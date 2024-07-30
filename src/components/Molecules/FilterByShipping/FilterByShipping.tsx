import { useState } from "react"
import Toggle from "../../Atoms/Toggle/Toggle";
import { useTranslation } from "react-i18next";

export default function Shipping() {
    const { t } = useTranslation();
    const [checked, setIsChecked] = useState(false);

    return (
        <>
            <form className="filter">
                <h4>{t('shipping-filter.title')}</h4>
                <div className="row align-items-center">
                    <Toggle checked={checked} onChange={() => setIsChecked(!checked)} />
                </div>
            </form>
        </>
    )
}