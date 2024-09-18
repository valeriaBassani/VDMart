import './AdvPreview.css';
import Favourite from "../../Molecules/Favourite/Favourite";
import { useNavigate } from "react-router-dom";
import UserRate from "../../Molecules/UserRate/UserRate";
import { AdvData } from "../../../storesData/products"
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../App";
import { useTranslation } from 'react-i18next';

type Props = {
    adv: AdvData
}

export default function Adv({ adv }: Props) {

    const { t } = useTranslation();
    const { userState } = useContext(CurrentUserContext);
    const navigate = useNavigate();
    const [isLogin, SetIsLogin] = useState(false)

    const handleClick = () => {
        localStorage.setItem('actualAdv', JSON.stringify(adv));
        navigate('/dettagli-annuncio');
    }

    useEffect(() => {
        if (userState !== null) {
            SetIsLogin(true)
        } else {
            SetIsLogin(false)
        }
    }, [userState])

    return (
        <>
            <button className="adv" onClick={handleClick}>
                <div className="row adv__info">
                    <div className="col-auto pe-0">
                        {adv.images && adv.images.length > 0 && (
                            <img src={adv.images[0]} alt={t('advPrev.imageAlt')} />
                        )}
                    </div>
                    <div className="col d-flex flex-column gap-4 py-3 pe-4">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 className="adv__category">{adv.category}</h5>
                                <p className="adv__date">{adv.publishData}</p>
                            </div>
                            {isLogin && <Favourite adv={adv} />}
                        </div>
                        <div>
                            <div className="col d-flex flex-column gap-2">
                                <h4>{adv.title}</h4>
                                <h3 className="adv__price">{adv.price},00€</h3>
                                {adv.shipping && (<><p className="adv__shipping">{t('advPrev.shippingAvailable')}
                                </p></>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3 ">
                    <div className="col-auto">
                        <UserRate mail={adv.seller} />
                    </div>
                </div>
            </button >
        </>
    )
}