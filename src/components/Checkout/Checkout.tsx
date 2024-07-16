import Submit from "../SubmitButton/Submit";
import InputField from "../InputField/InputField";

type Props = {
    article: string,
}
export default function Checkout({ article }: Props) {
    return (
        <>
            <div className="container-sm p-5 row gap-4">
                <div className="Create">
                    <h4>Il tuo acquisto</h4>
                    <div className="row my-2">
                        <div className="col" style={{ color: "var(--placeholder)" }}>
                            <div className="col d-flex justify-content-between">
                                <p>Articolo</p>
                                <p>800,00€</p>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <p>Spedizione</p>
                                <p>45,00€</p>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top pt-2 align-items-center">
                        <div className="col-6">
                            <h4>Prezzo</h4>
                        </div>
                        <div className="col-6 text-end">
                            <h3 style={{ color: "var(--primary)" }}>800,00€</h3>
                        </div>
                    </div>
                </div>
                <div className="Create">
                    <h4>Spedizione</h4>
                    <InputField type={"text"} name={"address"} placeholder={"via natale battaglia, 8"} />
                    <div className="row">
                        <div className="col">
                            <InputField label="Numero carta" type="number" name="card" placeholder="XXXX-XXXX-XXXX-XXXX" required={true}></InputField>
                        </div>
                        <div className="col-4">
                            <InputField label="CVV" type="number" name="cvv" placeholder="XXX" required={true}></InputField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <InputField label="Titolare" type="text" name="name" placeholder="Nome Cognome" required={true}></InputField>
                        </div>
                        <div className="col-4">
                            <InputField label="Scandeza" type="number" name="expire" placeholder="MM/AAAA" required={true}></InputField>
                        </div>
                    </div>
                </div>
                <Submit className="Primary" label="Conferma pagamento"></Submit>
            </div>
        </>
    )

}