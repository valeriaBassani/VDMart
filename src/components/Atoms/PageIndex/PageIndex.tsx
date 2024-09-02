import Button from "../Buttons/Buttons"
import "./PageIndex.css"
type Props = {
    page: number
    className: string
}
export default function PageIndex({ page, className }: Props) {
    return (
        <>
            {/* <Button className="page__index--active" >{page}</Button> */}
            <Button className={className} >{page}</Button>
        </>
    )
}