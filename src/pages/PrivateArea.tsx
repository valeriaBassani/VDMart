import Footer from "../components/footer/Footer";
import User from "../components/User/User";

export default function LogIn() {
    return (
        <>
            <h4>Le tue credenziali</h4>
            <User firstName="valeria" secondName="bassani" mail="valeria@gmail.com" />
            <Footer />
        </>
    )
}