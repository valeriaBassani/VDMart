import { useCallback, useState } from "react";
import Icon from "../../Atoms/Icon";
import down from "./chevron-down.svg"
import up from "./chevron-up.svg"
import "./OrderBy.css"

export default function OrderBy() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("Dal più recente");

    const handleClick = useCallback((e: React.SyntheticEvent) => {
        setVisible(!visible);
    }, [visible]);

    const chooseValue = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setValue(e.currentTarget.value)
        setVisible(!visible);
    }, [visible]);

    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column gap-3">
                    <div className="orderby">
                        <button className="orderby__item" onClick={handleClick}>{value} <Icon url={visible ? up : down}></Icon></button>
                        <div className={visible ? 'orderby__selector--down' : 'orderby__selector--up'}>
                            <button className="orderby__item" value="Dal più recente" onClick={chooseValue}><p>Dal più recente</p> </button>
                            <button className="orderby__item" value="Dal meno recente" onClick={chooseValue}><p>Dal meno recente</p> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}