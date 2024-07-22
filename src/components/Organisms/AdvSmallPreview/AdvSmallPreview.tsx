import { useNavigate } from "react-router-dom";
import ipad from "./ipad.jpg"
import Button from "../../Atoms/Buttons/Buttons";
import edit from "./edit.svg"
import Icon from "../../Atoms/Icon";
import "./AdvSmallPreview.css"
export default function AdvSmallPreview() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dettagli-annuncio');
    }
    return (
        <>
            <div className="row advsmallpreview gap-3">
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
                            <div className="col-auto p-0">
                                <Button className="btn--edit" onClick={handleClick}><Icon url={edit} /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}