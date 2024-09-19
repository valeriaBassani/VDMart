import { useEffect, useState } from "react";
import UserHistory from "../components/Organisms/UserHistory/UserHistory";
import { emptyUser, getActualUser } from "../storesData/users";
import { User } from "../storesData/account";
import UserArea from "../components/Organisms/UserArea/UserArea";
import { UserInfo } from "../components/Molecules/UserInfo";
import { useTranslation } from "react-i18next";

export default function PrivateArea() {
    const { t } = useTranslation();
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
                <h4>{t('private-area.title')}</h4>
                <div className="row">
                    <div className="col">
                        <div className="main__section p-4 my-3">
                            <div className="row">
                                <div className="col">
                                    <UserInfo user={user} isActual={true} />
                                </div>
                            </div>
                            <div className="row border-top pt-4">
                                <UserArea user={user} isActual={true} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <UserHistory user={user} />
                    </div>
                </div>

            </div >
        </>
    )
}