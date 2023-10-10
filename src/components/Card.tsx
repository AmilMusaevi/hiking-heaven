import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/addToCart/cartSlice";
import {
    addToWishList,
    removeWishlistItem,
} from "../redux/features/addToWishlist/wishlistSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
type Props = {
    img: string;
    title: string;
    price: number;
    item?: any;
};

const Card: React.FC<Props> = ({ img, title, price, item }) => {
    const dispatch = useDispatch();
    const wishlistsArr = useSelector(
        (state: any) => state.allWishList.wishlist,
    );

    const favColor = wishlistsArr.map((item: any) => item.title).includes(title)
        ? "rgb(107, 12, 12)"
        : "#0d0d2b";

    function addCartItem() {
        dispatch(addToCart(item));
    }
    function addWishlistItem() {
        if (wishlistsArr.includes(item)) {
            dispatch(removeWishlistItem(item.id));
        } else {
            dispatch(addToWishList(item));
        }
    }
    return (
        <div className="card_container">
            <Link className="card" to={`/product/${title}`}>
                <div className="card_img">
                    <img src={img} alt="img" />
                </div>
                <div className="card_info">
                    <h3 className="card_info_title">{title}</h3>

                    <p className="card_info_price">${price}</p>
                </div>
            </Link>

            <div className="card_container_icons">
                <div
                    className="card_container_icons_item"
                    onClick={addCartItem}
                >
                    <LuShoppingBag />
                </div>
                <div
                    style={{ backgroundColor: favColor }}
                    className="card_container_icons_item"
                    onClick={addWishlistItem}
                >
                    <MdOutlineFavoriteBorder />
                </div>
            </div>
        </div>
    );
};

export default Card;
