import Adv from "../components/Adv/Adv";
import Button from "../components/SubmitButton/Submit";
import CategoryFilter from "../components/FiletrByCategory/FiletrByCategory";
import PriceFilter from "../components/FilterByPrice/FilterByPrice";
import Shipping from "../components/FilterByShipping/FilterByShipping";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";
import './Pages.css';
import Submit from "../components/SubmitButton/Submit";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="container-lg">
                <div className="row my-4">
                    <div className="col">
                        <SearchBar />
                    </div>
                </div>
                <div className="row gap-3 Board mb-5">
                    <div className="col-3 Filters">
                        <div className="row">
                            <div className="col d-flex flex-column gap-3">
                                <CategoryFilter />
                                <PriceFilter />
                                <Shipping />
                            </div>
                        </div>
                    </div>
                    <div className="col Ads">
                        <div className="row justify-content-between">
                            <div className="col">
                                <h4>Annunci</h4>
                                <p>64 risultati</p>
                            </div>
                            <div className="col">
                                <Submit label="Ordina per" />
                            </div>
                        </div>
                        <div className="row justify-content-center p-2 gap-3 ">
                            <Adv />
                            <Adv />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}