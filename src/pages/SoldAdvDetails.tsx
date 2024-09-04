import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Atoms/Buttons/Buttons";
import AdvImages from "../components/Molecules/AdvImages/AdvImages";
import { DeleteAdv } from "../components/Molecules/DeleteAdv/DeleteAdv";
import { AdvData, emptyAds, getActualAdv } from "../storesData/products";

export default function SoldAdvDetails() {
    const [adv, setAdv] = useState<AdvData>(emptyAds)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const adv = await getActualAdv()
                setAdv(adv);
            } catch (error) {
                console.error("Errore durante il recupero dell'annuncio", (error as Error).message);
            }
        };
        fetchAds();
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/modifica-annuncio-attivo');
    }

    return (
        <>
            <div className="container-lg mb-5">
                <h4>Dettagli annuncio venduto</h4>
                <div className="main__section mt-2 p-4">
                    <div className="row">
                        <div className="col">
                            <AdvImages adv={adv} />
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
                            {/* <div className="row">
                                <div className="col d-flex gap-2 ">
                                    <Button className="btn--primary" onClick={handleClick} wide={true}>Modifica annuncio</Button>
                                    <DeleteAdv article="bici" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col adv__description">
                            <h4>Descrizione</h4>
                            <p>{adv.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}