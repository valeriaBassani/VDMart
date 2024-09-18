import { useCallback, useEffect, useState } from "react";
import Icon from "../../Atoms/Icon";
import down from "./chevron-down.svg"
import up from "./chevron-up.svg"
import "./OrderBy.css"
import { useTranslation } from "react-i18next";

type Props = {
    onClick: (clicked: boolean) => void;
};

export default function OrderBy({ onClick }: Props) {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(t('order.most-recent'));

    useEffect(() => {
        setValue(t('order.most-recent'))
    }, [t])

    const handleClick = useCallback((e: React.SyntheticEvent) => {
        setVisible(!visible);
    }, [visible]);

    const chooseValue = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setValue(e.currentTarget.value)
        setVisible(!visible);
        if (value === t('order.most-recent')) {
            onClick(true)
        }
        if (value === t('order.less-recent')) {
            onClick(false)
        }
    }, [onClick, t, value, visible]);

    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column gap-3">
                    <div className="orderby">
                        <button className="orderby__item" onClick={handleClick}><p>{value} </p><Icon url={visible ? up : down} alt="vedi di più"></Icon></button>
                        <div className={visible ? 'orderby__selector--down' : 'orderby__selector--up'}>
                            <button className="orderby__item" value={t('order.most-recent')} onClick={chooseValue}><p>{t('order.most-recent')}</p> </button>
                            <button className="orderby__item" value={t('order.less-recent')} onClick={chooseValue}><p>{t('order.less-recent')}</p> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}