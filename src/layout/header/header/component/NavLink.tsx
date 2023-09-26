import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

type Props = {
    to?: string;
    name: string;
    DropDownComp?: React.ComponentType;
};

const NavLink: React.FC<Props> = ({ to, name, DropDownComp }) => {
    const isDropdown = !!DropDownComp;
    const [hover, setHover] = useState(false);

    const handleHover = () => setHover((prev) => !prev);

    return (
        <li
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="header_nav_menu_item"
        >
            <Link to={to!}>{name}</Link>
            <AnimatePresence>
                {isDropdown && hover && <DropDownComp />}
            </AnimatePresence>
        </li>
    );
};

export default NavLink;
