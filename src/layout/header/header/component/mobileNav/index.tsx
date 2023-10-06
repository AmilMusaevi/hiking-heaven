import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    const [state, setState] = useState();
    const {wishlistTotalQuantity} =  useSelector(
        (state) => state.allWishList,
    );

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const navigate = useNavigate();
    const open = isOpen ? "open" : "";
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    onClose();
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function onChangeHandler(e: any) {
        setState(e.target.value);
    }

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
                            onClick={scrollUp}
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
