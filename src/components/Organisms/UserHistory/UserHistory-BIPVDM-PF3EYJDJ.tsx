import { useState } from "react";
import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import ActiveAds from "../ActiveAds/ActiveAds";
import PurchasedAds from "../PurchasedAds copy/PurchasedAds";
import SoldAds from "../SoldAds/SoldAds";

export default function UserHistory() {

    const [active, setActive] = useState(0)

    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex flex-column gap-3">
                    <div className="row gap-3">
                        <div className="col d-flex gap-3">
                            <Button className={active === 0 ? "btn--primary" : "btn--inactive"} onClick={() => setActive(0)}>Annunci Attivi</Button>
                            <Button className={active === 1 ? "btn--primary" : "btn--inactive"} onClick={() => setActive(1)}>Acquisti</Button>
                            <Button className={active === 2 ? "btn--primary" : "btn--inactive"} onClick={() => setActive(2)}>Vendite </Button>
                        </div>
                        <div className="col-auto">
                            <OrderBy />
                        </div>
                    </div>
                    {active === 0 ? (<><ActiveAds user="valeria" /></>) : (<></>)}
                    {active === 1 ? (<><PurchasedAds user="valeria" /></>) : (<></>)}
                    {active === 2 ? (<><SoldAds user="valeria" /></>) : (<></>)}
                </div>
            </div >
        </>
    )

}