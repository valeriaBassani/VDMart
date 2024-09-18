import { Link } from "react-router-dom";
import './Footer.css';
import Icon from "../../Atoms/Icon";
import logo from './logo.svg';
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="row">
                <div className="col-4">
                    <Link to={`/`}><Icon url={logo} alt="home" /></Link>
                </div>
                <div className="col-4 d-flex flex-column gap-4">
                    <Link to={`/assistenza`} className="navbar__link">{t('supportLink.link-2')}</Link>
                    <Link to={`/`} className="navbar__link">Privacy</Link>
                    <Link to={`/vendi`} className="navbar__link">{t('navbar.create')}</Link>
                    <Link to={`/`} className="navbar__link">{t('navbar.map-site')}</Link>
                    <Link to={`/login`} className="navbar__link">{t('navbar.logIn')}</Link>
                </div>
                <div className="col-4 text-end">
                    <Link to={`/`} className="navbar__link">Social</Link>
                </div>
            </div>
        </div>

    )
}