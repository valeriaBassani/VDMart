import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import { User } from "../../../storesData/account";
import AdvSmallPreview from "../AdvSmallPreview/AdvSmallPreview";

type Props = {
    user: User
}

export default function OtherUserHistory({ user }: Props) {

    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex flex-column gap-3">
                    <div className="row gap-3">
                        <div className="col d-flex gap-3">
                            <Button className="btn--primary">Annunci Attivi</Button>
                        </div>
                        <div className="col-auto">
                            {/* <OrderBy /> */}
                        </div>
                    </div>
                    <div className="main p-3">
                        <div className="col d-flex gap-3 flex-wrap justify-content-between">
                            {user.actives && user.actives.length > 0 && (
                                user.actives.map((adv) => (
                                    <AdvSmallPreview type="active" isActual={false} adv={adv} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}