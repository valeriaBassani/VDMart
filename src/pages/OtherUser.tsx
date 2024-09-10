import { useEffect, useState } from "react";
import UserArea from "../components/Organisms/UserArea/UserArea";
import { User } from "../storesData/account";
import { emptyUser, getOtherUser, getUserByEmail } from "../storesData/users";
import Button from "../components/Atoms/Buttons/Buttons";
import AdvSmallPreview from "../components/Organisms/AdvSmallPreview/AdvSmallPreview";
import { UserInfo } from "../components/Molecules/UserInfo";

export default function OtherUser() {

    const [user, setUser] = useState<User>(emptyUser)

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const userMail = await getOtherUser()
                setUser(await getUserByEmail(userMail));
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
                <div className="main__section p-4 my-3">
                    <div className="row">
                        <div className="col">
                            <UserInfo user={user} isActual={false} />
                        </div>
                    </div>
                    <div className="row border-top pt-4">
                        <UserArea user={user} isActual={false} />
                    </div>
                </div>

                {/* <OtherUserHistory user={user} /> */}

                {/*contenuto componente otherUserHisroty*/}
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
                        <div className="main p-3">
                            <div className="col d-flex gap-3 flex-wrap justify-content-between">
                                {user.actives && user.actives.length > 0 ? (
                                    user.actives.map((adv) => (
                                        <AdvSmallPreview type="active" isActual={false} adv={adv} />
                                    ))
                                ) : (<><p>questo utente non ha annunci attivi</p></>)}
                            </div>
                        </div>
                    </div>
                </div >
                {/*fine contenuto componente otherUserHisroty*/}
            </div>
        </>
    )
}