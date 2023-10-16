import Lottie from "lottie-react";

import checkoutAnimation from "../../json/checkoutAnimation.json";

const Checkout = () => {
    return (
        <div className="error">
            <Lottie animationData={checkoutAnimation} loop={true} />
        </div>
    );
};

export default Checkout;
