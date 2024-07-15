import ipad from "./ipad2.jpg"
import ipad2 from "./ipad.jpg"
import ipad3 from "./ipad3.jpg"
import "./AdvImages.css"
import { useState } from "react"
export default function AdvImages() {

    const images: string[] = [""]
    images[0] = ipad
    images[1] = ipad2
    images[2] = ipad3

    const [main, setMain] = useState(images[0])
    const handleClick = (img: string) => {
        setMain(img)
    }

    return (
        <>
            <div className="row gap-2">
                <div className="row">
                    <div className="col Pictures">
                        <img src={main} />
                    </div>
                </div>
                <div className="row gap-2">
                    <div className="col Pictures">
                        <button onClick={() => handleClick(images[0])}>
                            <img src={ipad} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col Pictures">
                        <button onClick={() => handleClick(images[1])}>
                            <img src={ipad2} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col Pictures">
                        <button onClick={() => handleClick(images[2])}>
                            <img src={ipad3} alt="Thumbnail 1" />
                        </button>
                    </div>
                    <div className="col Pictures">

                    </div>
                    <div className="col Pictures">

                    </div>
                </div>
            </div>
        </>
    )

}