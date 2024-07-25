import { useCallback, useState } from "react";
import "./SupportCategory.css"

type Props = {
    title: string,
    text: string,
    clicked: boolean,
    onClick: (name: string, clicked: boolean) => void,
}

export default function SupportCategory({ text, title, clicked, onClick }: Props) {

    const [seeMore, setSeeMore] = useState(false)

    const handleClick = useCallback((): void => {
        if (onClick) {
            onClick(title, !clicked);
        }
    }, [clicked, onClick, title])

    return (
        <>
            <div className={`support__item ${clicked ? 'support__item--clicked' : ''}`} onClick={handleClick}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className={`support__item--mobile ${clicked ? 'support__item--clicked' : ''}`} >
                <div className="row">
                    <div className="col d-flex align-items-center" onClick={handleClick}>
                        <h4>{title}</h4>
                    </div>
                    <div className="col-2" onClick={() => { setSeeMore(!seeMore) }}>
                        {seeMore ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke={clicked ? 'white' : 'black'}
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke={clicked ? 'white' : 'black'}
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </>
                        )}
                    </div>
                </div>
                <div className={`support__item__more ${seeMore ? 'support__item__more--visible' : ''}`}>
                    <p>{text}</p>
                </div>
            </div >
        </>
    )
}