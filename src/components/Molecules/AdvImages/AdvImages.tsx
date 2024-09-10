import { useCallback, useEffect, useState } from "react"
import Icon from "../../Atoms/Icon"
import left from "./chevron-left (1).svg"
import right from "./chevron-right (2).svg"
import "./AdvImages.css"
import { AdvData } from "../../../storesData/products"

type Props = {
    adv: AdvData
}

export default function AdvImages({ adv }: Props) {

    const [index, setIndex] = useState(0)
    const [empty, setEmpty] = useState(0)

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
        setEmpty(6 - adv.images.length)
    }, [adv.images.length, index])

    return (
        <>
            <div className="row gap-2 carousel">
                <div className="row">
                    <div className="col carousel__item">
                        <img src={adv.images[index]} alt="foto articolo" />
                        <div className="carousel__indicators">
                            <span onClick={handlePrev} aria-label="precedente"><Icon url={left} alt="precedente" /></span>
                            <span onClick={handleNext} aria-label="successivo"> <Icon url={right} alt="successivo" /></span>
                        </div>
                    </div>
                </div>
                <div className="row gap-2">
                    {adv.images && adv.images.length > 0 && (
                        adv.images
                            .map((image, index) => (
                                <><div className="col carousel__item">
                                    <button onClick={() => handleClick(index)}>
                                        <img src={image} alt="foto articolo" />
                                    </button>
                                </div></>
                            ))
                    )}
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