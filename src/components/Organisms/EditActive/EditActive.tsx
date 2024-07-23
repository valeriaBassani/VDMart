import { useState } from "react"
import AdvImages from "../../Molecules/AdvImages/AdvImages"
import Button from "../../Atoms/Buttons/Buttons"
import InputField from "../../Atoms/InputField/InputField"
import Toggle from "../../Atoms/Toggle/Toggle"
import TextArea from "../../Atoms/textArea/textArea"
import { useNavigate } from "react-router-dom"
import { DeleteAdv } from "../DeleteAdv/DeleteAdv"

type Props = {
    article?: string,
    details?: "adv" | "purchase" | "sold"
}

export default function EditActive({ article, details }: Props) {
    const [checked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleSave = () => {
        navigate('/dettagli-annuncio-attivo');
    }

    return (
        <>
            <div className="container-lg mb-5">
                <h4>Motifica annuncio</h4>
                <div className="main__section mt-2 p-4">
                    <div className="row">
                        <div className="col">
                            <AdvImages />
                        </div>
                        <div className="col d-flex flex-column gap-5 mt-5">
                            <div className="row gap-2">
                                <div className="row">
                                    <div className="col d-flex flex-column gap-2">
                                        <p className="adv__date">07/10/2023</p>
                                        <h5 className="adv__category">Tecnologia</h5>
                                    </div>
                                </div>
                                <InputField label="nome articolo" type="text" value="Ipad terza generazione nuovo" name="title" placeholder="nome articolo" />
                                <div className="row align-items-center">
                                    <div className="col">
                                        <InputField label="Prezzo di vendita" type="number" value={145} name="price" placeholder="prezzo"></InputField>
                                    </div>
                                    <div className="col-1 pt-4 px-0">
                                        <h4>€</h4>
                                    </div>
                                </div>
                                <div className="row my-2 gap-2">
                                    <div className="col-auto">
                                        <div className="field" >
                                            <label>Disponibile per la spedizione*</label>
                                            <label className="field__suggestion">
                                                Scegli se fornire l’opzione di spedizione o se preferisci lo scambio a mano
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <Toggle checked={checked} onChange={() => setIsChecked(!checked)} />
                                    </div>
                                    <div className={checked ? "" : "create__shipping--invisible"}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <InputField label="Costo spedizione" type="number" name="shippingPrice" placeholder="000,00" required={true}></InputField>
                                            </div>
                                            <div className="col-1 pt-4 px-0">
                                                <h4>€</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col adv__description">
                            <TextArea label="Descrizione" name="description" value={"descrizione"} maxLength={200} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex gap-2 justify-content-end">
                            <DeleteAdv article="bici" />
                            <Button className="btn--secondary" onClick={handleSave}>Salva modifiche</Button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}