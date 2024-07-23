import ipad from "./ipad2.jpg"
import ipad2 from "./ipad.jpg"
import ipad3 from "./ipad3.jpg"
import left from "./chevron-left (1).svg"
import right from "./chevron-right (2).svg"
import "./EditAdvImages.css"
import { useCallback, useState } from "react"
import Icon from "../../Atoms/Icon"
import ImageUpload from "../ImageUpload/ImageUpload"
export default function EditAdvImages() {

    const images = [ipad, ipad2, ipad3];
    const [index, setIndex] = useState(0)

    const handleClick = useCallback((index: number) => {
        setIndex(index)
    }, [])

    const handlePrev = useCallback(() => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }, [index])

    const handleNext = useCallback(() => {
        if (index + 1 < images.length) {
            setIndex(index + 1)
        }
    }, [images.length, index])

    return (
        <>
            <div className="row gap-2 carousel">
                <div className="row">
                    <div className="col carousel__item">
                        <img src={images[index]} alt="foto articolo" />
                        <div className="carousel__indicators">
                            <span onClick={handlePrev}><Icon url={left} /></span>
                            <span onClick={handleNext}> <Icon url={right} /></span>
                        </div>
                    </div>
                </div>
                <div className="row gap-2">
                    <div className="col carousel__item ">
                        <button className="carousel__item--delete"></button>
                        <button onClick={() => handleClick(0)}>
                            <img src={ipad} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col carousel__item">
                        <button className="carousel__item--delete" ></button>
                        <button onClick={() => handleClick(1)}>
                            <img src={ipad2} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col carousel__item">
                        <button className="carousel__item--delete" ></button>
                        <button onClick={() => handleClick(2)}>
                            <img src={ipad3} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col">
                        <ImageUpload isNext={true} />
                    </div>
                    <div className="col carousel__item">

                    </div>
                </div>
                <div className="row text-center">
                    <p>{index + 1}/{images.length}</p>
                </div>
            </div>
        </>
    )

}