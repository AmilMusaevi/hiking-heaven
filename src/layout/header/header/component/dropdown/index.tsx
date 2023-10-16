import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = PropsWithChildren & {
    disabledPaths: string[];
};

const Dropdown: React.FC<Props> = ({ children, disabledPaths }) => {
    const { pathname } = useLocation();

    if (disabledPaths && disabledPaths.includes(pathname)) return;

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
                duration: 0.4,
            }}
        >
            {children && children}
        </motion.div>
    );
};

export default Dropdown;
