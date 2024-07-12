import { useState } from "react";
import BreadCrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SupportCategory from "../components/SupportForm/SupportCategory";
import SupportForm from "../components/SupportForm/SupportForm";

export default function Support() {
    const [selected, setSelected] = useState("Registrazione e accesso");

    const handleClick = (title: string, clicked: boolean) => {
        setSelected(title)
    }
    return (
        <>
            <NavBar />
            <BreadCrumbs />
            <div className="container-lg my-5">
                <div className="row">
                    <div className="col d-flex flex-column gap-3" >
                        <h4>Contattaci</h4>
                        <div className="container-lg Create" style={{ backgroundColor: "white" }}>
                            <div className="row gap-3">
                                <div className="col d-flex flex-wrap">
                                    <div className="row g-3">
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title="Registrazione e accesso" clicked={selected === "Registrazione e accesso"} text="Risoluzione problemi legati a login e registrazione" onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title="Acquisti" clicked={selected === "Acquisti"} text="Problemi sul metodo di pagamento, spedizioni e acquisti" onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title="Annunci" clicked={selected === "Annunci"} text="Problemi su creazione, inserimento e pubblicazione" onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title="Vendita" clicked={selected === "Vendita"} text="Problemi su spedizioni pagamenti e recensioni" onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title="Account" clicked={selected === "Account"} text="Gestione dati personali, elimnazione account" onClick={handleClick} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <SupportCategory title="Altro" clicked={selected === "Altro"} text="Dicci di più su come possiamo aiutarti" onClick={handleClick} />
                                        </div>
                                    </div>
                                    {/* <div className="row">
                                        <div className="col-6 d-flex flex-column gap-3">
                                            <SupportCategory title="Registrazione e accesso" clicked={selected === "Registrazione e accesso"} text="Risoluzione problemi legati a login e registrazione" onClick={handleClick} />
                                            <SupportCategory title="Acquisti" clicked={selected === "Acquisti"} text="Problemi sul metodo di pagamento, spedizioni e acquisti" onClick={handleClick} />
                                            <SupportCategory title="Annunci" clicked={selected === "Annunci"} text="Problemi su creazione, inserimento e pubblicazione" onClick={handleClick} />
                                        </div>
                                        <div className="col-6 d-flex flex-column gap-3">
                                            <SupportCategory title="Vendita" clicked={selected === "Vendita"} text="Problemi su spedizioni pagamenti e recensioni" onClick={handleClick} />
                                            <SupportCategory title="Account" clicked={selected === "Account"} text="Gestione dati personali, elimnazione account" onClick={handleClick} />
                                            <SupportCategory title="Altro" clicked={selected === "Altro"} text="Informaci su come possiamo aiutarti" onClick={handleClick} />
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col">
                                    <SupportForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}