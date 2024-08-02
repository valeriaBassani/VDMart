import { useEffect, useState } from "react";
import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import ActiveAds from "../ActiveAds/ActiveAds";
import PurchasedAds from "../PurchasedAds/PurchasedAds";
import SoldAds from "../SoldAds/SoldAds";
import { emptyUser, getActualUser } from "../../../storesData/users";
import { User } from "../../../storesData/account";

export default function UserHistory() {

    const [active, setActive] = useState(0)

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const user = await getActualUser();
                setUser(user);
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, []);

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
                            {/* <OrderBy /> */}
                        </div>
                    </div>
                    <div className="main p-3">
                        {active === 0 && (<> <ActiveAds user={user} /></>)}
                        {active === 1 && (<> <PurchasedAds user={user} /></>)}
                        {active === 2 && (<> <SoldAds user={user} /></>)}
                    </div>
                </div>
            </div >
        </>
    )

}