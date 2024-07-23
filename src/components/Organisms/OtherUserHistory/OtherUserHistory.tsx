import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import ActiveAds from "../ActiveAds/ActiveAds";

export default function OtherUserHistory() {

    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex flex-column gap-3">
                    <div className="row gap-3">
                        <div className="col d-flex gap-3">
                            <Button className="btn--primary">Annunci Attivi</Button>
                        </div>
                        <div className="col-auto">
                            <OrderBy />
                        </div>
                    </div>
                    <ActiveAds user="luca" />
                </div>
            </div >
        </>
    )

}