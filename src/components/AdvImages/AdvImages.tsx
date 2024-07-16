import ipad from "./ipad2.jpg"
import ipad2 from "./ipad.jpg"
import ipad3 from "./ipad3.jpg"
import left from "./chevron-left (1).svg"
import right from "./chevron-right (2).svg"
import "./AdvImages.css"
import { useState } from "react"
import Icon from "../Icon"
export default function AdvImages() {

    const images = [ipad, ipad2, ipad3];

    const [index, setIndex] = useState(0)
    const handleClick = (index: number) => {

        setIndex(index)
    }
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const handleNext = () => {
        if (index + 1 < images.length) {
            setIndex(index + 1)
        }
    }

    return (
        <>
            <div className="row gap-2 Container">
                <div className="row">
                    <div className="col Pictures">
                        <img src={images[index]} alt="foto articolo" />
                        <div className="Navigate">
                            <span onClick={handlePrev}><Icon url={left} /></span>
                            <span onClick={handleNext}> <Icon url={right} /></span>
                        </div>
                    </div>
                </div>
                <div className="row gap-2">
                    <div className="col Pictures">
                        <button onClick={() => handleClick(0)}>
                            <img src={ipad} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col Pictures">
                        <button onClick={() => handleClick(1)}>
                            <img src={ipad2} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col Pictures">
                        <button onClick={() => handleClick(2)}>
                            <img src={ipad3} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col Pictures">

                    </div>
                    <div className="col Pictures">

                    </div>
                </div>
                <div className="row text-center">
                    <p>{index + 1}/{images.length}</p>
                </div>
            </div>
        </>
    )

}