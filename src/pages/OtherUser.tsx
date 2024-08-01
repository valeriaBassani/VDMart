import OtherUserHistory from "../components/Organisms/OtherUserHistory/OtherUserHistory";
import User from "../components/Organisms/User/User";

export default function OtherUser() {
    return (
        <>
            <div className="container-sm">
                <h4>Profilo Utente</h4>
                <User isActual={false} />
                <OtherUserHistory />
            </div>

        </>
    )
}