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
import { AdvData, getAds, orderByDate, searchText } from "../../storesData/products";
import PagePrev from "../../components/Atoms/PageIndex/PagePrev";
import PageNext from "../../components/Atoms/PageIndex/PageNext";
import Submit from "../../components/Atoms/SubmitButton/Submit";

interface Pager {
    totalItems: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
    startPage: number;
    endPage: number;
    startIndex: number;
    endIndex: number;
    pages: number[];
}

export default function Home() {
    const { t } = useTranslation();

    const [toShow, setToShow] = useState<AdvData[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5);
    const [pager, setPager] = useState<Pager>({
        totalItems: 0,
        currentPage: 1,
        pageSize: 5,
        totalPages: 0,
        startPage: 1,
        endPage: 1,
        startIndex: 0,
        endIndex: 0,
        pages: []
    });

    function getPager(totalItems: number, currentPage: number, pageSize: number) {
        currentPage = currentPage || 1;
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage: number, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    const updatePager = useCallback((totalItems: number) => {
        const newPager = getPager(totalItems, currentPage, pageSize);
        setPager(newPager);
    }, [currentPage, pageSize]);

    useEffect(() => {
        updatePager(toShow.length)
    }, [toShow, updatePager])

    const handleClick = useCallback((page: number) => {
        setCurrentPage(page + 1)
    }, [currentPage])

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
                    setError(t("home.no-result"))
                }
                setToShow(adsData);
            }
        } else {
            setToShow(filteredAds)
        }
    }, [t, used]);

    //Search by text
    const searchByText = async (text: string) => {
        setToShow(await searchText(text))
    }
    //filter by price
    const [range, setRange] = useState({
        min: 0,
        max: 999999,
    });
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

    const [visible, setVisible] = useState(false);

    return (
        <div className="container sm p-4 ">
            <div className="row ">
                <div className="col">
                    <div className="col d-flex flex-column gap-2" >
                        <SearchBar onClick={searchByText} />
                        <div className="col-auto p-0 search-bar__filter" >
                            <Submit label='Filtri' className='btn--primary' onClick={() => { setVisible(!visible) }} />
                        </div>
                    </div>
                    <div className={`row search-bar__more ${visible ? 'search-bar__more--visible' : ''} my-3`}>
                        <div className="col d-flex flex-column main p-3 gap-3">
                            <h4>{t('home.filters')}</h4>
                            <div className="col d-flex flex-column gap-2 p-0">
                                {visible && (<><CategoryFilter ads={toShow} onClick={categoryFilter} onClear={ClearFilters} />
                                    <PriceFilter onClick={priceFilter} />
                                    <Shipping onClick={shippingFilter} /></>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row gap-3 py-4 my-4 home__board">
                <div className="col-3 home__filters p-3" >
                    <div className="col d-flex flex-column gap-3">
                        <h4>{t('home.filters')} </h4>
                        {!visible && (<><CategoryFilter ads={toShow} onClick={categoryFilter} onClear={ClearFilters} />
                            <PriceFilter onClick={priceFilter} />
                            <Shipping onClick={shippingFilter} /></>)}
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
                            {/* {toShow && toShow.length > 0 && (
                                toShow.map((adv) => {
                                    const isPriceInRange = range.min <= adv.price && adv.price <= range.max;
                                    const isShippingMatch = shipping || adv.shipping === true;
                                    if (isPriceInRange && isShippingMatch) {
                                        return <AdvPreview adv={adv} />;
                                    }
                                    return null;
                                })
                            )}
                            {error} */}
                            {toShow && toShow.length > 0 && (
                                toShow
                                    .filter((adv) => {
                                        const isPriceInRange = range.min <= adv.price && adv.price <= range.max;
                                        const isShippingMatch = shipping || adv.shipping === true;
                                        return isPriceInRange && isShippingMatch;
                                    })
                                    .slice(pager.startIndex, pager.endIndex + 1)
                                    .map((adv) => (
                                        <AdvPreview key={adv.id} adv={adv} />
                                    ))
                            )}
                            {error}
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col d-flex justify-content-center gap-2">
                            <PagePrev onClick={() => setCurrentPage(currentPage - 1)} />
                            <PageSelector
                                pages={pager.pages}
                                currentPage={currentPage}
                                onClick={handleClick}
                            />
                            <PageNext onClick={() => setCurrentPage(currentPage + 1)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
