import { useCallback, useState } from "react";
import Checkbox from "../../Atoms/Checkbox/Checkbox";

interface RadioButtonsProps {
    onOptionChange: (value: string) => void;
}

export default function Categories({ onOptionChange }: RadioButtonsProps) {

    const [selectedOption, setSelectedOption] = useState("vehicles");

    // const handleOptionChange = (id: string) => {
    //     setSelectedOption(id);
    // };

    const handleOptionChange = useCallback((id: string) => {
        setSelectedOption(id);
        onOptionChange(id);
    }, [onOptionChange]);

    return (
        <>
            <div className="Fields" style={{ backgroundColor: "white" }}>
                <Checkbox label="Tecnologia" id="tech" checked={selectedOption === 'tech'} onChange={handleOptionChange} />
                <Checkbox label="Abbigliamento" id="dresses" checked={selectedOption === 'dresses'} onChange={handleOptionChange} />
                <Checkbox label="Casa" id="home" checked={selectedOption === 'home'} onChange={handleOptionChange} />
                <Checkbox label="Animali" id="animals" checked={selectedOption === 'animals'} onChange={handleOptionChange} />
            </div>
        </>
    )
}