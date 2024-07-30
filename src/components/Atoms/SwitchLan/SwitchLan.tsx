import { useTranslation } from "react-i18next";
import "./SwitchLan.css"

export default function SwitchLan() {
    const { i18n } = useTranslation();
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <>
            <div className="language">
                <select value={i18n.language} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
            </div>
        </>
    )
}