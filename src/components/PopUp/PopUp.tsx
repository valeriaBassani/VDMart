import { Link } from "react-router-dom"
import "./PopUp.css"
import check from "./check-circle 1.svg"
import fail from "./x-circle.svg"
import email from "./mail.svg"
import help from "./help-circle.svg"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

type Props = {
    type: "success" | "insuccess" | "request" | "mail";
    title: string,
    label: string,
    description: string,
    assistance?: boolean,
    primaryLink: { to: string; label: string; className?: string };
    secondaryLink: { to: string; label: string; className?: string };
}

type MyVerticallyCenteredModalProps = {
    show: boolean;
    onHide: () => void;
    type: "success" | "insuccess" | "request" | "mail";
    title: string,
    label: string,
    description: string,
    assistance?: boolean,
    primaryLink: { to: string; label: string; className?: string };
    secondaryLink: { to: string; label: string; className?: string };
};

const MyVerticallyCenteredModal: React.FC<MyVerticallyCenteredModalProps> = ({
    show,
    onHide,
    type,
    title,
    label,
    description,
    assistance,
    primaryLink,
    secondaryLink
}) => {
    const icon = {
        "success": check,
        "insuccess": fail,
        "request": help,
        "mail": email
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    <h4>{title}</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="Contents">
                    <img src={icon[type]} alt="Icon" />
                    <div className="Text">
                        <label>{label}</label>
                        <p>{description}</p>
                        <div className="Actions">
                            <Link to={secondaryLink.to} className={secondaryLink.className || "Secondary"}>{secondaryLink.label}</Link>
                            <Link to={primaryLink.to} className={primaryLink.className || "Primary"}>{primaryLink.label}</Link>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="Help">
                    {assistance && <p>Bisogno di aiuto? <Link to={`/messages`} className="link">Contatta l'assistenza</Link></p>}
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default function PopUp({ type, title, label, description, assistance, primaryLink, secondaryLink }: Props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    return (
        <>
            <MyVerticallyCenteredModal
                show={show}
                onHide={handleClose}
                type={type}
                title={title}
                label={label}
                description={description}
                assistance={assistance}
                primaryLink={primaryLink}
                secondaryLink={secondaryLink}
            />

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title><h4>{title}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Contents">
                        <Icon url={icon[type]} />
                        {type === "success" && <Icon url={check}></Icon>}
                        {type === "insuccess" && <Icon url={fail}></Icon>}
                        {type === "request" && <Icon url={help}></Icon>}
                        {type === "mail" && <Icon url={email}></Icon>}
                        <div className="Text">
                            <label>{label}</label>
                            <p>{description}</p>
                            <div className="Actions">
                                <Link to={secondaryLink.to} className={secondaryLink.className || "Secondary"}>{secondaryLink.label}</Link>
                                <Link to={primaryLink.to} className={primaryLink.className || "Primary"}>{primaryLink.label}</Link>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="Help">
                        {assistance && <p>Bisogno di aiuto? <Link to={`/messages`} className="link">Contatta l'assistenza</Link></p>}
                    </div>
                </Modal.Footer>
            </Modal> */}
        </>

        // <div className="Back">
        //     <div className="PopUp">
        //         <div className="Title">
        //             <h4>{title}</h4>
        //             {close && <Icon url={x} />}
        //         </div>
        //         <div className="Contents">
        //             <Icon url={icon[type]} />
        //             {/* {type === "success" && <Icon url={check}></Icon>}
        //             {type === "insuccess" && <Icon url={fail}></Icon>}
        //             {type === "request" && <Icon url={help}></Icon>}
        //             {type === "mail" && <Icon url={email}></Icon>} */}
        //             <div className="Text">
        //                 <label>{label}</label>
        //                 <p>{description}</p>
        //                 <div className="Actions">
        //                     <Link to={secondaryLink.to} className={secondaryLink.className || "Secondary"}>{secondaryLink.label}</Link>
        //                     <Link to={primaryLink.to} className={primaryLink.className || "Primary"}>{primaryLink.label}</Link>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="Help">
        //             {assistance && <p>Bisogno di aiuto? <Link to={`/messages`} className="link">Contatta l'assistenza</Link></p>}
        //         </div>
        //     </div>
        // </div >
    )
}