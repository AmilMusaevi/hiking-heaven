import { GoGift } from "react-icons/go";
import { motion } from "framer-motion";
import { PiShoppingCartSimpleThin, PiMedalLight } from "react-icons/pi";

const OffersSection = () => {
    return (
        <section className="offers_section centered">
            <div className="offers_section_card">
                {" "}
                <motion.div
                    className="offers_section_card_icons"
                    initial={{
                        x: 0,
                    }}
                    whileHover={{
                        x: "-10px",
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut",
                    }}
                    exit={{
                        x: "-20px",
                    }}
                >
                    <PiShoppingCartSimpleThin className="offers_section_card_icon" />
                </motion.div>
                <h3 className="offers_section_card_title">FREE SHIPPING</h3>
                <p className="offers_section_card_description">
                    On the other hand, we denounce with righteous indignation
                    and dislike men.
                </p>
            </div>

            <div className="offers_section_card">
                <motion.div
                    className="offers_section_card_icons"
                    initial={{
                        x: 0,
                    }}
                    whileHover={{
                        x: "-10px",
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut",
                    }}
                    exit={{
                        x: "-20px",
                    }}
                >
                    <GoGift className="offers_section_card_icon" />
                </motion.div>
                <h3 className="offers_section_card_title">GIFT CARDS</h3>
                <p className="offers_section_card_description">
                    On the other hand, we denounce with righteous indignation
                    and dislike men.
                </p>
            </div>

            <div className="offers_section_card">
                <motion.div
                    className="offers_section_card_icons"
                    initial={{
                        x: 0,
                    }}
                    whileHover={{
                        x: "-10px",
                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeOut",
                    }}
                    exit={{
                        x: "-20px",
                    }}
                >
                    <PiMedalLight className="offers_section_card_icon" />
                </motion.div>
                <h3 className="offers_section_card_title">
                    100% ORIGINAL PRODUCT
                </h3>
                <p className="offers_section_card_description">
                    On the other hand, we denounce with righteous indignation
                    and dislike men.
                </p>
            </div>
        </section>
    );
};

export default OffersSection;
