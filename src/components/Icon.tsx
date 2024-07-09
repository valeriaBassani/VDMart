type Props = {
    url: string;
    className?: string
}

export default function Icon({ url, className }: Props) {
    return (
        <>
            <img src={url} style={{ marginRight: "0.5em" }} className={className}></img>
        </>
    )
}