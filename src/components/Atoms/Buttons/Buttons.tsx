import "./Buttons.css"

type Props = {
    className: string
    onClick?: () => void,
    children?: React.ReactNode;
    wide?: boolean
}

export default function Button({ className, onClick, children, wide }: Props) {
    return (
        <>
            <button type="button" className={className} onClick={onClick} style={{ width: wide ? "100%" : "fit-content" }}>{children}</button>
        </>
    )
}