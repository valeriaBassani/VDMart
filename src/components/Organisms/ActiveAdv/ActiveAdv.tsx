import AdvImages from "../../Molecules/AdvImages/AdvImages"
import "./ActiveAdv.css"
import Button from "../../Atoms/Buttons/Buttons"
import { useNavigate } from "react-router-dom"
import { DeleteAdv } from "../../Molecules/DeleteAdv/DeleteAdv"

type Props = {
    article?: string,
}

export default function ActiveAdv({ article }: Props) {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/modifica-annuncio-attivo');
    }

    return (
        <>
            <div className="container-lg mb-5">
                <h4>Dettagli annuncio attivo</h4>
                <div className="main__section mt-2 p-4">
                    <div className="row">
                        <div className="col">
                            <AdvImages />
                        </div>
                        <div className="col d-flex flex-column gap-5 mt-5">
                            <div className="row gap-2">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="adv__category">Tecnologia</h5>
                                    </div>
                                </div>
                                <h4>Ipad terza generazione nuovo</h4>
                                <p className="adv__date">07/10/2023</p>
                                <h3 className="adv__price">145,00€</h3>
                                <div className="row">
                                    <div className="col-auto ">
                                        <div className="col d-flex gap-2" id="shipping">
                                            <p className="adv__shipping">Spedizione disponibile: </p>
                                            <p>costo: 24,90€</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col d-flex gap-2 ">
                                    <Button className="btn--primary" onClick={handleClick} wide={true}>Modifica annuncio</Button>
                                    <DeleteAdv article="bici" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col adv__description">
                            <h4>Descrizione</h4>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}