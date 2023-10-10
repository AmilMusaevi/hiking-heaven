import { useEffect, useState } from "react";
import { LiaMountainSolid } from "react-icons/lia";

import useScroll from "../hooks/useScroll";

const ScrollTop = () => {
    const { scrollToTop, scrollPos } = useScroll();
    const isScrollUnder100 = scrollPos > 100;

    return (
        <>
            {isScrollUnder100 && (
                <div>
                    <LiaMountainSolid
                        onClick={scrollToTop}
                        className="scrollTop_item"
                    />
                </div>
            )}
        </>
    );
};

export default ScrollTop;
