import { BiSearch, BiUser } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../../assets/images/mainLogo.webp";
import NavLink from "./component/NavLink";
import Product from "./component/dropdowns/ProductDropdown";
import MobileNav from "./component/mobileNav";
import { useEffect, useState } from "react";

const Header = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [isNavLinkOpen, setIsNavLinkOpen] = useState(false);
    const [closeButton, setCloseButton] = useState(false);

    const updatedClassName: React.CSSProperties =
        scrollPos > 90
            ? {
                  top: 0,
                  transition: ".2s",
                  position: "fixed",
                  backgroundColor: "white",
              }
            : {};

    const handleScrollPos = () => setScrollPos(window.scrollY);
    function onClose() {
        setIsNavLinkOpen(false);
        setCloseButton((prev) => !prev);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPos);

        return () => {
            window.removeEventListener("scroll", handleScrollPos);
        };
    });

    function onClickHandler() {
        setIsNavLinkOpen((prev) => !prev);
        setCloseButton(false);
    }
    return (
        <div className="header distanced centered" style={updatedClassName}>
            <MobileNav
                onClose={onClose}
                isOpen={isNavLinkOpen}
                closeButton={closeButton}
            />
            <div className="header_burger">
                <RxHamburgerMenu onClick={onClickHandler} />
            </div>
            <div className="header_logo">
                <img src={Logo} alt="PageLogo" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_menu">
                    <NavLink name="Home" to="/" />
                    <NavLink
                        name="Product"
                        to="/product"
                        DropDownComp={Product}
                    />
                    <NavLink name="Shop" to="/shop" />
                    <NavLink name="Blog" to="/blog" />
                    <NavLink name="Contact" to="/contact" />
                </ul>
            </nav>
            <div className="header_icon">
                <div className="hideMobile">
                    <BiSearch className="header_icon_item" />
                </div>
                <div>
                    <BiUser className="header_icon_item" />
                </div>
                <div className="header_icon_fav hideMobile">
                    <MdOutlineFavoriteBorder className="header_icon_item" />
                    <span className="header_icon_quantity ">0</span>
                </div>
                <div className="header_icon_cart">
                    <LuShoppingBag className="header_icon_item" />
                    <span className="header_icon_quantity">0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
