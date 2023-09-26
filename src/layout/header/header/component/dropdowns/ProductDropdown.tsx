import React from "react";

import Dropdown from "../dropdown";

import manProduct from "../../../../../assets/images/hiking-product-man.webp";
import womanProduct from "../../../../../assets/images/hiking-product-woman.webp";
const ProductDropdown = () => {
    return (
        <Dropdown>
            <div className="product_dropDown">
                <div className="product_dropDown_item">
                    <button className="product_dropDown_item_button">
                        <span>MAN</span>
                    </button>
                    <div className="product_dropDown_item_img">
                        <img src={manProduct} alt="manProduct" />
                    </div>
                </div>

                <div className="product_dropDown_item">
                    <button className="product_dropDown_item_button">
                        <span>WOMAN</span>
                    </button>
                    <div className="product_dropDown_item_img">
                        <img src={womanProduct} alt="womanProduct" />
                    </div>
                </div>

                <div className="product_dropDown_saleProduct">
                    <div className="product_dropDown_saleProduct_title">
                        <h3>SUMMER</h3>
                        <h3>SALE</h3>
                        <h3>65%</h3>
                        <h3>OFF</h3>
                    </div>
                    <button className="product_dropDown_saleProduct_button">
                        Shop Now
                    </button>
                </div>
            </div>
        </Dropdown>
    );
};

export default ProductDropdown;
