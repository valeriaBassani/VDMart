import { useState } from "react";
import './Categories.css';

interface RadioButtonsProps {
    onOptionChange: (value: string) => void;
}

export default function Categories({ onOptionChange }: RadioButtonsProps) {

    const [selectedOption, setSelectedOption] = useState('vehicles');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        onOptionChange(e.target.value);
    };

    return (
        <>
            <div className="Selection">
                <div className={`RadioButton ${selectedOption === 'vehicles' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        value="vehicles"
                        checked={selectedOption === 'vehicles'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="vehicles">Motori</label>
                </div>

                <div className={`RadioButton ${selectedOption === 'tech' ? 'checked' : ''}`} >
                    <input
                        type="radio"
                        value="tech"
                        checked={selectedOption === 'tech'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="tech">Tecnologia</label>
                </div>
                <div className={`RadioButton ${selectedOption === 'dresses' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        value="dresses"
                        checked={selectedOption === 'dresses'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="dresses">Abbigliamento</label>
                </div>
                <div className={`RadioButton ${selectedOption === 'home' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        value="home"
                        checked={selectedOption === 'home'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="home">Casa</label>
                </div>
                <div className={`RadioButton ${selectedOption === 'animals' ? 'checked' : ''}`}>
                    <input
                        type="radio"
                        value="animals"
                        checked={selectedOption === 'animals'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="animals">Animali</label>
                </div>
            </div>
        </>
    )
}