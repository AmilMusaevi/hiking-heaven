import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import logo from "../../../../../assets/images/mainLogo.webp";
type Props = {
    isOpen: boolean;
    onClose: () => void;
    closeButton: boolean;
};
const MobileNav = ({ isOpen, onClose, closeButton }: Props) => {
    const open = isOpen ? "open" : "";

    return (
        <div className={`mobile_nav ${open}`}>
            <div className="mobile_nav_head">
                <div className="mobile_nav_head_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mobile_nav_head_close">
                    {closeButton ? (
                        <AiOutlineMinus className="mobile_nav_head_close_button" />
                    ) : (
                        <AiOutlineClose
                            onClick={onClose}
                            className="mobile_nav_head_close_button"
                        />
                    )}
                </div>
            </div>
            <div className="mobile_nav_body">
                <div className="mobile_nav_body_input">
                    <input type="text" placeholder="Search..." />
                    <CiSearch className="mobile_nav_body_input_search" />
                </div>
                <ul className="mobile_nav_body_menu">
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/product">Product</Link>
                    </li>
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <div className="mobile_nav_footer">
                    <Link to="/wishlist">Wishlist</Link>
                    <div className="mobile_nav_footer_icon">
                        <MdOutlineFavoriteBorder className="mobile_nav_footer_icon_item" />
                        <span className="mobile_nav_footer_icon_item_quantity">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
