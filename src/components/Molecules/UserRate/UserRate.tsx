import { useNavigate } from "react-router-dom"
import { ReactComponent as Star } from "./star.svg"
import "./UserRate.css"
import { useCallback, useEffect, useState } from "react";
import { emptyUser, getUserByEmail } from "../../../storesData/users";
import { User } from "../../../storesData/account";
type Props = {
    mail: string,
}
export default function UserRate({ mail }: Props) {

    const [user, setUser] = useState<User>(emptyUser)

    const navigate = useNavigate();
    const handleClick = useCallback((e: React.SyntheticEvent) => {
        e.stopPropagation();
        localStorage.setItem('otherUser', JSON.stringify(mail));
        navigate('/profilo-utente');
    }, [mail, navigate])


    useEffect(() => {
        const fetchAds = async () => {
            try {
                const user = await getUserByEmail(mail);
                setUser(user);
            } catch (error) {
                console.error("Errore durante il recupero dell'utente", (error as Error).message);
            }
        };
        fetchAds();
    }, [mail]);

    return (
        <>
            <div className="rating">
                <button className="link" onClick={handleClick} ><p>{user.name}</p></button>
                <div className="rating__stars">
                    <Star fill="#880D1E" />
                    <Star fill="#880D1E" />
                    <Star fill="#880D1E" />
                    <Star fill="#880D1E" />
                    <Star />
                </div>
            </div>
        </>
    )
}