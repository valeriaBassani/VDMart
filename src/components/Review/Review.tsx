import { ReactComponent as Star } from "./star.svg"
import "./Review.css"
type Props = {
    mail: string,
}
export default function Review({ mail }: Props) {
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