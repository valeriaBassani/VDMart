import { useCallback, useEffect, useState } from 'react';
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
import { useTranslation } from 'react-i18next';
import { AdvData, createAdv, getId, saveAdv } from '../../../storesData/products';
import { getActualUser, updateActualUser, updateUsers } from '../../../storesData/users';


export default function CreateForm() {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState("vehicles");
    const [checked, setIsChecked] = useState(false);

    const user = getActualUser()

    const [errors, setErrors] = useState({
        title: '',
        price: '',
        shippingPrice: '',
        phone: '',
        description: ''
    });


    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
    }

    const handleOptionChange = useCallback((value: string) => {
        setSelectedOption(value);
    }, []);

    const validateForm = (advData: any): boolean => {
        let errors = false

        setErrors({
            title: '',
            price: '',
            shippingPrice: '',
            phone: '',
            description: ''
        });

        if (advData.title === "") {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                title: 'Il titolo è obbligatorio'
            }));
        }
        if (advData.description === "") {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                description: 'Inserisci una descrizione'
            }));
        }
        if (isNaN(advData.price)) {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                price: 'Il prezzo è obbligatorio e deve essere maggiore di 0'
            }));
        }
        if (advData.shipping === true && isNaN(advData.shippingPrice)) {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                shippingPrice: 'Il costo di spedizone è obbligatorio'
            }));
        }
        if (advData.phone === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                phone: 'Inserisci un numero di telefono'
            }));
        }
        return errors
    }

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data: any = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const today = getDate()
        const parsedData: AdvData = {
            id: await getId(),
            title: data.title,
            price: parseFloat(data.price),
            category: selectedOption,
            shipping: checked,
            shippingPrice: parseFloat(data.shippingPrice) || 0,
            publishData: today.toString(),
            seller: (await user).email,
            phone: data.phone || '',
            description: data.Description || ''
        };

        const error = validateForm(parsedData)
        if (!error) {
            setShow(!show)
            const advertises = JSON.parse(localStorage.getItem('advertises') || '[]');
            advertises.push(parsedData);
            localStorage.setItem('advertises', JSON.stringify(advertises));
            const currentUser = await user;
            currentUser.actives.push(parsedData);
            updateActualUser(currentUser);
            updateUsers(currentUser);
        }

    }, [checked, selectedOption, show, user])

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
                                <InputField label={t('create.article')} type="text" name="title" error={errors.title} placeholder={t('create.article')} required={true} ></InputField>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <InputField label={t('create.price')} type="number" error={errors.price} name="price" placeholder="0000,00" required={true}></InputField>
                                    </div>
                                    <div className="col-1 pt-4 px-0">
                                        <h4>€</h4>
                                    </div>
                                </div>
                                <Categories onOptionChange={handleOptionChange} />
                                <div className="row my-2 gap-2">
                                    <div className="col-auto">
                                        <div className="field" >
                                            <label id='shipping--available'>{t('create.shipping')}*</label>
                                            <label className="field__suggestion">
                                                {t('create.shipping-description')}
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Toggle aria-describedby="shipping--available" checked={checked} onChange={() => setIsChecked(!checked)} />
                                    </div>
                                    <div className={checked ? "" : "create__shipping--invisible"}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <InputField label={t('create.shipping-price')} type="number" error={errors.shippingPrice} name="shippingPrice" placeholder="000,00" required={true}></InputField>
                                            </div>
                                            <div className="col-1 pt-4 px-0">
                                                <h4>€</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <InputField label={t('create.phone')} type="number" name="phone" error={errors.phone} placeholder={t('create.phone-placeholder')} required={true}></InputField>
                            </div>
                        </div>
                        <div className="col d-flex flex-column justify-content-between">
                            <div className="row align-items-center main__section">
                                <div className="col ">
                                    <label>{t('create.images')}*</label>
                                    <p className='field__suggestion'>{t('create.images-description')}</p>
                                    <div className="row text-end">
                                        <div className="col">
                                            <p className='field__suggestion'>{t('create.images-loaded')} {contImages}/6</p>
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
                                    <TextArea label={t('create.description')} name='description' error={errors.description} maxLength={200} required={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col p-0">
                                    <p>* {t('signUp.obbligatory-field')}</p>
                                    <Submit label={t('create.public')} className="btn--primary" />
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

// console.log(selectedOption);
// console.log(checked);
// setShow(!show)

// const adv = createAdv();
// const user = getActualUser()

// try {
//     const result = await saveAdv(await adv);
//     if (result) {
//         const advertises = JSON.parse(localStorage.getItem('advertises') || '[]');
//         advertises.push(result);
//         (await user).actives.push(result)
//         updateActualUser(await user)
//         updateUsers(await user)
//         localStorage.setItem('advertises', JSON.stringify(advertises));
//     }
// } catch (error) {
//     console.error("Errore durante la registrazione:", (error as Error).message);
// }