import React, { useRef, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";

import useScroll from "../../../../../hooks/useScroll";
import { useAppSelector } from "../../../../../redux/store";
import logo from "../../../../../assets/images/mainLogo.webp";
import useOutsideClick from "../../../../../hooks/useOutsideClick";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    closeButton: boolean;
};

const MobileNav = ({ isOpen, onClose, closeButton }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { scrollToTop } = useScroll();
    const [state, setState] = useState();
    const { wishlistTotalQuantity } = useAppSelector(
        (state) => state.allWishList,
    );

    const open = isOpen ? "open" : "";

    const wrapperRef = useRef<any>(null);

    useOutsideClick(wrapperRef, onClose);

    function onChangeHandler(e: any) {
        setState(e.target.value);
    }

    useEffect(() => {
        onClose();
    }, [location]);
    function onCatchEnter(e: any) {
        if (e.which !== 13) return;

        navigate("/shop", {
            state: {
                filter: state,
            },
        });
    }
    return (
        <div ref={wrapperRef} className={`mobile_nav ${open}`}>
            <div className="mobile_nav_head">
                {
                    <>
                        <div
                            className="mobile_nav_head_logo"
                            onClick={scrollToTop}
                        >
                            <img src={logo} alt="logo" />
                        </div>
                    </>
                }
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
                    <input
                        type="text"
                        placeholder="Search..."
                        onKeyPress={onCatchEnter}
                        onChange={onChangeHandler}
                    />
                    <CiSearch className="mobile_nav_body_input_search" />
                </div>
                <ul className="mobile_nav_body_menu">
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mobile_nav_body_menu_item">
                        <Link to="/shop">Shop</Link>
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
                            {wishlistTotalQuantity}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
