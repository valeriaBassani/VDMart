import { useCallback, useState } from "react"
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import { useTranslation } from "react-i18next";


export default function PriceFilter() {
    const { t } = useTranslation();
    const [data, setData] = useState({
        min: 0,
        max: 0,
    });

    const handleChange = useCallback((id: string, value: string | number) => {
        console.log("here");
        setData({
            ...data,
            [id]: value,
        });
    }, [data]);

    // const handleReset = (e: React.SyntheticEvent): void => {
    //     e.preventDefault();
    //     setData({
    //         min: 0,
    //         max: 0,
    //     });
    // }

    const handleSubmit = useCallback((e: React.SyntheticEvent): void => {
        e.preventDefault();
        console.log(data);
        console.log(data.min, data.max);
    }, [data])

    return (
        <>
            <form onSubmit={handleSubmit} className="filter">
                <h4>{t('price-filter.title')}</h4>
                <div className="row">
                    <div className="col-6">
                        <InputField type="text" name="min" placeholder="min" onChange={handleChange}></InputField>
                    </div>
                    <div className="col-6">
                        <InputField type="text" name="max" placeholder="max" onChange={handleChange}></InputField>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Submit label={t('buttons.confirm')} className='btn--confirm' />
                    </div>
                    {/* <div className="col">
                        <Submit label="Ripristina" onClick={handleReset} className='btn--reset' />
                    </div> */}
                </div>
            </form>
        </>
    )
}