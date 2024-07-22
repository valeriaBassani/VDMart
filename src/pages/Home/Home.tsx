import AdvPreview from "../../components/Organisms/AdvPreview/AdvPreview";
import CategoryFilter from "../../components/Molecules/FiletrByCategory/FiletrByCategory";
import PriceFilter from "../../components/Molecules/FilterByPrice/FilterByPrice";
import Shipping from "../../components/Molecules/FilterByShipping/FilterByShipping";
import SearchBar from "../../components/Molecules/SearchBar/SearchBar";
import './Home.css';
import OrderBy from "../../components/Molecules/OrderBy/OrderBy";

export default function Home() {
    return (
        <body>
            <div className="container sm p-4">
                <div className="row ">
                    <div className="col d-flex flex-column gap-2" >
                        <SearchBar />
                    </div>
                </div>
                <div className="row gap-3 py-4 my-4 home__board">
                    <div className="col-3 p-0 home__filters" >
                        <div className="col d-flex flex-column gap-3">
                            <CategoryFilter />
                            <PriceFilter />
                            <Shipping />
                        </div>
                    </div>
                    <div className="col p-3 d-flex flex-column gap-3 main" >
                        <div className="row">
                            <div className="col">
                                <h4>Annunci</h4>
                                <p>64 risultati</p>
                            </div>
                            <div className="col-auto">
                                <OrderBy />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col d-flex flex-column justify-content-center gap-3">
                                <AdvPreview />
                                <AdvPreview />
                                <AdvPreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}