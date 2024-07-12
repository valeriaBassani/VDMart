import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";

interface RadioButtonsProps {
    onOptionChange: (value: string) => void;
}

export default function Categories({ onOptionChange }: RadioButtonsProps) {

    const [selectedOption, setSelectedOption] = useState("vehicles");

    const handleOptionChange = (id: string) => {
        setSelectedOption(id);
    };

    return (
        <>
            <div className="Fields">
                <Checkbox label="Motori" id="vehicles" checked={selectedOption === 'vehicles'} onChange={handleOptionChange} />
                <Checkbox label="Tecnologia" id="tech" checked={selectedOption === 'tech'} onChange={handleOptionChange} />
                <Checkbox label="Abbigliamento" id="dresses" checked={selectedOption === 'dresses'} onChange={handleOptionChange} />
                <Checkbox label="Casa" id="home" checked={selectedOption === 'home'} onChange={handleOptionChange} />
                <Checkbox label="Animali" id="animals" checked={selectedOption === 'animals'} onChange={handleOptionChange} />
            </div>
        </>
    )
}

//  <div className={`RadioButton ${selectedOption === 'vehicles' ? 'checked' : ''}`}>
//                     <input
//                         id="vehicles"
//                         type="radio"
//                         value="vehicles"
//                         checked={selectedOption === 'vehicles'}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="vehicles">Motori</label>
//                 </div>

//                 <div className={`RadioButton ${selectedOption === 'tech' ? 'checked' : ''}`} >
//                     <input
//                         id="tech"
//                         type="radio"
//                         value="tech"
//                         checked={selectedOption === 'tech'}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="tech">Tecnologia</label>
//                 </div>
//                 <div className={`RadioButton ${selectedOption === 'dresses' ? 'checked' : ''}`}>
//                     <input
//                         id="dresses"
//                         type="radio"
//                         value="dresses"
//                         checked={selectedOption === 'dresses'}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="dresses">Abbigliamento</label>
//                 </div>
//                 <div className={`RadioButton ${selectedOption === 'home' ? 'checked' : ''}`}>
//                     <input
//                         id="home"
//                         type="radio"
//                         value="home"
//                         checked={selectedOption === 'home'}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="home">Casa</label>
//                 </div>
//                 <div className={`RadioButton ${selectedOption === 'animals' ? 'checked' : ''}`}>
//                     <input
//                         id="animals"
//                         type="radio"
//                         value="animals"
//                         checked={selectedOption === 'animals'}
//                         onChange={handleOptionChange}
//                     />
//                     <label htmlFor="animals">Animali</label>
//                 </div> 