import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./SupportLink.css"

export default function SupportLink() {
    const { t } = useTranslation();
    return (
        <>
            {/* <div style={{ color: "black", maxWidth: "100vw" }}>
                <div className="row p-3">
                    <div className="col-auto d-flex gap-1">
                        <p>{t('supportLink.link-1')}</p><Link to={`/assistenza`} className="link">{t('supportLink.link-2')}</Link>
                    </div>
                </div>
            </div > */}
            <div className="supportLink">
                <p>{t('supportLink.link-1')}</p><Link to={`/assistenza`} className="link">{t('supportLink.link-2')}</Link>
            </div>

        </>
    )
}