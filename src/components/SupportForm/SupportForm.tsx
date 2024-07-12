import { useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../SubmitButton/Submit";
import InputField from "../InputField/InputField";
import TextArea from "../textArea/textArea";

export default function SupportForm() {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const text = formData.get('text') as string;
        console.log(email, text);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="Form ">
                <div className="Fields container-md">
                    <h4>Accedi al tuo profilo</h4>
                    <InputField label="Email" type="email" name="email" placeholder="email" required={true} ></InputField>
                    <TextArea label="Messaggio" name="text" maxLength={300} required={true} />
                </div>
                <Submit label="Invia" className='Primary' />
            </form>
        </>
    )
}