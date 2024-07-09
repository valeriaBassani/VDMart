import './Submit.css';

type Props = {
    label?: string;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    className?: string;
}

export default function Submit({ label, onClick, className }: Props) {
    return (
        <>
            <input type="submit" value={label} className={className} onClick={onClick}></input>
        </>
    )
}