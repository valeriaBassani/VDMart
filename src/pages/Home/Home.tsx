import Adv from "../../components/Adv/Adv";
import CategoryFilter from "../../components/FiletrByCategory/FiletrByCategory";
import PriceFilter from "../../components/FilterByPrice/FilterByPrice";
import Shipping from "../../components/FilterByShipping/FilterByShipping";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import './Home.css';
import Submit from "../../components/SubmitButton/Submit";

export default function Home() {
    return (
        <body>
            <NavBar />
            <div className="container sm p-4">
                <div className="row mt-5 ">
                    <div className="col" >
                        <SearchBar />
                    </div>
                </div>
                <div className="row gap-3 py-4 my-4 Board">
                    <div className="col-3 p-0 Filters" >
                        <div className="col d-flex flex-column gap-3">
                            <CategoryFilter />
                            <PriceFilter />
                            <Shipping />
                        </div>
                    </div>
                    <div className="col p-3 d-flex flex-column gap-3 Ads" >
                        <div className="row">
                            <div className="col">
                                <h4>Annunci</h4>
                                <p>64 risultati</p>
                            </div>
                            <div className="col-auto">
                                <Submit label="Ordina per" />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col d-flex flex-column justify-content-center gap-3">
                                <Adv />
                                <Adv />
                                <Adv />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </body>
    )
}