import './Pages.css';
import '../App.css';
import CreateForm from "../components/Organisms/CreateForm/CreateForm";
import { useTranslation } from 'react-i18next';

export default function LogIn() {
    const { t } = useTranslation();
    return (
        <>
            <div className="container-lg mt-3 mb-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3">
                        <h4>{t('create.title')}</h4>
                        <CreateForm />
                    </div>
                </div>
            </div>
        </>

    )
}