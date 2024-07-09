import { useState } from 'react';
import './FiletrByCategory.css';
import Submit from '../SubmitButton/Submit';

type CheckedState = {
    vehicles: boolean;
    tech: boolean;
    home: boolean;
    dresses: boolean;
    animals: boolean;
};


export default function CategoryFilter() {

    const [checked, setIsChecked] = useState<CheckedState>({
        vehicles: false,
        tech: false,
        home: false,
        dresses: false,
        animals: false,
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name } = e.target;
        setIsChecked(prevState => ({
            ...prevState,
            [name]: !prevState[name as keyof CheckedState]  // Inverti lo stato corrente per il nome della checkbox cliccata
        }));
    };

    const handleReset = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setIsChecked({
            vehicles: false,
            tech: false,
            home: false,
            dresses: false,
            animals: false,
        });
    }

    return (
        <div className="Fields">
            <h4>Categoria</h4>
            <div className="Checkbox">
                <input type="checkbox" className={checked.vehicles ? "checked" : ""} id="vehicles" name="vehicles" value="vehicles" checked={checked.vehicles} onChange={handleChange} />
                <label htmlFor="vehicles">Motori</label>
            </div>
            <div className="Checkbox">
                <input type="checkbox" className={checked.tech ? "checked" : ""} name="tech" value="tech" checked={checked.tech} onChange={handleChange}></input>
                <label htmlFor="tech">Tecnologia</label>
            </div>
            <div className="Checkbox">
                <input type="checkbox" className={checked.dresses ? "checked" : ""} name="dresses" value="dresses" checked={checked.dresses} onChange={handleChange}></input>
                <label htmlFor="dresses">Abbigliamento</label>
            </div>
            <div className="Checkbox">
                <input type="checkbox" className={checked.home ? "checked" : ""} name="home" value="home" checked={checked.home} onChange={handleChange}></input>
                <label htmlFor="home">Casa</label>
            </div>
            <div className="Checkbox">
                <input type="checkbox" className={checked.animals ? "checked" : ""} name="animals" value="animals" checked={checked.animals} onChange={handleChange}></input>
                <label htmlFor="animals">Animali</label>
            </div>
            <Submit label="Ripristina" onClick={handleReset} className='Confirm' />
            {/* <input type="submit" value="Ripristina" className='ResetButton' onClick={handleSubmit}></input> */}
        </div>
    )
}