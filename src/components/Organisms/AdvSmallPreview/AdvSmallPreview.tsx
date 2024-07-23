import { useNavigate } from "react-router-dom";
import ipad from "./ipad.jpg"
import Button from "../../Atoms/Buttons/Buttons";
import edit from "./edit.svg"
import Icon from "../../Atoms/Icon";
import "./AdvSmallPreview.css"

type Props = {
    type: "active" | "purchased" | "sold";
}

export default function AdvSmallPreview({ type }: Props) {
    const navigate = useNavigate();

    const handleEdit = (e: React.SyntheticEvent): void => {
        e.stopPropagation();
        navigate('/modifica-annuncio-attivo');
    };

    const handleClick = () => {
        if (type === "active") {
            navigate('/dettagli-annuncio-attivo');
        }
        if (type === "purchased") {
            navigate('/modifica-annuncio-attivo');
        }
        if (type === "sold") {
            navigate('/modifica-annuncio-attivo');
        }
    }

    return (
        <>
            <div className="row advsmallpreview gap-3" onClick={handleClick}>
                <div className="col-auto p-0 advsmallpreview__image">
                    <img src={ipad} alt="Ipad"></img>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col d-flex justify-content-center ">
                            <div className="col d-flex flex-column justify-content-center">
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <h5 className="adv__category">Tecnologia</h5>
                                        <p className="adv__date">07/10/2023</p>
                                    </div>
                                </div>
                                <div>
                                    <h4>Ipad terza generazione nuovo</h4>
                                    <h3 className="adv__price">145,00€</h3>
                                    <p className="adv__shipping">Spedizione disponibile</p>
                                </div>
                            </div>
                            {type === "active" && (
                                <div className="col-auto p-0">
                                    <button className="btn--edit" onClick={handleEdit}><Icon url={edit} /></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}