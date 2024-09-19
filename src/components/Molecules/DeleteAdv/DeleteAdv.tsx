import { useState } from "react";
import Button from "../../Atoms/Buttons/Buttons"
import Dialog from "../../Template/DialogPopUp/Dialog";
import help from "./help-circle.svg"
import check from "./check-circle 1.svg"
import { Link } from "react-router-dom";
import { AdvData, deleteAdv } from "../../../storesData/products";
import { useTranslation } from "react-i18next";

type Props = {
    adv: AdvData
}

export function DeleteAdv({ adv }: Props) {
    const { t } = useTranslation();
    const [show, setShow] = useState(false)

    const showDialog = () => {
        setShow(!show)
    }

    const [currentModal, setCurrentModal] = useState("primo");

    const handleDelete = () => {
        deleteAdv(adv)
        setCurrentModal("secondo");
    };

    const close = () => {
        setCurrentModal("primo");
        setShow(false)
    }
    return (
        <>
            <Button className="btn--delete" onClick={showDialog}>{t('create.delete')}</Button>
            {currentModal === 'primo' && <Dialog show={show} onHide={close} title={t('removeAd.title')} >
                <div className="row">
                    <div className="col">
                        <img src={help} alt="confermare" />
                    </div>
                </div>
                <div className="row content">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>{t('removeAd.label')} </label>
                                <p>{t('removeAd.description')}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Button className="btn--delete" onClick={handleDelete}>{t('removeAd.deleteButton')}</Button>
                                <Button className="btn--secondary" onClick={showDialog}>{t('removeAd.cancelButton')}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog >}
            {
                currentModal === 'secondo' && <Dialog show={show} title={t('removeAd.title')} >
                    <div className="row">
                        <div className="col">
                            <img src={check} alt="successo" />
                        </div>
                    </div>
                    <div className="row content">
                        <div className="col d-flex flex-column gap-3 main p-3">
                            <div className="row">
                                <div className="col">
                                    <label>{t('removeAd.label2')} </label>
                                    <p>{t('removeAd.description2')}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex gap-2 justify-content-center">
                                    <Link to={"/area-riservata"} className="btn--primary">{t('removeAd.returnButton')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog>
            }
        </>
    )
}