import { ReactComponent as Star } from "./star.svg"
import "./UserRate.css"
type Props = {
    mail: string,
}
export default function UserRate({ mail }: Props) {
    return (
        <>
            <div className="rating">
                <p>{mail}</p>
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