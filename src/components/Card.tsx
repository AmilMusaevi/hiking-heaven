import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/addToCart/cartSlice";
import { addToWishList } from "../redux/features/addToWishlist/wishlistSlice";
type Props = {
    img: string;
    title: string;
    price: number;
    item?:any;
};


const Card: React.FC<Props> = ({ img, title, price,item }) => {

    const dispatch = useDispatch();
    function addCartItem(){
        dispatch(addToCart(item))
    }
function addWishlistItem(){
    dispatch(addToWishList(item))
}
    return (
        <div className="card">
            <div className="card_img">
                <img src={img} alt="img" />
                <div className="card_img_icons">
                    <div className="card_img_icons_item" onClick={addCartItem}>
                  <LuShoppingBag />
                    </div>
                    <div className="card_img_icons_item"  onClick= {addWishlistItem}>
                        <MdOutlineFavoriteBorder />
                    </div>
                </div>
            </div>
            <div className="card_info">
                <h3 className="card_info_title">{title}</h3>
                
                <p className="card_info_price">${price}</p>
            </div>
        </div>
    );
};

export default Card;
