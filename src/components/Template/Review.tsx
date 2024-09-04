import { useState, useEffect, useCallback } from "react";
import { Modal } from "react-bootstrap";
import { AdvData } from "../../storesData/products";
import { emptyUser, getUserByEmail } from "../../storesData/users";
import Button from "../Atoms/Buttons/Buttons";
import TextArea from "../Atoms/textArea/textArea";
import { saveReview, User } from "../../storesData/account";
import Submit from "../Atoms/SubmitButton/Submit";

type Props = {
    article: AdvData
    show: boolean,
    onSwitch: (modale: string) => void;
    onHide: () => void;
}
export default function Review({ article, show, onSwitch, onHide }: Props) {

    const [seller, setSeller] = useState<User>(emptyUser)
    useEffect(() => {
        const fetchAds = async () => {
            try {
                setSeller(await getUserByEmail(article.seller))
                console.log(seller);
            } catch (error) {
                console.error("Errore durante il recupero dell'utente attuale", (error as Error).message);
            }
        };
        fetchAds();
    }, [article.seller])

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // interface Review {
        //     reviewer: string;
        //     content: string;
        //     rating: number;
        //     date: Date;
        //     productId?: string;
        // }

        const formData = new FormData(e.currentTarget);
        const data: any = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(data);


        // onSwitch('secondo')
    }, [])

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState<number | null>(null);

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
                        <h4>Lascia una recensione</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row py-4 pop-up">
                        <div className="col d-flex flex-column gap-4 justify-content-center">
                            <div className="container-sm px-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="main row gap-4">
                                        <div className="row ">
                                            <div className="col-auto profile__icon">
                                                <h3>V</h3>
                                            </div>
                                            <div className="col d-flex flex-column gap-2" >
                                                <h4>{seller.name} {seller.lastName}</h4>
                                                <p>{seller.email}</p>
                                                <p>{seller.phone}</p>
                                            </div>
                                        </div>
                                        <div className="row border-top pt-4 justify-content-between">
                                            <div className="col d-flex flex-column align-items-center">
                                                <h4>Voto</h4>
                                                <div className="rating__stars">
                                                    {[...Array(5)].map((star, index) => {
                                                        const currentRating = index + 1;
                                                        return (
                                                            <label key={index}>
                                                                <input
                                                                    type="radio"
                                                                    name="rating"
                                                                    value={currentRating}
                                                                    onChange={() => setRating(currentRating)}
                                                                />
                                                                <span
                                                                    className="star"
                                                                    style={{
                                                                        color:
                                                                            currentRating <= (hover || rating) ? "#880D1E" : "#e4e5e9"
                                                                    }}
                                                                    onMouseEnter={() => setHover(currentRating)}
                                                                    onMouseLeave={() => setHover(null)}
                                                                >
                                                                    &#9733;
                                                                </span>
                                                            </label>
                                                        );
                                                    })}

                                                </div>
                                            </div>
                                            <TextArea label="Scrivi la tua recensione" name='description' maxLength={200} required={true} />
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col">
                                            <Submit className="btn--primary" label="Invia" />
                                            {/* <Button className="btn--primary" wide={true} onClick={handleReview}>Invia</Button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    );
}

