import { useCallback, useState } from "react";
import Checkbox from "../../Atoms/Checkbox/Checkbox";
import { useTranslation } from "react-i18next";

interface RadioButtonsProps {
    onOptionChange: (value: string) => void;
}

export default function Categories({ onOptionChange }: RadioButtonsProps) {

    const { t } = useTranslation()
    const [selectedOption, setSelectedOption] = useState("vehicles");

    const handleOptionChange = useCallback((id: string) => {
        setSelectedOption(id);
        onOptionChange(id);
    }, [onOptionChange]);

    return (
        <>
            <fieldset className="Fields" style={{ backgroundColor: "white" }}>
                <label>{t("category-filter.title")}*</label>
                <Checkbox label={t("category-filter.vehicles")} id="vehicles" checked={selectedOption === 'vehicles'} onChange={handleOptionChange} />
                <Checkbox label={t("category-filter.tech")} id="tech" checked={selectedOption === 'tech'} onChange={handleOptionChange} />
                <Checkbox label={t("category-filter.clothes")} id="clothes" checked={selectedOption === 'clothes'} onChange={handleOptionChange} />
                <Checkbox label={t("category-filter.home")} id="home" checked={selectedOption === 'home'} onChange={handleOptionChange} />
                <Checkbox label={t("category-filter.animals")} id="animals" checked={selectedOption === 'animals'} onChange={handleOptionChange} />
            </fieldset>
        </>
    )
}