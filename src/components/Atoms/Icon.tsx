type Props = {
    url: string;
    margin?: string;
}

export default function Icon({ url, margin }: Props) {
    return (
        <>
            <img src={url} style={{ marginRight: margin }}></img>
        </>
    )
}