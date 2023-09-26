import { motion } from "framer-motion";

const Button = () => {
    return (
        <motion.button
            className="button"
            initial={{
                y: "10px",
                color: "black",
            }}
            whileHover={{
                y: "0",
                color: "white",
                background: "black",
            }}
            transition={{
                duration: 0.3,
                ease: "linear",
            }}
        >
            <span style={{ color: "inherit" }}>SHOP NOW</span>
        </motion.button>
    );
};

export default Button;
