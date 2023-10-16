import { useState } from "react";
import { CouponCodes } from "../data/couponCodes/CouponCodes";

type Props = {
    totalPrice: number;
};

const CouponCode: React.FC<Props> = ({ totalPrice }) => {
    const [couponValue, setCouponValue] = useState("");
    const isRightCoupon = CouponCodes.includes(couponValue.toUpperCase());
    function catchInputValue(e: any) {
        setCouponValue(e.target.value);
    }
    const discountPrice = totalPrice - (totalPrice * 30) / 100;
    return (
        <div className="couponCode">
            <p className="couponCode_desc">
                Enter the promo code to benefit from the discount.
            </p>
            <input type="text" onChange={catchInputValue} />
            <div className="couponCode_totalPrice">
                <h4>Total price</h4>

                {isRightCoupon ? (
                    <p>
                        <s>${totalPrice}</s>
                        <p>${discountPrice}</p>
                    </p>
                ) : (
                    <p>${totalPrice}</p>
                )}
            </div>
        </div>
    );
};

export default CouponCode;
