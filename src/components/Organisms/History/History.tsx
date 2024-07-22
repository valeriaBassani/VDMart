import Button from "../../Atoms/Buttons/Buttons";
import OrderBy from "../../Molecules/OrderBy/OrderBy";
import AdvSmallPreview from "../AdvSmallPreview/AdvSmallPreview";

export default function History() {
    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex flex-column gap-3">
                    <div className="row gap-3">
                        <div className="col d-flex gap-3">
                            <Button className="btn--primary">Annunci Attivi</Button>
                            <Button className="btn--inactive">Acquisti</Button>
                            <Button className="btn--inactive">Vendite </Button>
                        </div>
                        <div className="col-auto">
                            <OrderBy />
                        </div>
                    </div>
                    <div className="row gap-3">
                        <div className="col d-flex justify-content-center">
                            <AdvSmallPreview />
                        </div>
                        <div className="col  d-flex justify-content-center">
                            <AdvSmallPreview />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}