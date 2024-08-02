import { useEffect, useState } from "react";
import { emptyUser, getActualUser } from "../../../storesData/users";
import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import ActiveAds from "../ActiveAds/ActiveAds";
import { User } from "../../../storesData/account";

export default function OtherUserHistory() {

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const user = await getActualUser()
                setUser(user);
            } catch (error) {
                console.error("Errore durante il recupero degli annunci in bacheca", (error as Error).message);
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
                            <Button className="btn--primary">Annunci Attivi</Button>
                        </div>
                        <div className="col-auto">
                            {/* <OrderBy /> */}
                        </div>
                    </div>
                    <ActiveAds user={user} />
                </div>
            </div >
        </>
    )

}