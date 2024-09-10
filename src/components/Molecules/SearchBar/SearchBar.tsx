import { useCallback, useState } from "react";
import "./SearchBar.css"
import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import { useTranslation } from "react-i18next";

type Props = {
    onClick: (text: string) => void
}

export default function SearchBar({ onClick }: Props) {
    const { t } = useTranslation();
    const [visible] = useState(false);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchValue = formData.get('search')?.toString() || "";
        onClick(searchValue.toString())
    }, [onClick])


    return (
        <>
            <div className="row ">
                <div className="col d-flex flex-column ">
                    <div className="row align-items-end gap-2">
                        <form onSubmit={handleSubmit}>
                            <div className="col p-0">
                                <label htmlFor="search"><h4>{t('home.search')}</h4></label>
                                <div className="search-bar">
                                    <InputField type="text" name="search" placeholder={t('home.search-placeholder')} />
                                    {/* <Button className="btn__secondary"><img src={lens} className="search-bar__lens" alt="cerca"></img></Button> */}
                                    <Submit label="" className="search-bar__lens" />
                                </div>
                            </div>
                        </form>
                        {/* <div className="col-auto p-0 search-bar__filter" >
                            <Submit label='Filtri' className='btn--primary' onClick={() => { setVisible(!visible) }} />
                        </div> */}
                    </div>
                    <div className={`row search-bar__more ${visible ? 'search-bar__more--visible' : ''} my-3`}>
                        <div className="main__section">
                            <h4>{t('home.filters')}</h4>
                            <div className="col d-flex flex-column gap-2 p-0">
                                {/* <CategoryFilter />
                                <PriceFilter /> */}
                                {/* <Shipping /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}