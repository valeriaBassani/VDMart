import { useCallback } from 'react';
import './Toggle.css';
import { useTranslation } from 'react-i18next';
type Props = {
    checked: boolean
    onChange: (checked: boolean) => void
}
export default function Toggle({ checked, onChange }: Props) {
    const { t } = useTranslation();

    const handleChange = useCallback(() => {
        if (onChange) {
            onChange(!checked)
        }
    }, [checked, onChange])

    return (
        <>
            <div className="toggle">
                <input type="checkbox" id='toggle' name='spedizione disponibile' aria-checked={checked} className={checked ? "toggle--checked" : ""} onChange={handleChange}  ></input>
                <span className="Round"></span>
                <label htmlFor="toggle"><p>{checked ? t('toggle.yes') : t('toggle.no')}</p></label>
            </div>
        </>
    )

}