import { ReactComponent as Star } from "./star.svg"
import "./UserRate.css"
type Props = {
    mail: string,
}
export default function UserRate({ mail }: Props) {
    return (
        <>
            <div className="Review">
                <p>{mail}</p>
                <div className="Stars">
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