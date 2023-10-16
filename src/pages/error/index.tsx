import Lottie from "lottie-react";

import errorAnimation from "../../json/errorAnimation.json";

const Error = () => {
    return (
        <div className="error">
            <Lottie animationData={errorAnimation} loop={true} />
        </div>
    );
};

export default Error;
