import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const Dropdown: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <motion.div
            className="drop_down"
            initial={{
                opacity: 0,
                height: 0,
            }}
            animate={{
                opacity: 1,
                height: "500px",
            }}
            exit={{
                opacity: 0,
                height: 0,
            }}
            transition={{
                duration:.4
            }}
        >
            {children && children}
        </motion.div>
    );
};

export default Dropdown;
