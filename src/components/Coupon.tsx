import React from "react";

const Coupon = () => {
    return (
        <div className="coupon">
            <div className="coupon_leftSide">
                <h2 className="coupon_leftSide_title">COUPON</h2>
                <h4 className="coupon_leftSide_promo">HIKING25</h4>
                <p className="coupon_leftSide_date">
                    04TH AUGUST TO 30TH AUGUST
                </p>
            </div>
            <div className="vertical_line"></div>
            <div className="coupon_rightSide">
                <h2 className="coupon_rightSide_head">30% EXTRA DISCOUNT</h2>
                <p className="coupon_rightSide_main">
                    FOR ALL SUMMER FASHION CLOTHS. MINIMUM SPEND $999
                </p>
                <p className="coupon_rightSide_footer">
                    REHYDRATE GO NEEDED TODAY HIRING LOOKING SHOULDER SKY
                    KEYWORDS RUNNING.
                </p>
            </div>
        </div>
    );
};

export default Coupon;
