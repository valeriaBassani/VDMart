import { useTranslation } from "react-i18next";
import Adv from "../components/Organisms/AdvPreview/AdvPreview";

export default function Favourites() {
    const { t } = useTranslation();
    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>{t('favourites.title')}</h4>
                        <div className="main">
                            <div className="row">
                                <div className="col d-flex flex-column gap-2">
                                    <div className="row">
                                        <div className="col d-flex">
                                            <label>< abbr title={t('favourites.total')} > Tot: </ abbr > 3 {t('favourites.counter')}</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col d-flex flex-column gap-3">
                                            <Adv />
                                            <Adv />
                                            <Adv />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}