import { AdvData, isFavourite } from '../../../storesData/products';
import { getActualUser } from '../../../storesData/users';
import './Favourite.css';
import { useCallback, useEffect, useState } from "react";
import { addToFavourites, removeFromFavourites } from '../../../storesData/account';

type Props = {
    adv: AdvData
}

export default function Favourite({ adv }: Props) {
    const [favourite, setAsFavourite] = useState(false);
    const user = getActualUser()

    useEffect(() => {
        const fetchAds = async () => {
            try {
                setAsFavourite(await isFavourite(adv))
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, [adv])

    const handleClick = useCallback(async (e: React.SyntheticEvent) => {
        e.stopPropagation();
        if (!favourite) {
            addToFavourites(await user, adv)
        } else {
            removeFromFavourites(await user, adv)
            //console.log("removed");
        }
        setAsFavourite(!favourite)

    }, [adv, favourite, user]);

    return (
        <>
            <div className="favourite">
                <button className={` ${favourite ? 'favourite--active' : ''}`} onClick={handleClick} aria-label={favourite ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}>
                    <label>{favourite ? 'Aggiunto' : 'Preferiti'}</label>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div >
        </>
    )
}