import { useState } from "react";
import { Link } from "react-router-dom";
import Submit from "../Atoms/SubmitButton/Submit";
import InputField from "../Atoms/InputField/InputField";
import TextArea from "../Atoms/textArea/textArea";

type Props = {
    category: string
}

export default function SupportForm({ category }: Props) {


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
                    <h4>Scrivici</h4>
                    <InputField label="Email" type="email" name="email" placeholder="email" required={true} ></InputField>
                    <div className="Section">
                        <div className="row">
                            <div className="col d-flex gap-2 py-2">
                                <label>Oggetto:</label>
                                <label style={{ color: "var(--primary)" }}> {category} </label>
                            </div>
                        </div>
                        <TextArea label="Messaggio" name="text" maxLength={300} required={true} />
                    </div>
                </div>
                <Submit label="Invia" className='Primary' />
            </form >
        </>
    )
}