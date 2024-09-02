import { useEffect, useState } from "react";
import OtherUserHistory from "../components/Organisms/OtherUserHistory/OtherUserHistory";
import UserArea from "../components/Organisms/UserArea/UserArea";
import { User } from "../storesData/account";
import { emptyUser, getOtherUser } from "../storesData/users";

export default function OtherUser() {

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const user = await getOtherUser()
                setUser(user);
            } catch (error) {
                console.error("Errore durante il recupero dell'altro utente", (error as Error).message);
            }
        };
        fetchAds();
    }, []);

    return (
        <>
            <div className="container-sm">
                <h4>Profilo Utente</h4>
                <UserArea isActual={false} user={user} />
                <OtherUserHistory user={user} />
            </div>
        </>
    )
}