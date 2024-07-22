import { ReactComponent as Star } from "./star.svg"
import "./Review.css"
type Props = {
    mail: string
}
export default function Review({ mail }: Props) {
    return (
        <>
            <div className="row review">
                <div className="col-auto">
                    <div className="review__icon">
                        <p>V</p>
                    </div>
                </div>
                <div className="col d-flex flex-column align-items-start gap-2 py-2">
                    <h4>Valeria Bassani</h4>
                    <div className="Stars">
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star fill="#880D1E" />
                        <Star />
                    </div>
                    <div className="review__text">
                        <p>recensione </p>
                    </div>
                    <p>10/11/2022</p>
                </div>
            </div>
        </>
    )
}