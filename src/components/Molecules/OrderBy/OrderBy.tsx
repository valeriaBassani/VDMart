import { useState } from "react";
import Icon from "../../Atoms/Icon";
import down from "./chevron-down.svg"
import up from "./chevron-up.svg"
import "./OrderBy.css"

export default function OrderBy() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState("Dal più recente");

    const handleClick = (e: React.SyntheticEvent): void => {
        setVisible(!visible);
    };

    const chooseValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
        setValue(e.currentTarget.value)
        setVisible(!visible);
    };

    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column gap-3">
                    <div className="orderBy">
                        <button className="orderBy__item" onClick={handleClick}>{value} <Icon url={visible ? up : down}></Icon></button>
                        <div className={visible ? 'orderBy__selector--down' : 'orderBy__selector--up'}>
                            <button className="orderBy__item" value="Dal più recente" onClick={chooseValue}><p>Dal più recente</p> </button>
                            <button className="orderBy__item" value="Dal meno recente" onClick={chooseValue}><p>Dal meno recente</p> </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}