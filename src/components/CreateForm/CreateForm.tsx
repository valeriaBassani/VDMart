import { useReducer, useState } from 'react';
import Button from '../Button/Button';
import './CreateForm.css';
import Categories from '../Categories/Categories';

type State = {
    article: string;
    price: string;
    phone: string;
    category: string;
    shipping: boolean;
    description: string;
};
const initialState: State = {
    article: "",
    price: "",
    phone: "",
    category: "string",
    shipping: false,
    description: "",
};

type actionType =
    | { type: "change"; field: string; value: string }
    | { type: "submit" };

function reducer(state: State, action: actionType): State {
    switch (action.type) {
        case "change":
            return {
                ...state,
                [action.field]: action.value,
            };
        case "submit":
            return state;
        default:
            return state;
    }
}

export default function CreateForm() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
            type: "change",
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(state);

    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const [checked, setIsChecked] = useState(false);
    return (
        <>
            <div className="container-lg Create">
                <div className="row gap-3">
                    <div className="col Section">
                        <div className="Form">
                            <div className="Field">
                                <label>Il tuo articolo*</label>
                                <input type="text" name="article" placeholder="titolo" value={state.article} onChange={handleChange} ></input>
                            </div>
                            <div className="Field">
                                <div className="row p-2 gap-2 align-items-end">
                                    <div className="col p-0">
                                        <div className="Field">
                                            <label>Prezzo di vendita*</label>
                                            <input
                                                type="text"
                                                name="price"
                                                placeholder="0000"
                                                value={state.price} onChange={handleChange}
                                            ></input>
                                            <p className="Errors">{ }</p>
                                        </div>
                                    </div>
                                    <div className="col-1 p-0">
                                        <div className="Field">
                                            <input
                                                type="text"
                                                name="number"
                                                placeholder="n."
                                                value='$'
                                            ></input>
                                            <p className="Errors">{ }</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <label>Categoria*</label>
                            <Categories onOptionChange={handleOptionChange} />
                            {/* <p>Opzione:{selectedOption}</p> */}
                            <div className="row">
                                <div className="col">
                                    <div className="Field">
                                        <label>Disponibile per la spedizione*</label>
                                        <label className="Suggestion">
                                            Scegli se fornire l’opzione di spedizione o se preferisci lo scambio a mano
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="Toggle">
                                        <input type="checkbox" className={checked ? "checked" : ""} onChange={() => setIsChecked((prev) => !prev)}  ></input>
                                        <span className="Round"></span>
                                        <label htmlFor="tech"><p>{checked ? "si" : "no"}</p></label>
                                    </div>
                                </div>
                            </div>
                            <div className="Form">
                                <div className="Field">
                                    <label>Numero di telefono per il contatto*</label>
                                    <input type="text" name="phone" placeholder="Telefono" value={state.phone} onChange={handleChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col Section">
                        <div className="row">
                            <div className="col">
                                <div className="Form">
                                    <div className="Field">
                                        <div className="row">
                                            <div className="col">
                                                <label>Immagini*</label>
                                                <p>Puoi caricare da un minimo di 2 ad un massimo di 6 immagini</p>
                                            </div>
                                        </div>
                                        <div className="row text-end">
                                            <div className="col">
                                                <p>Caricate 0/6</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex flex-wrap gap-2">
                                                <div className="Next"></div>
                                                <div className="Img"></div>
                                                <div className="Img"></div>
                                                <div className="Img"></div>
                                                <div className="Img"></div>
                                                <div className="Img"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Field">
                                        <label>Descrizione*</label>
                                        <input type="text" name="description" placeholder="Testo" value={state.description} onChange={handleChange} style={{ height: '7em', textAlign: 'start' }}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>* campo obbligatorio</p>
                        <Button label="Pubblica l'annuncio" className="Primary" onClick={handleSubmit} />
                    </div>
                </div>
            </div >
        </>
    )

}