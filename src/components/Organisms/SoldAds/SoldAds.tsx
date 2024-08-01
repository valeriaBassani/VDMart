import { useEffect, useState } from "react";
import { User } from "../../../storesData/account";
import { AdvData } from "../../../storesData/products";
import { getUserAds } from "../../../storesData/users";
import AdvSmallPreview from "../AdvSmallPreview/AdvSmallPreview";
type Props = {
    user: User
}
export default function PurchasedAds({ user }: Props) {
    const [ads, setAds] = useState<AdvData[]>([])

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const ads = await getUserAds(user.email);
                setAds(ads);
            } catch (error) {
                console.error("Errore durante il recupero degli annunci utente:", (error as Error).message);
            }
        };
        fetchAds();
    }, [user.email]);

    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex gap-3 flex-wrap justify-content-between">
                    {ads && ads.length > 0 && (
                        ads.map((adv) => (
                            <AdvSmallPreview type="purchased" adv={adv} />
                        ))
                    )}
                </div>
            </div>
        </>
    )
}