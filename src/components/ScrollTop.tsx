import { useEffect, useState } from "react";
import { LiaMountainSolid } from "react-icons/lia";

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
const ScrollTop = () => {
    const [scrollToUp, setScrollToUp] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollToUp(true);
            } else {
                setScrollToUp(false);
            }
        });
    }, []);
    return (
        <>
            {scrollToUp && (
                <div>
                    <LiaMountainSolid
                        onClick={scrollUp}
                        className="scrollTop_item"
                    />
                </div>
            )}
        </>
    );
};

export default ScrollTop;
