import { useState } from "react";
import SupportCategory from "../components/Molecules/SupportCategories/SupportCategory";
import SupportForm from "../components/Molecules/SupportForm/SupportForm";
import { useTranslation } from "react-i18next";

export default function Support() {
    const { t } = useTranslation();
    const [selected, setSelected] = useState("Registrazione e accesso");

    const handleClick = (title: string, clicked: boolean) => {
        setSelected(title)
    }
    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3" >
                        <h2>{t("support.title")}!</h2>
                        <div className="container-lg main" >
                            <h4>{t("support.subtitle")}</h4>
                            <div className="row gap-3 mt-3">
                                <div className="col d-flex flex-wrap main__section justify-content-center">
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title={t("support.categories.registration.title")} clicked={selected === t("support.categories.registration.title")} text={t("support.categories.registration.text")} onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title={t("support.categories.purchases.title")} clicked={selected === t("support.categories.purchases.title")} text={t("support.categories.purchases.text")} onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title={t("support.categories.ads.title")} clicked={selected === t("support.categories.ads.title")} text={t("support.categories.ads.text")} onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title={t("support.categories.selling.title")} clicked={selected === t("support.categories.selling.title")} text={t("support.categories.selling.text")} onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title={t("support.categories.account.title")} clicked={selected === t("support.categories.account.title")} text={t("support.categories.account.text")} onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title={t("support.categories.other.title")} clicked={selected === t("support.categories.other.title")} text={t("support.categories.other.text")} onClick={handleClick} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <SupportForm category={selected} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}