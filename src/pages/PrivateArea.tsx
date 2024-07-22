import History from "../components/Organisms/History/History";
import User from "../components/User/User";

export default function PrivateArea() {
    return (
        <>
            <div className="container-sm">
                <h4>Il tuo profilo</h4>
                <User mail="valeria@gmail.com" />
                <History />
            </div>

        </>
    )
}