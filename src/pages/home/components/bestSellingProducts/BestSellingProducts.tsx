import Slider from "../../../../components/Slider";
const BestSellingProducts = () => {
    return (
        <section className="best_selling centered">
            <div className="best_selling_top">
                <h2 className="best_selling_top_title">
                    BEST SELLING PRODUCTS
                </h2>
                <p className="best_selling_top_info">
                    Base wheel zoom adoption open manage future-proof for cost
                    food caught.
                </p>
            </div>
             <div className="best_selling_bottom">
             <Slider/>
            </div> 

        </section>
    );
};

export default BestSellingProducts;
