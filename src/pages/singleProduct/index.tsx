import { toast } from "react-toastify";
import { BsHeart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { shuffledData } from "../../data/mainProducts/CardProducts";
import { addToCart } from "../../redux/features/addToCart/cartSlice";
import {
    addToWishList,
    removeWishlistItem,
} from "../../redux/features/addToWishlist/wishlistSlice";

const SingleProduct = () => {
    const { title } = useParams();
    const dispatch = useDispatch();
    const singleData = shuffledData.filter((q) => q.title === title);
    const wishlistArr = useSelector((state: any) => state.allWishList.wishlist);

    function addWishlistItem(item: any): any {
        if (wishlistArr.includes(item)) {
            dispatch(removeWishlistItem(item.id));
        } else {
            dispatch(addToWishList(item));
        }
    }
    function addItem(item: any) {
        return () => {
            dispatch(addToCart(item));
            toast.success("Product successfully added", {
                position: "top-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        };
    }

    const wishColor = wishlistArr.map((item: any) => item.title).includes(title)
        ? "rgb(107, 12, 12)"
        : "#0d0d2b";
    return (
        <>
            <div className="single_product centered">
                {singleData.map((item) => (
                    <div className="single_product_head" key={item.id}>
                        <>
                            <div className="single_product_head_img">
                                <img src={item.img} alt={item.title} />
                            </div>

                            <div className="single_product_head_info">
                                <div className="single_product_head_info_container">
                                    <div className="single_product_head_info_top">
                                        <h2 className="single_product_head_info_top_title">
                                            {item.title}
                                        </h2>

                                        <p className="single_product_head_info_top_price">
                                            ${item.price}
                                        </p>

                                        <div className="single_product_head_info_details_delivery">
                                            <div className="single_product_head_info_details_delivery_item">
                                                <div className="single_product_head_info_details_delivery_item_icon_container">
                                                    <TbTruckDelivery className="single_product_head_info_details_delivery_item_icon" />
                                                    <h4>
                                                        Estimated Delivery:{" "}
                                                    </h4>
                                                </div>
                                                <span>Within 5-7 days</span>
                                            </div>
                                            <div className="single_product_head_info_details_delivery_item">
                                                <div className="single_product_head_info_details_delivery_item_icon_container">
                                                    <LuShoppingCart className="single_product_head_info_details_delivery_item_icon" />
                                                    <h4>Free shipping: </h4>
                                                </div>
                                                <span>
                                                    On orders over $1499 and
                                                    above
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single_product_head_info_summary">
                                        <div
                                            className="single_product_head_info_summary_fav_container"
                                            style={{
                                                backgroundColor: wishColor,
                                            }}
                                            onClick={() =>
                                                addWishlistItem(item)
                                            }
                                        >
                                            <BsHeart className="single_product_head_info_summary_fav" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_product_head_buttons">
                                    <Button
                                        initialBg={"black"}
                                        secondBg={"#EFEFEF"}
                                        text="ADD TO CART"
                                        addToCart={addItem(item)}
                                    />
                                    <Button
                                        initialBg={"white"}
                                        secondBg={"black"}
                                        text="BUY NOW"
                                        buttonNav={"/checkout"}
                                    />
                                </div>
                            </div>
                        </>
                    </div>
                ))}
                <div className="single_product_footer">
                    <h3>Related Products</h3>
                    <Slider />
                </div>
            </div>
        </>
    );
};

export default SingleProduct;
