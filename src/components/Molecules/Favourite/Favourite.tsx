import { AdvData } from '../../../storesData/products';
import { getActualUser, updateActualUser, updateUsers } from '../../../storesData/users';
import './Favourite.css';
import { useCallback, useState } from "react";

type Props = {
    adv: AdvData
}

export default function Favourite({ adv }: Props) {
    const [favourite, setAsFavourite] = useState(false);
    const user = getActualUser()

    const handleClick = useCallback(async (e: React.SyntheticEvent) => {
        e.stopPropagation();
        setAsFavourite(!favourite);
        if (!favourite) {
            (await user).favourites.push(adv)
            console.log(user);
            updateActualUser()
            //localStorage.setItem('actualUser', JSON.stringify(await user));
            updateUsers(await user)
            console.log("added");
        } else {
            console.log("remove");
        }
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