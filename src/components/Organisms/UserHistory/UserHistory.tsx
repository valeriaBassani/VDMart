import { useCallback, useState } from "react";
import Button from "../../Atoms/Buttons/Buttons";
import { User } from "../../../storesData/account";
import AdvSmallPreview from "../AdvSmallPreview/AdvSmallPreview";
import "./UserHistory.css";

type Props = {
    user: User
}

export default function UserHistory({ user }: Props) {

    const [active, setActive] = useState(0)

    const handleActive = useCallback((index: number) => {
        setActive(index)
    }, [])

    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex gap-3">
                    <Button className={active === 0 ? "btn--primary" : "btn--inactive"} onClick={() => handleActive(0)}>Annunci Attivi</Button>
                    <Button className={active === 1 ? "btn--primary" : "btn--inactive"} onClick={() => handleActive(1)}>Acquisti</Button>
                    <Button className={active === 2 ? "btn--primary" : "btn--inactive"} onClick={() => handleActive(2)}>Vendite </Button>
                </div>
            </div>

            <div className="main p-3 my-3">
                <div className="col d-flex gap-3 flex-wrap ">
                    {active === 0 && (<>
                        {user.actives && user.actives.length > 0 ? (
                            user.actives.map((adv) => (
                                <AdvSmallPreview type="active" isActual={true} adv={adv} />
                            ))
                        ) : (<><p>nessun annuncio attivo</p></>)}
                    </>)}
                    {active === 1 && (<> <div className="col d-flex gap-3 flex-wrap justify-content-between">
                        {user.purchased && user.purchased.length > 0 ? (
                            user.purchased.map((adv) => (
                                <AdvSmallPreview type="purchased" isActual={true} adv={adv} />
                            ))
                        ) : (<><p>nessun acquisto effettuato</p></>)}
                    </div></>)}
                    {active === 2 && (<> <div className="col d-flex gap-3 flex-wrap justify-content-between">
                        {user.sold && user.sold.length > 0 ? (
                            user.sold.map((adv) => (
                                <AdvSmallPreview type="sold" isActual={true} adv={adv} />
                            ))
                        ) : (<><p>nessun annuncio venduto</p></>)}
                    </div></>)}
                </div>
            </div>
        </>
        // <>
        //     <div className="row gap-3">
        //         <div className="col d-flex flex-column gap-3">
        //             <div className="row gap-3">
        //                 <div className="col p-0 d-flex gap-3">
        //                     <Button className={active === 0 ? "btn--primary" : "btn--inactive"} onClick={() => setActive(0)}>Annunci Attivi</Button>
        //                     <Button className={active === 1 ? "btn--primary" : "btn--inactive"} onClick={() => setActive(1)}>Acquisti</Button>
        //                     <Button className={active === 2 ? "btn--primary" : "btn--inactive"} onClick={() => setActive(2)}>Vendite </Button>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 {active === 0 && (<>
        //                     {user.actives && user.actives.length > 0 ? (
        //                         user.actives.map((adv) => (
        //                             <AdvSmallPreview type="active" isActual={true} adv={adv} />
        //                         ))
        //                     ) : (<><p>nessun annuncio attivo</p></>)}
        //                 </>)}


        // {active === 1 && (<> <div className="col d-flex gap-3 flex-wrap justify-content-between">
        //     {user.purchased && user.purchased.length > 0 ? (
        //         user.purchased.map((adv) => (
        //             <AdvSmallPreview type="purchased" isActual={true} adv={adv} />
        //         ))
        //     ) : (<><p>nessun acquisto effettuato</p></>)}
        // </div></>)}
        // {active === 2 && (<> <div className="col d-flex gap-3 flex-wrap justify-content-between">
        //     {user.sold && user.sold.length > 0 ? (
        //         user.sold.map((adv) => (
        //             <AdvSmallPreview type="sold" isActual={true} adv={adv} />
        //         ))
        //     ) : (<><p>nessun annuncio venduto</p></>)}
        // </div></>)}
        //                 {/* {active === 0 && (<> <ActiveAds user={user} isActual={true} /></>)}
        //                 {active === 1 && (<> <PurchasedAds user={user} /></>)}
        //                 {active === 2 && (<> <SoldAds user={user} /></>)} */}
        //             </div>
        //         </div>
        //     </div >
        // </>
    )


}