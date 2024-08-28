import { useCallback, useState } from "react";
import Checkbox from "../../Atoms/Checkbox/Checkbox";

interface RadioButtonsProps {
    onOptionChange: (value: string) => void;
}

export default function Categories({ onOptionChange }: RadioButtonsProps) {

    const [selectedOption, setSelectedOption] = useState("vehicles");

    const handleOptionChange = useCallback((id: string) => {
        setSelectedOption(id);
        onOptionChange(id);
    }, [onOptionChange]);

    return (
        <>
            <fieldset className="Fields" style={{ backgroundColor: "white" }}>
                <label>Categoria*</label>
                <Checkbox label="Motori" id="vehicles" checked={selectedOption === 'vehicles'} onChange={handleOptionChange} />
                <Checkbox label="Tecnologia" id="tech" checked={selectedOption === 'tech'} onChange={handleOptionChange} />
                <Checkbox label="Abbigliamento" id="clothes" checked={selectedOption === 'clothes'} onChange={handleOptionChange} />
                <Checkbox label="Casa" id="home" checked={selectedOption === 'home'} onChange={handleOptionChange} />
                <Checkbox label="Animali" id="animals" checked={selectedOption === 'animals'} onChange={handleOptionChange} />
            </fieldset>
        </>
    )
}