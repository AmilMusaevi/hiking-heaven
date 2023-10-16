import Lottie from "lottie-react";

import useScroll from "../hooks/useScroll";
import ScrollUpAnimation from "../json/ScrollUpAnimation.json";

const ScrollTop = () => {
    const { scrollToTop, scrollPos } = useScroll();
    const isScrollUnder100 = scrollPos > 100;
    return (
        <>
            {isScrollUnder100 && (
                <div>
                    <Lottie
                        onClick={scrollToTop}
                        animationData={ScrollUpAnimation}
                        className="scrollTop_item"
                    />
                </div>
            )}
        </>
    );
};

export default ScrollTop;
