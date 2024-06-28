import { useState } from "react";
import './SignUpForm.css';
import { Link } from "react-router-dom";

export default function SignUpForm() {
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
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="Form">
                <label>Inzia a fare affari, crea il tuo account</label>
                <div className="Field">
                    <label>Nome*</label>
                    <input type="text" name="firstname" placeholder="firstname" value={formData.firstname} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Cognome*</label>
                    <input type="text" name="lastname" placeholder="lastname" value={formData.lastname} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Telefono*</label>
                    <input type="text" name="phone" placeholder="telefono" value={formData.phone} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Indirizzo*</label>
                    <input type="text" name="street" placeholder="street" value={formData.address.street} onChange={HandlestreetChange}></input>
                </div>
                <div className="Field">
                    <label>n*</label>
                    <input type="text" name="streetNumber" placeholder="n." value={formData.address.streetNumber} onChange={HandlestreetNumberChange}></input>
                </div>
                <div className="Field">
                    <label>ciry*</label>
                    <input type="text" name="city" placeholder="city" value={formData.address.city} onChange={HandleCityChange}></input>
                </div>
                <div className="Field">
                    <label>Pv*</label>
                    <input type="text" name="provincia" placeholder="Pv" value={formData.address.provincia} onChange={HandlePvChange}></input>
                </div>
                <div className="Field">
                    <label>Email*</label>
                    <input type="mail" name="mail" placeholder="mail" value={formData.mail} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Password*</label>
                    <input type="password" name="password" placeholder="password" value={formData.password} onChange={HandleChange}></input>
                    <label className="Suggestion">la password deve essere di almeno 7 caratteri, 2 numeri e 1 carattere speciale</label>
                </div>
                <div className="Field">
                    <label>Conferma password*</label>
                    <input type="password" name="confirmPassword" placeholder="conferma password" value={formData.confirmPassword} onChange={HandleChange}></input>
                </div>
                <p>* campo obbligatorio</p>
                <input type="submit"></input>
                <p>Sei già registrato? <Link to={`/login`}>Accedi</Link></p>
            </form>
        </>
    )
}

// function Button() {
//   let increment: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const [stato, Setstato] = useState(increment[0]);
//   const [message, Setmessage] = useState(false);

//   function handleClick() {
//     Setstato(stato + 1);
//     Setmessage(!message);
//   }

//   return (
//     <>
//       {/* <button onClick={() => handleClick()}>Increment</button>
//       <h1>{stato}</h1>
//       <h1>{message ? "True" : "False"}</h1> */}
//       <InputText placeholder="Nome" suggest="max 10 char" />
//       <InputText placeholder="Cognome" suggest="max 10 char" />
//     </>
//   );
// }

// interface State {
//   nome: string;
//   cognome: string;
//   displayName: string;
//   error: string;
// }

// class Form extends React.Component<{}, State> {

//   state = {
//     nome: "",
//     cognome: "",
//     displayName: "",
//     error: "",
//   };

//   onChangeName = (e: React.FormEvent<HTMLInputElement>): void => {
//     let value = e.currentTarget.value
//     if (value.length <= 10 || value.length < this.state.nome.length) {
//       this.setState({ nome: value });
//       this.setState({ error: "" })
//     } else {
//       this.setState({ error: "lunghezza massima 10 caratteri" })
//     }
//   };

//   onChangeSurname = (e: React.FormEvent<HTMLInputElement>): void => {
//     this.setState({ cognome: e.currentTarget.value });
//   };

//   handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
//     e.preventDefault();
//     this.setState({ displayName: "nome: " + this.state.nome + " cognome: " + this.state.cognome })

//   };

//   render() {
//     return (
//       <>
//         <form>
//           <input type="text" placeholder="Nome" value={this.state.nome} onChange={this.onChangeName}></input>
//           <input type="text" placeholder="Cognome" value={this.state.cognome} onChange={this.onChangeSurname}></input>
//           <h1>{this.state.nome}</h1>
//           <h1>{this.state.cognome}</h1>
//           <h1>{this.state.error}</h1>
//           <input type="submit" onClick={this.handleClick}></input>
//         </form>
//         <h1>{this.state.displayName}</h1>
//       </>
//     );
//   }
// }

// const [nome, Setnome] = useState("")
// const [cognome, Setcognome] = useState("")
// const [telefono, Settel] = useState("")
// const [indirizzo, Setindirizzo] = useState("")
// const [mail, Setmail] = useState("")
// const [psw, Setpsw] = useState("")
// const [confPsw, SetconfPsw] = useState("")
// const [dati, Setdati] = useState("")

// const handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     Setnome(e.currentTarget.value)
// }
// const handleSurnameChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     Setcognome(e.currentTarget.value)
// }
// const handleTelChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     Settel(e.currentTarget.value)
// }
// const handleIndirizzoChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     Setindirizzo(e.currentTarget.value)
// }
// const handleMailChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     Setmail(e.currentTarget.value)
// }
// const handlePswChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     Setpsw(e.currentTarget.value)
// }
// const handleconfPswChange = (e: React.FormEvent<HTMLInputElement>): void => {
//     SetconfPsw(e.currentTarget.value)
// }

// const [formData, setFormData] = useState({
//     nome: "",
//     cognome: "",
//     tel: "",
//     indirizzo: {
//         via: "",
//         streetNumber: "",
//         city: "",
//         provincia: "",
//     },
//     mail: "",
//     psw: "",
//     confPsw: "",
// });

