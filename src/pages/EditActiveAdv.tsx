import { useEffect, useState } from "react";
import EditActiveAdv from "../components/Organisms/EditActive/EditActive";
import { AdvData, emptyAds, getActualAdv } from "../storesData/products";

export default function AdvDetails() {

    const [adv, setAdv] = useState<AdvData>(emptyAds)
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const adv = await getActualAdv()
                setAdv(adv);
            } catch (error) {
                console.error("Errore durante il recupero dell'annuncio", (error as Error).message);
            }
        };
        fetchAds();
    }, [])
    return (
        <>
            <EditActiveAdv adv={adv} />
        </>
    )

}