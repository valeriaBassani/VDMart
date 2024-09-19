import { useCallback, useEffect, useState } from "react"
import InputField from "../../Atoms/InputField/InputField"
import Toggle from "../../Atoms/Toggle/Toggle"
import TextArea from "../../Atoms/textArea/textArea"
import { useNavigate } from "react-router-dom"
import EditAdvImages from "../../Molecules/EditAdvImages/EditAdvImages"
import { AdvData, updateAdv } from "../../../storesData/products"
import Submit from "../../Atoms/SubmitButton/Submit"
import AdvImages from "../../Molecules/AdvImages/AdvImages"
import { useTranslation } from "react-i18next"
import { DeleteAdv } from "../../Molecules/DeleteAdv/DeleteAdv"

type Props = {
    adv: AdvData,
}

export default function EditActive({ adv }: Props) {
    const { t } = useTranslation();
    const [checked, setIsChecked] = useState(adv.shipping);
    const navigate = useNavigate();

    useEffect(() => {
        setIsChecked(adv.shipping)
    }, [adv.shipping])

    const [errors, setErrors] = useState({
        title: "",
        price: "",
        shipping: "",
        description: "",
        shippingPrice: "",
    })

    const validateForm = (adv: any): boolean => { //in store
        let errors = false
        setErrors({
            title: "",
            price: "",
            shipping: "",
            description: "",
            shippingPrice: "",
        })

        if (adv.title === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                title: 'Campo obbligatorio'
            }));
        }
        if (adv.price === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                price: 'Campo obbligatorio'
            }));
        }
        if (adv.description === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                description: 'Campo obbligatorio'
            }));
        }
        if (adv.shipping === true && adv.shippingPrice === "") {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                shippingPrice: 'Campo obbligatorio'
            }));
        }
        return errors
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const ad: any = {}

        formData.forEach((value, key) => {
            if (key !== "shipping") {
                ad[key] = value;
            }
        });

        ad["shipping"] = checked

        const parseAdv: AdvData = {
            id: adv.id,
            title: ad.title,
            price: ad.price,
            category: adv.category,
            shipping: ad.shipping,
            shippingPrice: ad.shippingPrice,
            publishData: adv.publishData,
            seller: adv.seller,
            phone: "",
            description: ad.description,
            images: adv.images
        }

        let error = validateForm(parseAdv)
        if (!error) {
            updateAdv(parseAdv)
            navigate('/dettagli-annuncio-attivo');
        }
    }

    return (
        <>
            <div className="container-lg mb-5">
                <h4>{t('edit.title')}</h4>
                <form onSubmit={handleSubmit}>
                    <div className="main__section mt-2 p-4">
                        <div className="row">
                            <div className="col">
                                <AdvImages adv={adv} />
                                {/* <EditAdvImages adv={adv} /> */}
                            </div>
                            <div className="col d-flex flex-column gap-5 mt-5">
                                <div className="row gap-2">
                                    <div className="row">
                                        <div className="col d-flex flex-column gap-2">
                                            <p className="adv__date">{adv.publishData}</p>
                                            <h5 className="adv__category">{adv.category}</h5>
                                        </div>
                                    </div>
                                    <InputField label={t('create.article')} type="text" value={adv.title} name="title" error={errors.title} placeholder="nome articolo" />
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <InputField label={t('create.price')} type="number" value={adv.price} name="price" error={errors.price} placeholder="prezzo"></InputField>
                                        </div>
                                        <div className="col-1 pt-4 px-0">
                                            <h4>€</h4>
                                        </div>
                                    </div>
                                    <div className="row my-2 gap-2">
                                        <div className="col-auto">
                                            <div className="field" >
                                                <label>{t('create.shipping')}*</label>
                                                <label className="field__suggestion">
                                                    {t('create.shipping-description')}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <Toggle checked={checked} onChange={() => setIsChecked(!checked)} />
                                        </div>
                                        <div className={checked ? "" : "create__shipping--invisible"}>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <InputField label="Costo spedizione" value={adv.shippingPrice} type="number" name="shippingPrice" error={errors.shippingPrice} placeholder="000,00" required={true}></InputField>
                                                </div>
                                                <div className="col-1 pt-4 px-0">
                                                    <h4>€</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col adv__description">
                                <TextArea label={t('create.description')} name="description" error={errors.description} value={adv.description} maxLength={200} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-end">
                                <DeleteAdv adv={adv} />
                                <Submit label={t('create.save')} className="btn--primary--small" />
                                {/* <Button className="btn--secondary" onClick={handleSave}>Salva modifiche</Button> */}
                            </div>
                        </div>
                    </div>
                </form >
            </div >
        </>
    )
}