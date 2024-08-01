import { useNavigate } from "react-router-dom";
import ipad from "./ipad.jpg"
import edit from "./edit.svg"
import Icon from "../../Atoms/Icon";
import "./AdvSmallPreview.css"
import { useCallback } from "react";
import { AdvData } from "../../../storesData/products";

type Props = {
    adv: AdvData
    type: "active" | "purchased" | "sold";
}

export default function AdvSmallPreview({ adv, type }: Props) {
    const navigate = useNavigate();

    const handleEdit = (e: React.SyntheticEvent): void => {
        e.stopPropagation();
        navigate('/modifica-annuncio-attivo');
    };

    const handleClick = useCallback(() => {
        if (type === "active") {
            navigate('/dettagli-annuncio-attivo');
        }
        if (type === "purchased") {
            navigate('/modifica-annuncio-attivo');
        }
        if (type === "sold") {
            navigate('/modifica-annuncio-attivo');
        }
    }, [navigate, type])

    return (
        <>
            <div className="row advsmallpreview gap-3" onClick={handleClick}>
                <div className="col-auto p-0 advsmallpreview__image">
                    <img src={ipad} alt="Ipad"></img>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="col d-flex flex-column justify-content-center gap-2">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h5 className="adv__category">{adv.category}</h5>
                                        <p className="adv__date">07/10/2023</p>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column gap-1">
                                    <h4>{adv.title}</h4>
                                    <h3 className="adv__price">{adv.price}€</h3>
                                    {adv.shipping && (<><p className="adv__shipping">spedizione disponibile
                                    </p></>)}
                                </div>
                            </div>
                            {type === "active" && (
                                <div className="col-auto p-0">
                                    <button className="btn--edit" onClick={handleEdit}><Icon url={edit} alt="modifica" /></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}