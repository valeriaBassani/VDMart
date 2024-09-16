import Submit from "../../Atoms/SubmitButton/Submit";
import InputField from "../../Atoms/InputField/InputField";
import TextArea from "../../Atoms/textArea/textArea";
import Dialog from "../../Template/DialogPopUp/Dialog";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import check from "./check-circle 1.svg"
import { useTranslation } from "react-i18next";

type Props = {
    category: string
}

export default function SupportForm({ category }: Props) {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const [errors, setErrors] = useState({
        mail: "",
        text: "",
    })

    const validateForm = async (mail: string, text: string): Promise<boolean> => { //in store
        let errors = false
        setErrors({
            mail: "",
            text: "",
        })
        if (mail === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                mail: 'Campo obbligatorio'
            }));
        }
        if (text === '') {
            errors = true
            setErrors(prevErrors => ({
                ...prevErrors,
                text: 'Campo obbligatorio'
            }));
        }
        return errors
    }

    const handleClick = useCallback(() => {
        setShow(!show)
    }, [show])

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const text = formData.get('text') as string;
        const error = validateForm(email, text)

        if (!(await error)) {
            setShow(!show)
        }

    }, [show])

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="container-md  main__section">
                    <h4>{t("supportForm.form.title")}</h4>
                    <InputField label="Email" type="email" name="email" error={errors.mail} placeholder="email" required={true} ></InputField>
                    <div className="create__section">
                        <div className="row">
                            <div className="col d-flex gap-2 py-2">
                                <label>{t("supportForm.form.subject")}:</label>
                                <p> {category} </p>
                            </div>
                        </div>
                        <TextArea label={t("supportForm.form.message")} name="text" error={errors.text} maxLength={300} required={true} />
                    </div>
                    <Submit label={t("supportForm.form.submit")} className='btn--primary' />
                </div>
            </form >

            <Dialog title='Pubblica annuncio' show={show} onHide={handleClick} >
                <div className="row">
                    <div className="col">
                        <img src={check} alt="Icon" />
                    </div>
                </div>
                <div className="row content">
                    <div className="col d-flex flex-column gap-3 main p-3">
                        <div className="row">
                            <div className="col">
                                <label>{t("supportForm.dialog.messageSent")}</label>
                                <p>{t("supportForm.dialog.confirmationText")}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex gap-2 justify-content-center">
                                <Link to={"/"} className="btn--secondary">Home</Link>
                                <Link to={"/area-riservata"} className="btn--primary">{t("supportForm.dialog.reservedArea")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}