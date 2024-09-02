import { Button } from "react-bootstrap";

type Props = {
    pages: number[]
    currentPage: number,
    onClick: (page: number) => void
}

export default function PageSelector({ pages, currentPage, onClick }: Props) {

    const onClickPage = (page: number) => {
        onClick(page);
    }

    return (
        <>
            <div className="row">
                <div className="col d-flex gap-2">
                    {pages.length > 0 && pages.map((page, index) => (
                        index === currentPage - 1 ? (
                            <Button className="page__index--active" onClick={() => onClickPage(index)}>{page}</Button>
                        ) : (
                            <Button className="page__index" onClick={() => onClickPage(index)} >{page}</Button>
                        )
                    ))}
                </div>
            </div>

        </>
    )

}

