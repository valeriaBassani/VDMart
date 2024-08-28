import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SupportLink() {
    const { t } = useTranslation();
    return (
        <>
            <div style={{ color: "black" }}>
                <div className="row p-3">
                    <div className="col d-flex gap-1">
                        <p>{t('supportLink.link-1')}</p><Link to={`/assistenza`} className="link">{t('supportLink.link-2')}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}