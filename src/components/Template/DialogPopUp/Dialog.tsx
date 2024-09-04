import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DialogPopUp.css"
import { useTranslation } from "react-i18next";

type Props = {
    title: string,
    show: boolean,
    onSwitch?: (modale: string) => void;
    children?: React.ReactNode;
    onHide: () => void;
}
export default function Dialog({ title, show, children, onSwitch, onHide }: Props) {
    const { t } = useTranslation();
    return (
        <div className="container" style={{ position: "absolute" }}>
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
                    <div className="row text-center py-4 pop-up">
                        <div className="col d-flex flex-column gap-4 justify-content-center">
                            {children}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="Help">
                        <p>{t("supportLink.link-1")} <Link to={`/assistenza`} className="link">{t("supportLink.link-2")}</Link></p>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

