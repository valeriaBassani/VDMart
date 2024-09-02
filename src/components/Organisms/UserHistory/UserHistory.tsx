import { useState } from "react";
import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import { User } from "../../../storesData/account";
import AdvSmallPreview from "../AdvSmallPreview/AdvSmallPreview";

type Props = {
    user: User
}

export default function UserHistory({ user }: Props) {

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
                            {/* <OrderBy /> */}
                        </div>
                    </div>
                    <div className="row gap-3">

                    </div>
                    <div className="main p-3">
                        {active === 0 && (<> <div className="col d-flex gap-3 flex-wrap justify-content-between">
                            {user.actives && user.actives.length > 0 && (
                                user.actives.map((adv) => (
                                    <AdvSmallPreview type="active" isActual={true} adv={adv} />
                                ))
                            )}
                        </div></>)}
                        {/* {active === 0 && (<> <ActiveAds user={user} isActual={true} /></>)}
                        {active === 1 && (<> <PurchasedAds user={user} /></>)}
                        {active === 2 && (<> <SoldAds user={user} /></>)} */}
                    </div>
                </div>
            </div >
        </>
    )

}