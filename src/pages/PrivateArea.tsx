import User from "../components/Organisms/User/User";
import UserHistory from "../components/Organisms/UserHistory/UserHistory";

export default function PrivateArea() {
    return (
        <>
            <div className="container-sm">
                <h4>Il tuo profilo</h4>
                <User mail="valeria@gmail.com" isActual={true} />
                <UserHistory />
            </div>

        </>
    )
}