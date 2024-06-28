import { useState } from "react";
import './Components.css';

export default function SingIn() {
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

    const [formData, setFormData] = useState({
        nome: "",
        cognome: "",
        tel: "",
        indirizzo: {
            via: "",
            civico: "",
            città: "",
            provincia: "",
        },
        mail: "",
        psw: "",
        confPsw: "",
    });
    const dati = formData.nome + ' ' + formData.cognome; //variabie di stato sarebbe ridondante

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const HandleViaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            indirizzo: {
                ...formData.indirizzo,
                via: e.target.value
            }
        });
    }
    const HandleCivicoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            indirizzo: {
                ...formData.indirizzo,
                civico: e.target.value
            }
        });
    }
    const HandleCittaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            indirizzo: {
                ...formData.indirizzo,
                città: e.target.value
            }
        });
    }
    const HandlePvChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            indirizzo: {
                ...formData.indirizzo,
                provincia: e.target.value
            }
        });
    }
    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(formData.nome, formData.cognome, formData.tel, formData.indirizzo.via);
    }

    return (
        <>
            <h4>Signup</h4>
            <h2>Benvenuto!</h2>
            <form onSubmit={handleSubmit} className="Form">
                <label>Inzia a fare affari, crea il tuo account</label>
                <div className="Field">
                    <label>Nome*</label>
                    <input type="text" name="nome" placeholder="nome" value={formData.nome} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Cognome*</label>
                    <input type="text" name="cognome" placeholder="cognome" value={formData.cognome} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Telefono*</label>
                    <input type="text" name="tel" placeholder="telefono" value={formData.tel} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Indirizzo*</label>
                    <input type="text" name="via" placeholder="via" value={formData.indirizzo.via} onChange={HandleViaChange}></input>
                </div>
                <div className="Field">
                    <label>n*</label>
                    <input type="text" name="civico" placeholder="n." value={formData.indirizzo.civico} onChange={HandleCivicoChange}></input>
                </div>
                <div className="Field">
                    <label>Città*</label>
                    <input type="text" name="città" placeholder="città" value={formData.indirizzo.città} onChange={HandleCittaChange}></input>
                </div>
                <div className="Field">
                    <label>Pv*</label>
                    <input type="text" name="provincia" placeholder="Pv" value={formData.indirizzo.provincia} onChange={HandlePvChange}></input>
                </div>
                <div className="Field">
                    <label>Email*</label>
                    <input type="mail" name="mail" placeholder="mail" value={formData.mail} onChange={HandleChange}></input>
                </div>
                <div className="Field">
                    <label>Password*</label>
                    <input type="password" name="psw" placeholder="password" value={formData.psw} onChange={HandleChange}></input>
                    <label className="Suggestion">la password deve essere di almeno 7 caratteri, 2 numeri e 1 carattere speciale</label>
                </div>
                <div className="Field">
                    <label>Conferma password*</label>
                    <input type="password" name="confPsw" placeholder="conferma password" value={formData.confPsw} onChange={HandleChange}></input>
                </div>
                <p>* campo obbligatorio</p>
                <input type="submit"></input>
                <p>Sei già registrato? <a href="Login.tsx">Accedi</a></p>
            </form>
            <h1>{dati}</h1>
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
