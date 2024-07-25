import { useCallback, useState } from 'react';
import './CreateForm.css';
import Categories from '../../Molecules/Categories/Categories';
import Submit from '../../Atoms/SubmitButton/Submit';
import check from "./check-circle 1.svg"
import InputField from '../../Atoms/InputField/InputField';
import TextArea from '../../Atoms/textArea/textArea';
import ImageUpload from '../../Molecules/ImageUpload/ImageUpload';
import Toggle from '../../Atoms/Toggle/Toggle';
import Dialog from '../../Template/DialogPopUp/Dialog';
import { Link } from 'react-router-dom';


export default function CreateForm() {

    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [checked, setIsChecked] = useState(false);

    const handleOptionChange = useCallback((value: string) => {
        setSelectedOption(value);
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });
        console.log(selectedOption);
        console.log(checked);
        setShow(!show)
    }, [checked, selectedOption, show])

    const [contImages, setContImages] = useState(0);

    const [isNext, setIsNext] = useState({
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    })

    const handleCount = useCallback((count: number) => {
        setContImages(prevCount => {
            const newCount = prevCount + count;
            setNext(newCount);
            return newCount;
        });
    }, [])

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

    const close = () => {
        setShow(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="main">
                    <div className="row gap-3">
                        <div className="col main__section">
                            <div className="form">
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
                        <div className="col d-flex flex-column justify-content-between">
                            <div className="row align-items-center main__section">
                                <div className="col ">
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
                                <div className="col">
                                    <TextArea label='Descrizione' name='descripion' maxLength={200} required={true} />
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
            <Dialog title='Pubblica annuncio' show={show} onHide={close} >
                <div className="row">
                    <div className="col">
                        <img src={check} alt="Icon" />
                    </div>
                </div>
                <div className="row px-5 mx-5">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>Annuncio pubblicato con successo!</label>
                                <p>Il tuo articolo ora è in vendita sulla bacheca degli annunci. <br></br> Vedi i tuoi annunci o torna alla home</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Link to={"/"} className="btn--secondary">Home</Link>
                                <Link to={"/area-riservata"} className="btn--primary">Area riservata</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )

}