import { useState } from "react";
import './User.css';
import Button from "../Button/Button";

type Props = {
    firstname: string;
    lastname: string;
    mail: string;
}

export default function User({ firstname, lastname, mail }: Props) {

    //modifica campi
    const [Data, setData] = useState({
        firstName2: firstname,
        secondName2: lastname,
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
        console.log(Data.firstName2, Data.secondName2);
    }

    return (
        <>
            <form style={{ display: display }} className="Form">
                <div className="Field">
                    <label>Nome*</label>
                    <input type="text" name="firstName2" value={Data.firstName2} placeholder={Data.firstName2} onChange={HandleChange}></input><br></br>
                </div>
                <div className="Field">
                    <label>Cognome*</label>
                    <input type="text" name="secondName2" value={Data.secondName2} placeholder={Data.firstName2} onChange={HandleChange}></input><br></br>
                </div>
                <div className="Field">
                    <label>Mail*</label>
                    <input type="text" name="mail2" value={Data.mail2} placeholder={Data.firstName2} onChange={HandleChange}></input><br></br>
                </div>
                <input type="submit" onClick={handleSubmit} value="Salva"></input>
            </form>
            <div style={{ display: display2 }} className="Form">
                <p>{Data.firstName2}</p>
                <p>{Data.secondName2}</p>
                <p>{Data.mail2}</p>
                <Button label="Modifica" onClick={handleClick} className="Primary" />
                {/* <input type="submit" onClick={handleClick} value="Modifica"></input> */}
            </div>
        </>
    )
}
