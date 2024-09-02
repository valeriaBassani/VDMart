import { Button } from "react-bootstrap"
import "./PageIndex.css"
import Icon from "../Icon"
import left from "./chevron-left (1).svg"
import { MouseEventHandler } from "react"

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function PagePrev({ onClick }: Props) {
    return (
        <>
            <Button className="page__index--selector" onClick={onClick} ><Icon url={left} alt="precedente" /></Button>
        </>
    )
}