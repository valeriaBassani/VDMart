import Footer from "../components/footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import './Pages.css';
import '../App.css';
import CategoryFilter from "../components/SearchFilter/Category";
import PriceFilter from "../components/SearchFilter/Price";
import Shipping from "../components/SearchFilter/Shipping";

export default function LogIn() {
    return (
        <div>
            <NavBar />
            <div className="Content">
                {/* <div className="SearchBar">
                    <SearchBar />
                </div> */}
                <div className="Board">
                    <div className="Filters">
                        <CategoryFilter />
                        <PriceFilter />
                        <Shipping />
                    </div>
                    <div className="Ads">
                        <p>ads</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}