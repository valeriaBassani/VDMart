import "./SignUpForm.css";
import { Link } from "react-router-dom";
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { createUser } from './../../../storesData/account/index';
import { registerUser } from './../../../storesData/account/index';

export default function SingUpForm() {
    const { t } = useTranslation();

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        // const formData = new FormData(e.currentTarget);

        // const user: User = {} as User;

        // formData.forEach((value, key) => {
        //     //console.log(`${key}: ${value}`);
        //     user[key] = value;
        // });

        const user = createUser();
        registerUser(user)
            .then((result) => {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                users.push(result);
                localStorage.setItem('users', JSON.stringify(users));
            })
            .catch((error) => {
                console.error('Errore durante la registrazione:', error);
            });

    }, []);

    return (
        <>
            <form onSubmit={handleSubmit} className="form" aria-labelledby="signup--form">
                <div className=" container-md main__section">
                    <h4 id="signup--form">{t('signUp.subtitle')}</h4>
                    <InputField label={t('signUp.name')} type="text" name="name" placeholder={t('signUp.name')} required={true}></InputField>
                    <InputField label={t('signUp.lastname')} type="text" name="lastname" placeholder={t('signUp.lastname')} required={true}></InputField>
                    <div className="row">
                        <div className="col">
                            <InputField label={t('signUp.address')} type="text" name="street" placeholder={t('signUp.address')} required={true}></InputField>
                        </div>
                        <div className="col-4">
                            <InputField label={t('signUp.number')} type="number" name="number" placeholder={t('signUp.number')} required={true}></InputField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <InputField label={t('signUp.city')} type="text" name="city" placeholder={t('signUp.city')} required={true}></InputField>
                        </div>
                        <div className="col-4">
                            <InputField label={t('signUp.state')} type="text" name="provincia" placeholder={t('signUp.state')} required={true}></InputField>
                        </div>
                    </div>
                    <InputField label={t('signUp.phone')} type="tel" name="phone" placeholder={t('signUp.phone')} required={true}></InputField>
                    <InputField label="Email" type="email" name="mail" placeholder="Email" required={true}></InputField>
                    <InputField label="Password" type="password" name="password" placeholder="Password" required={true} suggest="la password deve essere di almeno 7 caratteri, contenere 2 numeri e 1 carattere speciale"></InputField>
                    <InputField label={t('signUp.confirm-psw')} type="password" name="confirmPassword" required={true} placeholder="Password"></InputField>
                </div>
                <p>* {t('signUp.obbligatory-field')}</p>
                <Submit label={t('signUp.register')} className='btn--primary' />
                <p>{t('signUp.already')}<Link to={`/login`} className="link">{t('navbar.logIn')}</Link></p>
            </form>
        </>
    );
}

//reducer
// type State = {
//     firstname: string;
//     lastname: string;
//     date: string;
//     phone: string;
//     address: {
//         street: string;
//         number: string;
//         city: string;
//         provincia: string;
//     };
//     mail: string;
//     password: string;
//     confirmPassword: string;
// };
// const initialState: State = {
//     firstname: "",
//     lastname: "",
//     date: "",
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
// };

// type actionType =
//     | { type: "change"; field: string; value: string }
//     | { type: "changeAddress"; field: keyof State["address"]; value: string }
//     | { type: "submit" };

