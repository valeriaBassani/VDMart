import { useReducer, useState } from "react";
import './SignUpForm.css';
import { Link } from "react-router-dom";

type State = {
    firstname: string;
    lastname: string;
    phone: string;
    address: {
        street: string;
        number: string;
        city: string;
        provincia: string;
    },
    mail: string;
    password: string;
    confirmPassword: string;
    // errors: {
    //     firstname: string | null;
    //     lastname: string | null;
    //     phone: string | null;
    //     address: {
    //         street: string | null;
    //         number: string | null;
    //         city: string | null;
    //         provincia: string | null;
    //     },
    //     mail: string | null;
    //     password: string | null;
    //     confirmPassword: string | null;
    // }
}
const initialState: State = {
    firstname: "",
    lastname: "",
    phone: "",
    address: {
        street: "",
        number: "",
        city: "",
        provincia: "",
    },
    mail: "",
    password: "",
    confirmPassword: "",
    // errors: {
    //     firstname: "",
    //     lastname: "",
    //     phone: "",
    //     address: {
    //         street: "",
    //         number: "",
    //         city: "",
    //         provincia: "",
    //     },
    //     mail: "",
    //     password: "",
    //     confirmPassword: "",
    // }
};

type actionType =
    | { type: "change"; field: string; value: string }
    | { type: "catchError"; field: string; value: string }
    | { type: "clearError" }
    | { type: "changeAddress"; field: keyof State['address']; value: string }
    | { type: "submit" };

function reducer(state: State, action: actionType): State {
    switch (action.type) {
        case "change":
            return {
                ...state,
                [action.field]: action.value
            };
        case "changeAddress":
            return {
                ...state,
                address: {
                    ...state.address,
                    [action.field]: action.value
                }
            }
        case "submit":
            return state;
        default:
            return state;
    }
}

export default function SingUpForm() {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
            type: "change",
            field: e.target.name,
            value: e.target.value
        });
    }

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "changeAddress",
            field: e.target.name as keyof State['address'],
            value: e.target.value
        });
    };

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(state);

    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <form onSubmit={handleSubmit} className="Form">
                <div className="Fields">
                    <h4>Inizia a fare affari, crea il tuo account</h4>
                    <div className="Field">
                        <label>Nome*</label>
                        <input type="text" name="firstname" placeholder="nome" value={state.firstname} onChange={handleChange} ></input>
                    </div>
                    <div className="Field">
                        <label>Cognome*</label>
                        <input type="text" name="lastname" placeholder="cognome" value={state.lastname} onChange={handleChange} ></input>
                        <p className="Errors" >{ }</p>
                    </div>
                    <div className="Field">
                        <label>Telefono*</label>
                        <input type="text" name="phone" placeholder="telefono" value={state.phone} onChange={handleChange} ></input>
                        <p className="Errors" >{ }</p>
                    </div>
                    <div className="Multiple">
                        <div className="Field" style={{ width: '80%' }}>
                            <label>Indirizzo*</label>
                            <input type="text" name="street" placeholder="via" value={state.address.street} onChange={handleAddressChange} ></input>
                            <p className="Errors" >{ }</p>
                        </div>
                        <div className="Field" style={{ width: '20%' }}>
                            <label>n*</label>
                            <input type="text" name="number" placeholder="n." value={state.address.number} onChange={handleAddressChange} ></input>
                            <p className="Errors" >{ }</p>
                        </div>
                    </div>
                    <div className="Multiple">
                        <div className="Field" style={{ width: '80%' }}>
                            <label>Città*</label>
                            <input type="text" name="city" placeholder="città" value={state.address.city} onChange={handleAddressChange} ></input>
                            <p className="Errors" >{ }</p>
                        </div>
                        <div className="Field" style={{ width: '20%' }}>
                            <label>Pv*</label>
                            <input type="text" name="provincia" placeholder="Pv" value={state.address.provincia} onChange={handleAddressChange} ></input>
                            <p className="Errors" >{ }</p>
                        </div>
                    </div>
                    <div className="Field">
                        <label>Email*</label>
                        <input type="mail" name="mail" placeholder="mail" value={state.mail} onChange={handleChange} ></input>
                    </div>
                    <div className="Field">
                        <label>Password*</label>
                        <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} ></input>
                        <label className="Suggestion">la password deve essere di almeno 7 caratteri, 2 numeri e 1 carattere speciale</label>
                        <p className="Errors" >{ }</p>
                    </div>
                    <div className="Field">
                        <label>Conferma password*</label>
                        <input type="password" name="confirmPassword" placeholder="conferma password" value={state.confirmPassword} onChange={handleChange}></input>
                        <p className="Errors" >{ }</p>
                        <p style={{ marginBottom: '0' }}>* campo obbligatorio</p>
                    </div>
                </div>
                <input type="submit" value="Registrati" className="Primary"></input>
                <p>Sei già registrato? <Link to={`/login`} className="link">Accedi</Link></p>
            </form >
        </>
    )
};



//SENZA REDUCER
/*export default function SignUpForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        address: {
            street: "",
            streetNumber: "",
            city: "",
            provincia: "",
        },
        mail: "",
        password: "",
        confirmPassword: "",
    });

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const HandlestreetChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                street: e.target.value
            }
        });
    }
    const HandlestreetNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                streetNumber: e.target.value
            }
        });
    }
    const HandleCityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                city: e.target.value
            }
        });
    }
    const HandlePvChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            address: {
                ...formData.address,
                provincia: e.target.value
            }
        });
    }
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(formData.firstname, formData.lastname, formData.phone, formData.address.street);
    }*/

