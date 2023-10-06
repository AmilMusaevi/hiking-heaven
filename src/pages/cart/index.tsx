import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {toast } from "react-toastify";
import Button from "../../components/Button";

import {
    removeItem as removeItemFromCart,
    decreaseQuantity,
    getCartTotal,
    increaseQuantity,
} from "../../redux/features/addToCart/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
    const carts = useSelector((state: any) => state.allCart.cart);
    const notify = () => toast("Product removed!");
    const { totalQuantity, totalPrice } = useSelector(
        (state: any) => state.allCart,
    );
    const dispatch = useDispatch();
    function removeItem(id:number){
        return()=>{
            dispatch(removeItemFromCart(id))
            toast.error("Item removed", {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })  
        }

    }
    useEffect(() => {
        dispatch(getCartTotal());
    }, [carts]);

    return (
        <div className="cartPage centered">
            {carts.length > 0 ? (
                <div className="cart_wrapper">
                    <div className="cart">
                        <div className="cart_info">
                            <div className="cart_info_title">
                                <h4>Products</h4>
                            </div>
                            <div className="cart_info_details">
                                <p className="cart_info_details_price">Price</p>
                                <p className="cart_info_details_quantity">
                                    Quantity
                                </p>
                                <p className="cart_info_details_total">Total</p>
                            </div>
                        </div>
                        {carts.map((item: any) => (
                            <div className="cart_item">
                                <div className="cart_item_info">
                                    <CiCircleRemove
                                        className="cart_item_info_remove"
                                        onClick={
                                           removeItem(item.id)   
                                        }
                                    />
                                    <div className="cart_item_info_img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <p className="cart_item_info_title">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="cart_item_details">
                                    <div>
                                        <p className="cart_item_details_price">
                                            ${item.price}
                                        </p>
                                    </div>
                                    <div className="cart_item_details_input">
                                        <AiOutlineMinusCircle
                                            className="cart_item_details_input_icon"
                                            onClick={() =>
                                                dispatch(
                                                    decreaseQuantity(item.id),
                                                )
                                            }
                                        />
                                        <input
                                            type="number"
                                            min={0}
                                            max={100}
                                            value={item.quantity}
                                            className="cart_item_details_input"
                                        />
                                        <AiOutlinePlusCircle
                                            className="cart_item_details_input_icon"
                                            onClick={() =>
                                                dispatch(
                                                    increaseQuantity(item.id),
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <p>99$</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart_checkout">
                        <div className="cart_checkout_title">
                            <h4>Cart Totals</h4>
                        </div>
                        <div className="cart_checkout_subtotal">
                            <p>Total Quantity</p>
                            <p>{totalQuantity}</p>
                        </div>
                        <div className="cart_checkout_total">
                            <p>Total Price</p>
                            <p>${totalPrice}</p>
                        </div>
                        <Button
                            text={"PROCEED TO CHECKOUT"}
                            initialBg={"white"}
                            secondBg={"black"}
                        />
                    </div>
                </div>
            ) : (
                <div className="cart_empty">
                    <h3 className="cart_empty_title">
                        YOUR CART IS CURRENTLY EMPTY
                    </h3>
                    <Button
                        text="RETURN  TO SHOP"
                        initialBg={"white"}
                        secondBg={"black"}
                    />
                </div>
            )}
        </div>
    );
};

export default Cart;
