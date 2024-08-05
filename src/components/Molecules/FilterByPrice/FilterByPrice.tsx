import { useCallback, useEffect, useState } from "react"
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import { useTranslation } from "react-i18next";
import { setMaxPrice } from "../../../storesData/products";

type Props = {
    onClick: (min: number, max: number) => void;
}

export default function PriceFilter({ onClick }: Props) {
    const { t } = useTranslation();
    const [max, setMax] = useState<number>(0)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const maxPrice = setMaxPrice()
                setMax(await maxPrice)
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, []);

    const [data, setData] = useState({
        min: 0,
        max: max,
    });

    const handleChange = useCallback((id: string, value: string | number) => {
        setData({
            ...data,
            [id]: value,
        });
    }, [data]);

    const handleReset = useCallback(() => {
        setData({
            min: 0,
            max: max,
        });
    }, [max]);

    const handleSubmit = useCallback((e: React.SyntheticEvent): void => {
        e.preventDefault();
        onClick(data.min, data.max)
    }, [data.max, data.min, onClick])

    return (
        <>
            <form onSubmit={handleSubmit} className="filter">
                <h4>{t('price-filter.title')}</h4>
                <div className="row">
                    <div className="col-6">
                        <InputField type="number" value={data.min} name="min" placeholder="min" onChange={handleChange}></InputField>
                    </div>
                    <div className="col-6">
                        <InputField type="number" value={max} name="max" placeholder="max" onChange={handleChange}></InputField>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Submit label={t('buttons.confirm')} className='btn--confirm' />
                    </div>
                    <div className="col">
                        <Submit label="Ripristina" onClick={handleReset} className='btn--reset' />
                    </div>
                </div>
            </form>
        </>
    )
}