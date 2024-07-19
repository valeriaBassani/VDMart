import { useRef, useState } from "react"
import PopUp from "../../PopUp/PopUp";
import "./ImageUpload.css"

type Props = {
    label?: string,
    upCount?: (count: number) => void,
    isNext?: boolean
}

export default function ImageUpload({ label, upCount, isNext }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string>();
    const [show, setShow] = useState(false);


    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const selectedFile = files[0];
        const imageUrl = URL.createObjectURL(selectedFile);
        setImage(imageUrl);
        if (upCount) {
            upCount(+1)
        }

    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputRef && inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleDelete = () => {
        setImage("");
        if (upCount) {
            upCount(-1)
        }
    }

    const showImage = () => {
        setShow(!show)
    }

    return (
        <>
            <div className="field">
                {image ? (
                    <>
                        <div className="item--loaded">
                            <button className="item--loaded__delete" onClick={handleDelete}></button>
                            <img src={image} alt="Anteprima" style={{ maxWidth: '100px', maxHeight: '100px' }} onClick={showImage} />
                        </div>
                    </>
                ) : (
                    <>
                        {isNext ? (
                            <>
                                <button onClick={handleButtonClick} className="item item--next" />
                                <input ref={inputRef} type='file' hidden onChange={handleFileUpload} />
                            </>
                        ) : (
                            <>
                                <div className="item"></div>
                            </>
                        )}
                    </>
                )}
            </div >
            <div className="container" style={{ position: 'absolute' }}>
                {show && <PopUp
                    type="success"
                    title="Immagine"
                    src={image}
                    label="Annuncio pubblicato con successo!"
                    description="Il tuo articolo ora è in vendita sulla bacheca degli annunci. Vedi il tuoi annunci o torna alla home"
                    primaryLink={{ to: "/registrazione", label: "Area riservata", className: "Primary" }}
                    secondaryLink={{ to: "/home", label: "Home", className: "Secondary" }} />}
            </div>
        </>
    )
}

