import { useState } from "react";
import './Components.css';

type Props = {
    nome: string;
    cognome: string;
    mail: string;
};

export default function User({ nome, cognome, mail }: Props) {

    const [Data, setData] = useState({
        nome2: nome,
        cognome2: cognome,
        mail2: mail,
    });

    const [display, setDisplay] = useState('none')
    const [display2, setDisplay2] = useState('block')

    function handleClick() {
        setDisplay('block')
        setDisplay2('none')
    }

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setData({
            ...Data,
            [name]: value,
        });
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        setDisplay('none')
        setDisplay2('block')
        console.log(Data.nome2, Data.cognome2);
    }

    return (
        <>
            <h4>Le tue credenziali</h4>
            <form style={{ display: display }} className="Form">
                <div className="Field">
                    <label>Nome*</label>
                    <input type="text" name="nome2" value={Data.nome2} placeholder={Data.nome2} onChange={HandleChange}></input><br></br>
                </div>
                <div className="Field">
                    <label>Cognome*</label>
                    <input type="text" name="cognome2" value={Data.cognome2} placeholder={Data.nome2} onChange={HandleChange}></input><br></br>
                </div>
                <div className="Field">
                    <label>Mail*</label>
                    <input type="text" name="mail2" value={Data.mail2} placeholder={Data.nome2} onChange={HandleChange}></input><br></br>
                </div>
                <input type="submit" onClick={handleSubmit} value="Salva"></input>
            </form>
            <div style={{ display: display2 }} className="Form">
                <p>{Data.nome2}</p>
                <p>{Data.cognome2}</p>
                <p>{Data.mail2}</p>
                <input type="submit" onClick={handleClick} value="Modifica"></input>
                {/* <button onClick={handleClick} className="Edit">Modifica</button> */}
            </div>
        </>
    )
}
