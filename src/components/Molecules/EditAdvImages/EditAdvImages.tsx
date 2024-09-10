import left from "./chevron-left (1).svg"
import right from "./chevron-right (2).svg"
import "./EditAdvImages.css"
import { useCallback, useEffect, useState } from "react"
import Icon from "../../Atoms/Icon"
import ImageUpload from "../ImageUpload/ImageUpload"
import { AdvData } from "../../../storesData/products"

type Props = {
    adv: AdvData
}
export default function EditAdvImages({ adv }: Props) {

    const [empty, setEmpty] = useState(0)
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
        if (index + 1 < adv.images.length) {
            setIndex(index + 1)
        }
    }, [adv.images.length, index])

    useEffect(() => {
        setEmpty(5 - adv.images.length)
    }, [adv.images.length, index])
    return (
        <>
            <div className="row gap-2 carousel">
                <div className="row">
                    <div className="col carousel__item">
                        <img src={adv.images[index]} alt="foto articolo" />
                        <div className="carousel__indicators">
                            <span onClick={handlePrev}><Icon url={left} alt="precedente" /></span>
                            <span onClick={handleNext}> <Icon url={right} alt="successivo" /></span>
                        </div>
                    </div>
                </div>
                <div className="row gap-2">
                    {adv.images && adv.images.length > 0 && (
                        adv.images
                            .map((image, index) => (
                                <><div className="col carousel__item">
                                    <button className="carousel__item--delete" ></button>
                                    <button onClick={() => handleClick(index)}>
                                        <img src={image} alt="foto articolo" />
                                    </button>
                                </div></>
                            ))
                    )}
                    <div className="col p-0">
                        <ImageUpload isNext={true} />
                    </div>
                    {Array.from({ length: empty }).map((_, index) => (
                        <div className="col carousel__item"></div>
                    ))}
                </div>
                <div className="row text-center">
                    <p>{index + 1}/{adv.images.length}</p>
                </div>
            </div>
        </>
    )

}