// function reducer(state: State, action: actionType): State {
//     switch (action.type) {
//         case "change":
//             return {
//                 ...state,
//                 [action.field]: action.value,
//             };
//         case "submit":
//             return state;
//         default:
//             return state;
//     }
// }

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

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     dispatch({
//         type: "change",
//         field: e.target.name,
//         value: e.target.value,
//     });
// };

// const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//         type: "changeAddress",
//         field: e.target.name as keyof State["address"],
//         value: e.target.value,
//     });
// };

// const handleSubmit = (e: React.SyntheticEvent): void => {
//     e.preventDefault();
// };

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

//const [state, dispatch] = useReducer(reducer, initialState);


//  <form onSubmit={handleSubmit} className="Form">
//                 <div className="Fields container-lg">
//                     <h4>Inizia a fare affari, crea il tuo account</h4>
//                     <div className="Field">
//                         <label>Nome*</label>
//                         <input
//                             type="text"
//                             name="firstname"
//                             placeholder="nome"
//                             value={state.firstname}
//                             onChange={handleChange}
//                         ></input>
//                     </div>
//                     <div className="Field">
//                         <label>Cognome*</label>
//                         <input
//                             type="text"
//                             name="lastname"
//                             placeholder="cognome"
//                             value={state.lastname}
//                             onChange={handleChange}
//                         ></input>
//                         <p className="Errors">{ }</p>
//                     </div>
//                     <div className="Field">
//                         <label>Data di nascita*</label>
//                         <input
//                             type="text"
//                             name="date"
//                             placeholder="data"
//                             value={state.date}
//                             onChange={handleChange}
//                         ></input>
//                         <p className="Errors">{ }</p>
//                     </div>
//                     <div className="row">
//                         <div className="col">
//                             <div className="Field">
//                                 <label>Indirizzo*</label>
//                                 <input
//                                     type="text"
//                                     name="street"
//                                     placeholder="via"
//                                     value={state.address.street}
//                                     onChange={handleAddressChange}
//                                 ></input>
//                                 <p className="Errors">{ }</p>
//                             </div>
//                         </div>
//                         <div className="col-2 p-0">
//                             <div className="Field">
//                                 <label>n*</label>
//                                 <input
//                                     type="text"
//                                     name="number"
//                                     placeholder="n."
//                                     value={state.address.number}
//                                     onChange={handleAddressChange}
//                                 ></input>
//                                 <p className="Errors">{ }</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col">
//                             <div className="Field">
//                                 <label>Città*</label>
//                                 <input
//                                     type="text"
//                                     name="city"
//                                     placeholder="città"
//                                     value={state.address.city}
//                                     onChange={handleAddressChange}
//                                 ></input>
//                                 <p className="Errors">{ }</p>
//                             </div>
//                         </div>
//                         <div className="col-2 p-0">
//                             <div className="Field">
//                                 <label>Pv*</label>
//                                 <input
//                                     type="text"
//                                     name="provincia"
//                                     placeholder="Pv"
//                                     value={state.address.provincia}
//                                     onChange={handleAddressChange}
//                                 ></input>
//                                 <p className="Errors">{ }</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="Field">
//                         <label>Telefono*</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             placeholder="telefono"
//                             value={state.phone}
//                             onChange={handleChange}
//                         ></input>
//                         <p className="Errors">{ }</p>
//                     </div>
//                     <div className="Field">
//                         <label>Email*</label>
//                         <input
//                             type="mail"
//                             name="mail"
//                             placeholder="mail"
//                             value={state.mail}
//                             onChange={handleChange}
//                         ></input>
//                     </div>
//                     <div className="Field">
//                         <label>Password*</label>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="password"
//                             value={state.password}
//                             onChange={handleChange}
//                         ></input>
//                         <label className="Suggestion">
//                             la password deve essere di almeno 7 caratteri, 2 numeri e 1
//                             carattere speciale
//                         </label>
//                         <p className="Errors">{ }</p>
//                     </div>
//                     <div className="Field">
//                         <label>Conferma password*</label>
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="conferma password"
//                             value={state.confirmPassword}
//                             onChange={handleChange}
//                         ></input>
//                         <p className="Errors">{ }</p>
//                     </div>
//                 </div>
//                 <p>* campo obbligatorio</p>
//                 <Submit label="Registrati" className="Primary" />
//                 <input type="submit" value="Registrati" className="Primary"></input>
//                 <p>
//                     Sei già registrato?{" "}
//                     <Link to={`/login`} className="link">
//                         Accedi
//                     </Link>
//                 </p>
//             </form>

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
