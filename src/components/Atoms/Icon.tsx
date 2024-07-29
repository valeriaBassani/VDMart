type Props = {
    url: string;
    alt: string;
    margin?: string;
}

export default function Icon({ url, margin, alt }: Props) {
    return (
        <>
            <img src={url} style={{ marginRight: margin }} alt={alt}></img>
        </>
    )
}