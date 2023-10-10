import { Link } from "react-router-dom";

import { data } from "../../../../data/productFilters/productFiltersData";

const ProductFilters = () => {
    return (
        <section className="product_filters">
            {data.map((item) => (
                <Link to="/shop" key={item.id}>
                    <div className="product_filters_item">
                        <div className="product_filters_item_img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="product_filters_item_info">
                            <h2 className="product_filters_item_info_title">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
};
export default ProductFilters;
