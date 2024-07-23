import { Button } from "react-bootstrap"
import "./PageIndex.css"
import right from "./chevron-right (2).svg"
import Icon from "../Icon"

export default function PageNext() {
    return (
        <>
            <Button className="page__index--selector" ><Icon url={right} /></Button>
        </>
    )
}