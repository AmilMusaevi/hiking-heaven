import Lottie from "lottie-react";
import { useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";

import Button from "../../components/Button";
import cartEmpty from "../../json/emptyCart.json";
import { useAppSelector } from "../../redux/store";
import { addToCart } from "../../redux/features/addToCart/cartSlice";
import { removeWishlistItem } from "../../redux/features/addToWishlist/wishlistSlice";

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlists = useAppSelector((state) => state.allWishList.wishlist);

    return (
        <div className="wishlistPage">
            <div className="wishlist">
                {wishlists.length > 0 && (
                    <div className="wishlist_info">
                        <h4 className="wishlist_info_title">Product</h4>
                        <h4 className="wishlist_info_title_price">
                            Unit Price
                        </h4>
                    </div>
                )}
                {wishlists.length > 0 ? (
                    wishlists.map((item: any) => (
                        <div className="wishlist_item">
                            <div className="wishlist_item_about">
                                <div className="wishlist_item_about_img">
                                    <img src={item.img} alt="img" />
                                </div>
                                <p className="wishlist_item_price">
                                    ${item.price}
                                </p>
                                <div></div>
                            </div>
                            <Button
                                addToCart={() => dispatch(addToCart(item))}
                                text="Add to Cart"
                                initialBg={"white"}
                                secondBg={"black"}
                            />
                            <CiCircleRemove
                                className="wishlist_item_remove"
                                onClick={() =>
                                    dispatch(removeWishlistItem(item.id))
                                }
                            />
                        </div>
                    ))
                ) : (
                    <div
                        className="emptyWish"
                        style={{ width: "100%", maxWidth: "500px" }}
                    >
                        <Lottie animationData={cartEmpty} loop={true} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
