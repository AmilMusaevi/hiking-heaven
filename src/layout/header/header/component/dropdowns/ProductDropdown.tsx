import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Dropdown from "../dropdown";

import manProduct from "../../../../../assets/images/hiking-product-man.webp";
import womanProduct from "../../../../../assets/images/hiking-product-woman.webp";
import { setGender } from "../../../../../redux/features/pickupInputSlice/pickupInputSlice";

const ProductDropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goTo = (g: string) => {
        return () => {
            dispatch(setGender(g));

            navigate("/shop");
        };
    };

    return (
        <Dropdown disabledPaths={["/shop"]}>
            <div className="product_dropDown">
                <div className="product_dropDown_item">
                    <button className="product_dropDown_item_button">
                        <span>
                            <span
                                onClick={goTo("MAN")}
                                style={{ color: "white" }}
                            >
                                MAN
                            </span>
                        </span>
                    </button>
                    <div className="product_dropDown_item_img">
                        <img src={manProduct} alt="manProduct" />
                    </div>
                </div>

                <div className="product_dropDown_item">
                    <button className="product_dropDown_item_button">
                        <span>
                            <span
                                onClick={goTo("WOMAN")}
                                style={{ color: "white" }}
                            >
                                WOMAN
                            </span>
                        </span>
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
                        <Link to={"/shop"} style={{ color: "white" }}>
                            Shop Now
                        </Link>
                    </button>
                </div>
            </div>
        </Dropdown>
    );
};

export default ProductDropdown;
