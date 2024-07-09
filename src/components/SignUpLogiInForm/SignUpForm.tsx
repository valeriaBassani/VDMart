import { useReducer } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import Submit from "../SubmitButton/Submit";

type State = {
    firstname: string;
    lastname: string;
    date: string;
    phone: string;
    address: {
        street: string;
        number: string;
        city: string;
        provincia: string;
    };
    mail: string;
    password: string;
    confirmPassword: string;
};
const initialState: State = {
    firstname: "",
    lastname: "",
    date: "",
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
};

type actionType =
    | { type: "change"; field: string; value: string }
    | { type: "changeAddress"; field: keyof State["address"]; value: string }
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

// interface Errors{
//     firstname: boolean ;
//     lastname: boolean ;
//     phone: boolean ;
//     address: {
//         street: boolean;
//         number: boolean;
//         city: boolean ;
//         provincia: boolean ;
//     },
//     mail: boolean;
//     password: boolean ;
//     confirmPassword: boolean ;
// }

export default function SingUpForm() {
    // const [errors, setErrors] = useState<Errors>({
    //     firstname: false,
    //     lastname: false,
    //     phone: false,
    //     address: {
    //         street: false,
    //         number: false,
    //         city: false,
    //         provincia: false,
    //     },
    //     mail: false,
    //     password: false,
    //     confirmPassword: false,
    // });

    // const catchError = (state: State): void => {
    //     var hasErrors=false
    //     var states = (Object.keys(state) as Array<keyof typeof state>)
    //     var error = (Object.keys(errors) as Array<keyof typeof errors>)
    //     states.forEach(key => {
    //         if (state[key] === "") {
    //             error[key]=false;
    //             //     console.log(key);
    //             //     setErrors(prevErrors => ({
    //             //     ...prevErrors,
    //             //     [key]: true
    //             //  }));
    //         }
    //     })

    //     if (hasErrors) {
    //         setErrors(newErrors);
    //         console.log('Form has errors:', newErrors);
    //         // Puoi fare altro come mostrare un messaggio all'utente o altro
    //       } else {
    //         // Se non ci sono errori, procedi con l'invio della form
    //         console.log('No errori');
    //         // Esempio: invio dei dati a un server
    //       }
    // }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({
            type: "change",
            field: e.target.name,
            value: e.target.value,
        });
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "changeAddress",
            field: e.target.name as keyof State["address"],
            value: e.target.value,
        });
    };

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
    };

    // useEffect(() => {
    //     // Questo effetto si attiva ogni volta che 'test' cambia
    //     console.log("test", errors);
    //   }, [errors]);

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <form onSubmit={handleSubmit} className="Form">
                <div className="Fields container-lg">
                    <h4>Inizia a fare affari, crea il tuo account</h4>
                    <div className="Field">
                        <label>Nome*</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="nome"
                            value={state.firstname}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="Field">
                        <label>Cognome*</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="cognome"
                            value={state.lastname}
                            onChange={handleChange}
                        ></input>
                        <p className="Errors">{ }</p>
                    </div>
                    <div className="Field">
                        <label>Data di nascita*</label>
                        <input
                            type="text"
                            name="date"
                            placeholder="data"
                            value={state.date}
                            onChange={handleChange}
                        ></input>
                        <p className="Errors">{ }</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="Field">
                                <label>Indirizzo*</label>
                                <input
                                    type="text"
                                    name="street"
                                    placeholder="via"
                                    value={state.address.street}
                                    onChange={handleAddressChange}
                                ></input>
                                <p className="Errors">{ }</p>
                            </div>
                        </div>
                        <div className="col-2 p-0">
                            <div className="Field">
                                <label>n*</label>
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="n."
                                    value={state.address.number}
                                    onChange={handleAddressChange}
                                ></input>
                                <p className="Errors">{ }</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="Field">
                                <label>Città*</label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="città"
                                    value={state.address.city}
                                    onChange={handleAddressChange}
                                ></input>
                                <p className="Errors">{ }</p>
                            </div>
                        </div>
                        <div className="col-2 p-0">
                            <div className="Field">
                                <label>Pv*</label>
                                <input
                                    type="text"
                                    name="provincia"
                                    placeholder="Pv"
                                    value={state.address.provincia}
                                    onChange={handleAddressChange}
                                ></input>
                                <p className="Errors">{ }</p>
                            </div>
                        </div>
                    </div>
                    <div className="Field">
                        <label>Telefono*</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="telefono"
                            value={state.phone}
                            onChange={handleChange}
                        ></input>
                        <p className="Errors">{ }</p>
                    </div>
                    <div className="Field">
                        <label>Email*</label>
                        <input
                            type="mail"
                            name="mail"
                            placeholder="mail"
                            value={state.mail}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="Field">
                        <label>Password*</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={state.password}
                            onChange={handleChange}
                        ></input>
                        <label className="Suggestion">
                            la password deve essere di almeno 7 caratteri, 2 numeri e 1
                            carattere speciale
                        </label>
                        <p className="Errors">{ }</p>
                    </div>
                    <div className="Field">
                        <label>Conferma password*</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="conferma password"
                            value={state.confirmPassword}
                            onChange={handleChange}
                        ></input>
                        <p className="Errors">{ }</p>
                    </div>
                </div>
                <p>* campo obbligatorio</p>
                <Submit label="Registrati" className="Primary" />
                {/* <input type="submit" value="Registrati" className="Primary"></input> */}
                <p>
                    Sei già registrato?{" "}
                    <Link to={`/login`} className="link">
                        Accedi
                    </Link>
                </p>
            </form>
        </>
    );
}

// if (key === "address") {
//     console.log("address");
//     const addressKeys = Object.keys(state.address) as Array<keyof typeof state['address']>;
//     addressKeys.forEach(addressKey => {
//         if (state.address[addressKey] === "") {
//             errors.address = {
//                 ...errors.address,
//                 [addressKey]: true,
//             };
//         } else {
//             errors.address = {
//                 ...errors.address,
//                 [addressKey]: false,
//             };
//         }
//     });
// }else{

// Object.keys(state).forEach(key => {
//     if (state[key] === "") {
//         console.log(key, "vuoto");
//     }
// });

// errors: {
//     firstname: boolean | null;
//     lastname: boolean | null;
//     phone: boolean | null;
//     address: {
//         street: boolean | null;
//         number: boolean | null;
//         city: boolean | null;
//         provincia: boolean | null;
//     },
//     mail: boolean | null;
//     password: boolean | null;
//     confirmPassword: boolean | null;
// }

// const initialErrors: Errors = {
//     firstname: false,
//     lastname: false,
//     phone: false,
//     address: {
//         street: false,
//         number: false,
//         city: false,
//         provincia: false,
//     },
//     mail: false,
//     password: false,
//     confirmPassword: false,
// }

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
