import PageIndex from "../../Atoms/PageIndex/PageIndex";
import PageNext from "../../Atoms/PageIndex/PageNext";
import PagePrev from "../../Atoms/PageIndex/PagePrev";

type Props = {
    page: number,
    onClick: (page: number) => void
}

export default function PageSelector({ page, onClick }: Props) {

    return (
        <>
            <div className="row">
                <div className="col d-flex gap-2">
                    <PagePrev />
                    <PageIndex page={page} />
                    <PageNext />
                </div>
            </div>

        </>
    )

}