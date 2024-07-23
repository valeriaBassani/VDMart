import Button from "../Buttons/Buttons"
import "./PageIndex.css"
type Props = {
    page: number
}
export default function PageIndex({ page }: Props) {
    return (
        <>
            <Button className="page__index--active" >{page}</Button>
        </>
    )
}