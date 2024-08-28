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
import { AdvData, getAds, orderByDate } from "../../storesData/products";

export default function Home() {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1)
    const handleClick = useCallback((page: number) => {
        setCurrentPage(page)
    }, [])

    const [toShow, setToShow] = useState<AdvData[]>([])
    useEffect(() => {
        const fetchAds = async () => {
            try {
                const adsData = await getAds();
                setToShow(adsData);
            } catch (error) {
                console.error('Error fetching ads:', error);
            }
        };
        fetchAds();
    }, []);

    //order by date
    const handleOrder = useCallback((value: boolean) => {
        setToShow((prevToShow) => {
            const orderedAds = orderByDate(prevToShow, value);
            return [...orderedAds];
        });
    }, []);


    // filter by category
    const [used, setUsed] = useState(false)
    const ClearFilters = async (used: boolean) => {
        setUsed(used);
    }
    const categoryFilter = useCallback(async (filteredAds: AdvData[]) => {
        if (filteredAds.length === 0) {
            if (used) {
                setToShow([])
            } else {
                const adsData = await getAds();
                if (adsData.length === 0) {
                    setError("Nessun annuncio disponibile")
                }
                setToShow(adsData);
            }
        } else {
            setToShow(filteredAds)
        }
    }, [used]);

    const [range, setRange] = useState({
        min: 0,
        max: 999999,
    });

    //filter by price
    const priceFilter = useCallback((min: number, max: number) => {
        setRange((prevRange) => ({
            ...prevRange,
            min: min,
            max: max,
        }));
    }, [setRange]);

    //filterByShipping
    const [shipping, setShipping] = useState(true)
    const shippingFilter = useCallback((value: boolean) => {
        setShipping(value)
    }, [])

    //counter of the shown ads
    const [count, setCount] = useState(0)
    useEffect(() => {
        const filteredAdsCount = toShow.filter((adv) => {
            const isPriceInRange = range.min <= adv.price && adv.price <= range.max;
            const isShippingMatch = shipping || adv.shipping === true;
            return isPriceInRange && isShippingMatch;
        }).length;

        setCount(filteredAdsCount);
    }, [toShow, range, shipping]);

    //error management
    const [error, setError] = useState("")
    useEffect(() => {
        if (count === 0 && toShow.length !== 0) {
            setError(t("home.no-filter-result"))
        }
        if (count !== 0) {
            setError("")
        }
        if (toShow.length === 0) {
            setError(t("home.no-result"))
        }
    }, [count, t, toShow.length])

    return (

        <div className="container sm p-4 ">
            <div className="row ">
                <div className="col d-flex flex-column gap-2" >
                    <SearchBar />
                </div>
            </div>
            <div className="row gap-3 py-4 my-4 home__board">
                <div className="col-3 home__filters main p-3" >
                    <div className="col d-flex flex-column gap-3">
                        <h4>{t('home.filters')} </h4>
                        <CategoryFilter ads={toShow} onClick={categoryFilter} onClear={ClearFilters} />
                        <PriceFilter onClick={priceFilter} />
                        <Shipping onClick={shippingFilter} />
                    </div>
                </div>
                <div className="col p-3 d-flex flex-column gap-3 main " >
                    <div className="row">
                        <div className="col">
                            <h4>{t('home.adv')}</h4>
                            <p>{count} {t('home.results')}</p>
                        </div>
                        <div className="col-auto">
                            <OrderBy onClick={handleOrder} />
                        </div>
                    </div>
                    <div className="row align-items-center" >
                        <div className="col d-flex flex-column justify-content-center gap-3">
                            {toShow && toShow.length > 0 && (
                                toShow.map((adv) => {
                                    const isPriceInRange = range.min <= adv.price && adv.price <= range.max;
                                    const isShippingMatch = shipping || adv.shipping === true;
                                    if (isPriceInRange && isShippingMatch) {
                                        return <AdvPreview adv={adv} />;
                                    }
                                    return null;
                                })
                            )}
                            {error}
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

    )
}