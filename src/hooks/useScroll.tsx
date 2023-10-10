import React, { useState, useEffect } from "react";

const useScroll = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScrollPos = () => setScrollPos(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPos);
        return () => {
            window.removeEventListener("scroll", handleScrollPos);
        };
    }, []);

    return {
        scrollPos,
        scrollToTop,
    };
};

export default useScroll;
