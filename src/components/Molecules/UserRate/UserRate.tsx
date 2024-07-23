import { useNavigate } from "react-router-dom"
import { ReactComponent as Star } from "./star.svg"
import "./UserRate.css"
type Props = {
    mail: string,
}
export default function UserRate({ mail }: Props) {

    const navigate = useNavigate();
    const handleClick = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        navigate('/profilo-utente');
    }
    return (
        <>
            <div className="rating">
                <button className="link" onClick={handleClick} ><p>{mail}</p></button>
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