import React from "react";

import Card from "../../../../components/Card";
import img from "../../../../assets/images/Group-752.webp";
import { cardProducts } from "../../../../data/mainProducts/CardProducts";

const DiscountedProduct = () => {
    return (
        <section className="discounted_product centered">
            <div className="discounted_product_leftSide">
                <img src={img} alt="img" />
                <p className="discounted_product_leftSide_title">HIKING</p>
            </div>
            <div className="discounted_product_cardsSide">
                {cardProducts.slice(0, 4).map((item) => (
                    <Card
                        item={item}
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default DiscountedProduct;
