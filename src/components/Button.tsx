import { addPointerEvent, motion } from "framer-motion";
import { Link } from "react-router-dom";
import Product from "../pages/products";

type Props = {
    text: string;
    initialBg: any;
    secondBg: any;
    buttonNav?: any;
    addToCart?: () => void;
};

const Button: React.FC<Props> = ({
    text,
    initialBg,
    secondBg,
    buttonNav,
    addToCart,
}) => {
    return (
        <Link to={buttonNav}>
            <motion.button
                onClick={addToCart}
                className="button"
                initial={{
                    y: "10px",
                    color: initialBg,
                    backgroundColor: secondBg,
                }}
                whileHover={{
                    y: "0",
                    color: secondBg,
                    backgroundColor: initialBg,
                }}
                transition={{
                    duration: 0.3,
                    ease: "linear",
                }}
            >
                <span style={{ color: "inherit" }}>{text}</span>
            </motion.button>
        </Link>
    );
};

export default Button;
