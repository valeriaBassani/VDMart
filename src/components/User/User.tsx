import UserInfo from "../UserInfo/UserInfo";

type Props = {
    mail: string;
}

export default function User({ mail }: Props) {

    return (
        <>
            <div className="Create">
                <div className="row">
                    <UserInfo mail="valeria.bassani@gmail.com" isUser={true} />
                </div>
                <div className="row">

                    <div className="row">
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                        <div className="col">

                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </>
    )
}
