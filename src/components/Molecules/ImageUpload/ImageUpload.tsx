import { useCallback, useRef, useState } from "react"
import "./ImageUpload.css"
import Dialog from "../../Template/DialogPopUp/Dialog";

type Props = {
    label?: string,
    upCount?: (count: number) => void,
    onClick?: (image: string) => void,
    isNext?: boolean
}

export default function ImageUpload({ label, upCount, onClick, isNext }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string>();
    const [show, setShow] = useState(false);

    function toBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result as string);
            };

            reader.onerror = () => {
                reject(new Error('Failed to convert file to base64'));
            };

            reader.readAsDataURL(file);
        });
    }

    const handleFileUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (!files) return;

        const selectedFile = files[0];
        try {
            const base64Image = await toBase64(selectedFile);
            setImage(base64Image);
            if (onClick) {
                onClick(base64Image);
            }
            if (upCount) {
                upCount(+1);
            }
        } catch (error) {
            console.error('Error converting file to Base64:', error);
        }

    }, [onClick, upCount]);

    const handleButtonClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inputRef && inputRef.current) {
            inputRef.current.click();
        }
    }, []);

    const handleDelete = useCallback(() => {
        setImage("");
        if (upCount) {
            upCount(-1)
        }
    }, [upCount]);

    const showImage = () => {
        setShow(!show)
    }

    const close = () => {
        setShow(false)
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
            <Dialog title='immagine caricata' show={show} onHide={close} >
                <div className="row">
                    <div className="col item__preview">
                        <img src={image} alt="foto articolo" />
                    </div>
                </div>
            </Dialog>
        </>
    )
}

