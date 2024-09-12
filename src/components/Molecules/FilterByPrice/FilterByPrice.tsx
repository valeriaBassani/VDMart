import { useCallback, useState } from "react"
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import { useTranslation } from "react-i18next";

type Props = {
    onClick: (min: number, max: number) => void;
}

export default function PriceFilter({ onClick }: Props) {
    const { t } = useTranslation();
    // const [max, setMax] = useState(0)

    // useEffect(() => {
    //     const fetchAds = async () => {
    //         try {
    //             const maxPrice = setMaxPrice()
    //             setMax(await maxPrice)
    //         } catch (error) {
    //             console.error("Errore durante il recupero del prezzo massimo", (error as Error).message);
    //         }
    //     };
    //     fetchAds();
    // }, []);

    const [data, setData] = useState({
        min: "",
        max: "",
    });

    const handleChange = useCallback((id: string, value: string | number) => {
        setData({
            ...data,
            [id]: value,
        });
    }, [data]);

    const handleReset = useCallback(() => {
        setData({
            min: "",
            max: "",
        });
        console.log(data);

    }, [data]);

    const handleSubmit = useCallback((e: React.SyntheticEvent): void => {
        e.preventDefault();
        const min = data.min ? parseFloat(data.min) : 0;
        const max = data.max ? parseFloat(data.max) : 999999;
        onClick(min, max);
        console.log(data);
    }, [data, onClick])

    return (
        <>
            <form onSubmit={handleSubmit} className="filter">
                <h4>{t('price-filter.title')}</h4>
                <div className="row">
                    <div className="col-6">
                        <InputField type="number" value={data.min} name="min" placeholder="min" onChange={handleChange}></InputField>
                    </div>
                    <div className="col-6 ps-0">
                        <InputField type="number" value={data.max} name="max" placeholder="max" onChange={handleChange}></InputField>
                    </div>
                </div>
                <div className="row gap-1">
                    <div className="col">
                        <Submit label={t('buttons.confirm')} className='btn--confirm' />
                    </div>
                    <div className="col">
                        <Submit label={t('buttons.reset')} onClick={handleReset} className='btn--reset' />
                    </div>
                </div>
            </form>
        </>
    )
}