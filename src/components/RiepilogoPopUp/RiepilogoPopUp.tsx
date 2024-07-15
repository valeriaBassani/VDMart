import { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";

type Props = {
    article: string,
}

export default function RiepilogoPopUp({ article }: Props) {
    const [show, setShow] = useState(true)
    function onHide(): void {
        setShow(false)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Riepilogo acquisto</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Section">
                        <p>{article}</p>
                        <div className="Actions">
                            <p>buttons</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )

}