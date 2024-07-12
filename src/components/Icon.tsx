type Props = {
    url: string;
}

export default function Icon({ url }: Props) {
    return (
        <>
            <img src={url} style={{ marginRight: "0.5em" }}></img>
        </>
    )
}