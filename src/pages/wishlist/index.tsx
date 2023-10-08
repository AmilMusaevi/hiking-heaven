import { CiCircleRemove } from "react-icons/ci";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeWishlistItem } from "../../redux/features/addToWishlist/wishlistSlice";
import { addToCart } from "../../redux/features/addToCart/cartSlice";
const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlists = useSelector((state: any) => state.allWishList.wishlist);
    return (
        <div className="wishlistPage">
            <div className="wishlist">
                <div className="wishlist_info">
                    <h4 className="wishlist_info_title">Product</h4>
                    <h4 className="wishlist_info_title">Unit Price</h4>
                </div>
                {wishlists.map((item: any) => (
                    <div className="wishlist_item">
                        <div className="wishlist_item_about">
                            <CiCircleRemove
                                className="wishlist_item_remove"
                                onClick={() =>
                                    dispatch(removeWishlistItem(item.id))
                                }
                            />
                            <div className="wishlist_item_about_img">
                                <img src={item.img} alt="img" />
                            </div>
                            <p className="wishlist_item_price">${item.price}</p>
                            <div></div>
                        </div>
                        <Button
                            addToCart={() => dispatch(addToCart(item))}
                            text="Add to Cart"
                            initialBg={"white"}
                            secondBg={"black"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
