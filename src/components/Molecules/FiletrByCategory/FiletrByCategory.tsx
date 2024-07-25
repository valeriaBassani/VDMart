import { useCallback, useState } from 'react';
import Submit from '../../Atoms/SubmitButton/Submit';
import Checkbox from '../../Atoms/Checkbox/Checkbox';
import "./Filter.css"

type CheckedState = {
    vehicles: boolean;
    tech: boolean;
    home: boolean;
    dresses: boolean;
    animals: boolean;
};

export default function CategoryFilter() {

    const [isChecked, setIsChecked] = useState<CheckedState>({
        vehicles: false,
        tech: false,
        home: false,
        dresses: false,
        animals: false,
    });

    const handleOptionChange = useCallback((id: string, checked: boolean) => {
        setIsChecked({
            ...isChecked,
            [id]: checked,
        });
    }, [isChecked]);

    const handleReset = useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        setIsChecked({
            vehicles: false,
            tech: false,
            home: false,
            dresses: false,
            animals: false,
        });
    }, [])

    return (
        <div className="filter">
            <h4>Categoria</h4>
            <Checkbox label="Motori" id="vehicles" checked={isChecked.vehicles} onChange={handleOptionChange} />
            <Checkbox label="Tecnologia" id="tech" checked={isChecked.tech} onChange={handleOptionChange} />
            <Checkbox label="Abbigliamento" id="dresses" checked={isChecked.dresses} onChange={handleOptionChange} />
            <Checkbox label="Casa" id="home" checked={isChecked.home} onChange={handleOptionChange} />
            <Checkbox label="Animali" id="animals" checked={isChecked.animals} onChange={handleOptionChange} />
            <Submit label="Ripristina" className='btn--reset' onClick={handleReset} />
        </div>
    )
}
