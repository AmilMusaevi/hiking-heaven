import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";

type Props = {
    img: string;
    title: string;
    price: number;
};
import img from "../data/mainProducts/images/treking-shoe-01.webp";
const Card: React.FC<Props> = ({ img, title, price }) => {
    return (
        <div className="card">
            <div className="card_img">
                <img src={img} alt="img" />
                <div className="card_img_icons">
                    <div className="card_img_icons_item">
                        <LuShoppingBag />
                    </div>
                    <div className="card_img_icons_item">
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
