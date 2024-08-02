import { useCallback, useState } from "react"
import Toggle from "../../Atoms/Toggle/Toggle";
import { useTranslation } from "react-i18next";

type Props = {
    onClick: (shipping: boolean) => void
}

export default function Shipping({ onClick }: Props) {
    const { t } = useTranslation();
    const [checked, setIsChecked] = useState(false);

    const handleChange = useCallback(() => {
        setIsChecked(!checked)
        onClick(checked)
    }, [checked, onClick])

    return (
        <>
            <form className="filter">
                <h4>{t('shipping-filter.title')}</h4>
                <div className="row align-items-center">
                    <Toggle checked={checked} onChange={handleChange} />
                </div>
            </form>
        </>
    )
}