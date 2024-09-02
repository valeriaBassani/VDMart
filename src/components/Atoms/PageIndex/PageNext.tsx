import { Button } from "react-bootstrap"
import "./PageIndex.css"
import right from "./chevron-right (2).svg"
import Icon from "../Icon"
import { MouseEventHandler } from "react"

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function PageNext({ onClick }: Props) {
    return (
        <>
            <Button className="page__index--selector" onClick={onClick} aria-label="successivo"><Icon url={right} alt="successivo" /></Button>
        </>
    )
}