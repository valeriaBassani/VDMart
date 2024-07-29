import AdvPreview from "../../components/Organisms/AdvPreview/AdvPreview";
import CategoryFilter from "../../components/Molecules/FiletrByCategory/FiletrByCategory";
import PriceFilter from "../../components/Molecules/FilterByPrice/FilterByPrice";
import Shipping from "../../components/Molecules/FilterByShipping/FilterByShipping";
import SearchBar from "../../components/Molecules/SearchBar/SearchBar";
import './Home.css';
import OrderBy from "../../components/Molecules/OrderBy/OrderBy";
import PageSelector from "../../components/Molecules/PageSelector/PageSelector";
import { useCallback, useState } from "react";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1)
    const handleClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])
    return (
        <body>
            <div className="container sm p-4 ">
                <div className="row ">
                    <div className="col d-flex flex-column gap-2" >
                        <SearchBar />
                    </div>
                </div>
                <div className="row gap-3 py-4 my-4 home__board">
                    <div className="col-3 home__filters main__section " >
                        <div className="col d-flex flex-column gap-3">
                            <h4>Filtri di ricerca</h4>
                            <CategoryFilter />
                            <PriceFilter />
                            <Shipping />
                        </div>
                    </div>
                    <div className="col p-3 d-flex flex-column gap-3 main__section " >
                        <div className="row">
                            <div className="col">
                                <h4>Annunci</h4>
                                <p>64 risultati</p>
                            </div>
                            <div className="col-auto">
                                <OrderBy />
                            </div>
                        </div>
                        <div className="row align-items-center" >
                            <div className="col d-flex flex-column justify-content-center gap-3">
                                <AdvPreview />
                                <AdvPreview />
                                <AdvPreview />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col d-flex justify-content-center">
                                <PageSelector page={currentPage} onClick={handleClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}