import { useState } from 'react';
import './CreateForm.css';
import Categories from '../Categories/Categories';
import Submit from '../SubmitButton/Submit';
import PopUp from '../PopUp/PopUp';
import InputField from '../InputField/InputField';
import TextArea from '../textArea/textArea';
import ImageUpload from '../ImageUpload/ImageUpload';


export default function CreateForm() {

    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [checked, setIsChecked] = useState(false);

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        console.log(selectedOption);
        console.log(checked);
        setShow(!show)
    }

    const [contImages, setContImages] = useState(0);

    const handleCount = (count: number) => {
        setContImages(count);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container-lg Create">
                    <div className="row gap-3">
                        <div className="col Section">
                            <div className="Form">
                                <InputField label="Titolo" type="text" name="title" placeholder="Titolo" required={true} ></InputField>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <InputField label="Prezzo di vendita" type="number" name="price" placeholder="0000,00" required={true}></InputField>
                                    </div>
                                    <div className="col-1 pt-4 px-0">
                                        <h4>€</h4>
                                    </div>
                                </div>
                                <label>Categoria*</label>
                                <Categories onOptionChange={handleOptionChange} />
                                <div className="row my-2 gap-2">
                                    <div className="col-auto">
                                        <div className="Field" >
                                            <label>Disponibile per la spedizione*</label>
                                            <label className="Suggestion">
                                                Scegli se fornire l’opzione di spedizione o se preferisci lo scambio a mano
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="Toggle">
                                            <input type="checkbox" className={checked ? "checked" : ""} onChange={() => setIsChecked((prev) => !prev)}  ></input>
                                            <span className="Round"></span>
                                            <label htmlFor="tech"><p>{checked ? "si" : "no"}</p></label>
                                        </div>
                                    </div>
                                    <div className={checked ? "" : "Invisible"}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <InputField label="Costo spedizione" type="number" name="shippingPrice" placeholder="000,00" required={true}></InputField>
                                            </div>
                                            <div className="col-1 pt-4 px-0">
                                                <h4>€</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <InputField label="Numero di telefono per il contatto" type="number" name="phone" placeholder="Tel." required={true}></InputField>
                            </div>
                        </div>
                        <div className="col justify-content-between Section">
                            <div className="row Form align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <label>Immagini*</label>
                                        <p className='Suggestion'>Puoi caricare da un minimo di 2 ad un massimo di 6 immagini</p>
                                        <div className="row text-end">
                                            <div className="col">
                                                <p className='Suggestion'>Caricate {contImages}/6</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex flex-wrap gap-2">
                                                <ImageUpload upCount={handleCount} />
                                                <ImageUpload upCount={handleCount} />
                                                <ImageUpload upCount={handleCount} />
                                                <ImageUpload upCount={handleCount} />
                                                <ImageUpload upCount={handleCount} />
                                                <ImageUpload upCount={handleCount} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <TextArea label='Descrizione' name='descripion' maxLength={200} required={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>* campo obbligatorio</p>
                                    <Submit label="Pubblica l'annuncio" className="Primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </form>
            <div className="container">
                {show && <PopUp
                    type="success"
                    title="Pubblica annuncio"
                    label="Annuncio pubblicato con successo!"
                    description="Il tuo articolo ora è in vendita sulla bacheca degli annunci. Vedi il tuoi annunci o torna alla home"
                    assistance={true}
                    primaryLink={{ to: "/registrazione", label: "Area riservata", className: "Primary" }}
                    secondaryLink={{ to: "/home", label: "Home", className: "Secondary" }} />}
            </div>
        </>
    )

}