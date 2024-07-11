import { useRef, useState } from "react"
import PopUp from "../PopUp/PopUp";
import "./ImageUpload.css"

type Props = {
    label?: string,
    upCount?: (count: number) => void,
}

export default function ImageUpload({ label, upCount }: Props) {
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
            upCount(1)
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
            upCount(0)
        }
    }

    const showImage = () => {
        setShow(true)
    }

    return (
        <>
            <div className="Field">
                {image ? (
                    <>
                        <div className="Image">
                            <button className="Delete" onClick={handleDelete}></button>
                            <img src={image} alt="Anteprima" style={{ maxWidth: '100px', maxHeight: '100px' }} onClick={showImage} />
                        </div>
                    </>
                ) : (
                    <>
                        <button onClick={handleButtonClick} className="InputFile" />
                        <input ref={inputRef} type='file' hidden onChange={handleFileUpload} />
                    </>
                )}
            </div >
            <div className="container" style={{ position: 'absolute' }}>
                {show && <PopUp
                    type="success"
                    title="Immagine articolo"
                    label="Annuncio pubblicato con successo!"
                    description="Il tuo articolo ora è in vendita sulla bacheca degli annunci. Vedi il tuoi annunci o torna alla home"
                    primaryLink={{ to: "/registrazione", label: "Area riservata", className: "Primary" }}
                    secondaryLink={{ to: "/home", label: "Home", className: "Secondary" }} />}
            </div>
        </>
    )
}

