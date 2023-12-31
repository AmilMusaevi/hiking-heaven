import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../../../components/Button";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import emptyCartAnimation from "../../../../json/emptyCartanimation.json";
import {
    removeItem,
    increaseQuantity,
    decreaseQuantity,
} from "../../../../redux/features/addToCart/cartSlice";
import {
    AiOutlineClose,
    AiOutlinePlusCircle,
    AiOutlineMinusCircle,
    AiOutlineMinus,
} from "react-icons/ai";
import { useAppSelector } from "../../../../redux/store";

type Props = {
    isCartOpen: boolean;
    onCloseCart: () => void;
    closeCartButton: boolean;
};

const CartModal = ({ isCartOpen, onCloseCart, closeCartButton }: Props) => {
    const carts = useSelector((state: any) => state.allCart.cart);
    const { totalPrice, totalQuantity } = useAppSelector(
        (state: any) => state.allCart,
    );
    const dispatch = useDispatch();

    const openCart = isCartOpen ? "openCart" : "";

    const wrapperRef = useRef(null);
    const locationn = useLocation();
    useEffect(() => {
        onCloseCart();
    }, [locationn]);

    useOutsideClick(wrapperRef, onCloseCart);

    function removeProductItem(item: any) {
        return () => {
            dispatch(removeItem(item));
            toast.error("Product removed!", {
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
    return (
        <div ref={wrapperRef} className={`cart_modal ${openCart}`}>
            <>
                <div>
                    <div className="cart_modal_head">
                        <p>Your Basket ({totalQuantity})</p>

                        {closeCartButton ? (
                            <AiOutlineMinus className="cart_modal_head_minus" />
                        ) : (
                            <AiOutlineClose
                                className="cart_modal_head_remove"
                                onClick={onCloseCart}
                            />
                        )}
                    </div>
                    {carts.length > 0 ? (
                        carts.map((item: any) => (
                            <div className="cart_modal_item" key={item.id}>
                                <div className="cart_modal_item_img">
                                    <img src={item.img} alt="cartImage" />
                                </div>
                                <div className="cart_modal_item_info">
                                    <p className="cart_modal_item_info_title">
                                        {item.title}
                                    </p>
                                    <div className="cart_modal_item_info_quantity">
                                        <AiOutlinePlusCircle
                                            className="cart_modal_item_info_quantity_icon"
                                            onClick={() =>
                                                dispatch(
                                                    increaseQuantity(item.id),
                                                )
                                            }
                                        />
                                        <input
                                            type="number"
                                            min={0}
                                            max={100}
                                            readOnly
                                            value={item.quantity}
                                            className="cart_modal_item_info_quantity_input"
                                        />
                                        <AiOutlineMinusCircle
                                            className="cart_modal_item_info_quantity_icon"
                                            onClick={() =>
                                                dispatch(
                                                    decreaseQuantity(item.id),
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="cart_modal_item_details">
                                    <AiOutlineClose
                                        className="cart_modal_item_details_remove"
                                        onClick={removeProductItem(item.id)}
                                    />
                                    <p className="cart_modal_item_details_price">
                                        ${item.price}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ width: "100%" }}>
                            <Lottie
                                animationData={emptyCartAnimation}
                                loop={true}
                            />
                        </div>
                    )}
                </div>
                <div className="cart_modal_bottom">
                    <div className="cart_modal_bottom_total">
                        <h3>Subtotal:</h3>
                        <h3>${totalPrice}</h3>
                    </div>
                    <Button
                        initialBg={"white"}
                        secondBg={"black"}
                        text="VIEW CART"
                        buttonNav={"/cart"}
                    />
                </div>
            </>
        </div>
    );
};

export default CartModal;
