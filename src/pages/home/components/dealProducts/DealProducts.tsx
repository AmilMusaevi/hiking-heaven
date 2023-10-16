import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { cardProducts } from "../../../../data/mainProducts/CardProducts";
const DealProducts = () => {
    return (
        <section className="deal_products">
            <h2 className="deal_products_title">BEST DEAL OF THE WEEK</h2>
            <div className="deal_products_wrapper centered">
                {cardProducts.map(
                    (item) =>
                        item.discount && (
                            <div className="deal_products_item" key={item.id}>
                                <div className="deal_products_item_img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="deal_products_item_info">
                                    <h2 className="deal_products_item_info_title">
                                        {item.title}
                                    </h2>
                                    <p className="deal_products_item_info_discount">
                                        Min {item.discount}
                                    </p>
                                </div>
                                <Link to={`/product/${item.title}`}>
                                    {" "}
                                    <div className="deal_products_item_button">
                                        <BsArrowRightCircleFill className="deal_products_item_button_item" />
                                    </div>
                                </Link>
                            </div>
                        ),
                )}
            </div>
        </section>
    );
};

export default DealProducts;
