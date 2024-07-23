import { Button } from "react-bootstrap"
import "./PageIndex.css"
import Icon from "../Icon"
import left from "./chevron-left (1).svg"


export default function PagePrev() {
    return (
        <>
            <Button className="page__index--selector" ><Icon url={left} /></Button>
        </>
    )
}