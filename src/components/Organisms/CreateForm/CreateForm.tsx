import { useState } from 'react';
import './CreateForm.css';
import Categories from '../../Molecules/Categories/Categories';
import Submit from '../../Atoms/SubmitButton/Submit';
import PopUp from '../../PopUp/PopUp';
import InputField from '../../Atoms/InputField/InputField';
import TextArea from '../../Atoms/textArea/textArea';
import ImageUpload from '../../Molecules/ImageUpload/ImageUpload';
import Toggle from '../../Atoms/Toggle/Toggle';


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

    const [isNext, setIsNext] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })

    const handleCount = (count: number) => {
        setContImages(prevCount => {
            const newCount = prevCount + count;
            setNext(newCount);
            return newCount;
        });
    }

    const setNext = (newCount: number) => {
        setIsNext({
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            [newCount]: true,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container-lg create">
                    <div className="row gap-3">
                        <div className="col create__section">
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
                                        <div className="field" >
                                            <label>Disponibile per la spedizione*</label>
                                            <label className="field__suggestion">
                                                Scegli se fornire l’opzione di spedizione o se preferisci lo scambio a mano
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Toggle checked={checked} onChange={() => setIsChecked(!checked)} />
                                    </div>
                                    <div className={checked ? "" : "create__shipping--invisible"}>
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
                            <div className="row form align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <label>Immagini*</label>
                                        <p className='field__suggestion'>Puoi caricare da un minimo di 2 ad un massimo di 6 immagini</p>
                                        <div className="row text-end">
                                            <div className="col">
                                                <p className='field__suggestion'>Caricate {contImages}/6</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex flex-wrap gap-2">
                                                <ImageUpload upCount={handleCount} isNext={isNext[0]} />
                                                <ImageUpload upCount={handleCount} isNext={isNext[1]} />
                                                <ImageUpload upCount={handleCount} isNext={isNext[2]} />
                                                <ImageUpload upCount={handleCount} isNext={isNext[3]} />
                                                <ImageUpload upCount={handleCount} isNext={isNext[4]} />
                                                <ImageUpload upCount={handleCount} isNext={isNext[5]} />
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
                                    <Submit label="Pubblica l'annuncio" className="btn--primary" />
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
                    primaryLink={{ to: "/area-riservata", label: "Area riservata", className: "Primary" }}
                    secondaryLink={{ to: "/", label: "Home", className: "Secondary" }} />}
            </div>
        </>
    )

}