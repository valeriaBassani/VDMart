import AdvPreview from "../../components/Organisms/AdvPreview/AdvPreview";
import CategoryFilter from "../../components/Molecules/FiletrByCategory/FiletrByCategory";
import PriceFilter from "../../components/Molecules/FilterByPrice/FilterByPrice";
import Shipping from "../../components/Molecules/FilterByShipping/FilterByShipping";
import SearchBar from "../../components/Molecules/SearchBar/SearchBar";
import './Home.css';
import OrderBy from "../../components/Molecules/OrderBy/OrderBy";
import PageSelector from "../../components/Molecules/PageSelector/PageSelector";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AdvData, getAds } from "../../storesData/products";

export default function Home() {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1)
    const handleClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    const [ads, setAds] = useState<AdvData[]>([])

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const ads = await getAds()
                setAds(ads);
            } catch (error) {
                console.error("Errore durante il recupero degli annunci in bacheca", (error as Error).message);
            }
        };
        fetchAds();
    }, []);


    return (
        <body>
            <div className="container sm p-4 ">
                <div className="row ">
                    <div className="col d-flex flex-column gap-2" >
                        <SearchBar />
                    </div>
                </div>
                <div className="row gap-3 py-4 my-4 home__board">
                    <div className="col-3 home__filters main p-3" >
                        <div className="col d-flex flex-column gap-3">
                            <h4>{t('home.filters')}</h4>
                            <CategoryFilter />
                            <PriceFilter />
                            <Shipping />
                        </div>
                    </div>
                    <div className="col p-3 d-flex flex-column gap-3 main " >
                        <div className="row">
                            <div className="col">
                                <h4>{t('home.adv')}</h4>
                                <p>64 {t('home.results')}</p>
                            </div>
                            <div className="col-auto">
                                <OrderBy />
                            </div>
                        </div>
                        <div className="row align-items-center" >
                            <div className="col d-flex flex-column justify-content-center gap-3">
                                {ads && ads.length > 0 ? (
                                    ads.map((adv) => (
                                        <AdvPreview adv={adv} />
                                    ))
                                ) : (
                                    <p>No advertisements available.</p>
                                )}
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