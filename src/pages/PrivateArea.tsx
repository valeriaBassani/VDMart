import { useEffect, useState } from "react";
import UserHistory from "../components/Organisms/UserHistory/UserHistory";
import { emptyUser, getActualUser } from "../storesData/users";
import { User } from "../storesData/account";
import UserArea from "../components/Organisms/UserArea/UserArea";

export default function PrivateArea() {

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const user = await getActualUser()
                setUser(user);
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, []);

    return (
        <>
            <div className="container-sm">
                <h4>Il tuo profilo</h4>
                <UserArea user={user} isActual={true} />
                <UserHistory user={user} />
            </div>
        </>
    )
}