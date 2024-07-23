import AdvSmallPreview from "../AdvSmallPreview/AdvSmallPreview";
type Props = {
    user: string
}
export default function PurchasedAds({ user }: Props) {
    return (
        <>
            <div className="row gap-3">
                <div className="col d-flex justify-content-center">
                    <AdvSmallPreview type="purchased" />
                </div>
                <div className="col  d-flex justify-content-center">
                    <AdvSmallPreview type="purchased" />
                </div>
            </div>
        </>
    )
}