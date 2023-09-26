import Button from "../../components/Button";
import Header from "../../layout/header/header";
import HeaderInfo from "../../layout/header/header/component/HeaderTop";
import DealProducts from "./components/dealProducts/DealProducts";
import OffersSection from "./components/offersSection/OffersSection";
import ProductFilters from "./components/productFilters/ProductFilters";
import DiscountedProduct from "./components/discountedProduct/DiscountedProduct";
import Coupon from "../../components/Coupon";
import BestSellingProducts from "./components/bestSellingProducts/BestSellingProducts";
import NatureSection from "./components/natureSection/NatureSection";
const Home = () => {
    return (
        <>
            <section className="main">
                <article className="main_section">
                    <div className="main_section_entry">
                        <h2 className="main_section_entry_title">
                            HIKING PRODUCT OUTLET
                        </h2>

                        <p className="main_section_description">
                            Wand crossbow phoenix levicorpus sirius. Easy
                            raw-steak half-blood petrified veela house lupin it.
                        </p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </article>
            </section>
            <ProductFilters />
            <DealProducts />
            <OffersSection />
            <DiscountedProduct />
             <Coupon />
            <BestSellingProducts />
            <NatureSection /> 
        </>
    );
};

export default Home;
