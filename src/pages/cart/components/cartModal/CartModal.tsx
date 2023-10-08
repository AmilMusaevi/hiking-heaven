import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import Button from "../../../../components/Button";
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

type Props = {
    isCartOpen: boolean;
    onCloseCart: () => void;
    closeCartButton: boolean;
};

const CartModal = ({ isCartOpen, onCloseCart, closeCartButton }: Props) => {
    const carts = useSelector((state: any) => state.allCart.cart);
    const { totalPrice, totalQuantity } = useSelector(
        (state: any) => state.allCart,
    );
    const dispatch = useDispatch();

    const openCart = isCartOpen ? "openCart" : "";

    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    onCloseCart();
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    return (
        <div ref={wrapperRef} className={`cart_modal ${openCart}`}>
            <>
                <div>
                    <div className="cart_modal_head">
                        <p>Your Basket ({totalQuantity})</p>

                        {closeCartButton ? (
                            <AiOutlineMinus className="mobile_nav_head_close_button" />
                        ) : (
                            <AiOutlineClose
                                className="cart_modal_head_remove"
                                onClick={onCloseCart}
                            />
                        )}
                    </div>
                    {carts.map((item: any) => (
                        <div className="cart_modal_item">
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
                                            dispatch(increaseQuantity(item.id))
                                        }
                                    />
                                    <input
                                        type="number"
                                        min={0}
                                        max={100}
                                        value={item.quantity}
                                        className="cart_modal_item_info_quantity_input"
                                    />
                                    <AiOutlineMinusCircle
                                        className="cart_modal_item_info_quantity_icon"
                                        onClick={() =>
                                            dispatch(decreaseQuantity(item.id))
                                        }
                                    />
                                </div>
                            </div>
                            <div className="cart_modal_item_details">
                                <AiOutlineClose
                                    className="cart_modal_item_details_remove"
                                    onClick={() =>
                                        dispatch(removeItem(item.id))
                                        
                                    }
                                />
                                <p className="cart_modal_item_details_price">
                                    ${item.price}
                                </p>
                            </div>
                        </div>
                    ))}
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
