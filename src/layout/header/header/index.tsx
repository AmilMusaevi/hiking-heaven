import { useEffect, useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/mainLogo.webp";
import NavLink from "./component/NavLink";
import Shop from "./component/dropdowns/ProductDropdown";
import MobileNav from "./component/mobileNav";
import Input from "../../../components/SearchInput";
import { getCartTotal } from "../../../redux/features/addToCart/cartSlice";
import { useDispatch } from "react-redux";
import { getWishlistTotal } from "../../../redux/features/addToWishlist/wishlistSlice";
import CartModal from "../../../pages/cart/components/cartModal/CartModal";
import { useAppSelector } from "../../../redux/store";
import useScroll from "../../../hooks/useScroll";
import useOpenModals from "../../../hooks/useOpenModals";
import useBoolean from "../../../hooks/useBoolean";

const Header = () => {
    const dispatch = useDispatch();
    const [input, { toggle }] = useBoolean();
    const { scrollToTop, scrollPos } = useScroll();
    const [[isNavLinkOpen, closeButton], onClose, onClickHandler] =
        useOpenModals();
    const [[isCartOpen, closeCartButton], onCloseCart, onClickHandlerCart] =
        useOpenModals();
    const { cart, totalQuantity } = useAppSelector((state) => state.allCart);
    const { wishlist, wishlistTotalQuantity } = useAppSelector(
        (state) => state.allWishList,
    );
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    useEffect(() => {
        dispatch(getWishlistTotal());
    }, [wishlist]);

    const updatedClassName: React.CSSProperties =
        scrollPos > 90
            ? {
                  top: 0,
                  transition: ".2s",
                  position: "fixed",
                  backgroundColor: "white",
              }
            : {};

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
            <div className="header_logo" onClick={scrollToTop}>
                <img src={Logo} alt="PageLogo" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_menu">
                    <NavLink name="Home" to="/" />
                    <NavLink name="Shop" to="/shop" DropDownComp={Shop} />
                    <NavLink name="Contact" to="/contact" />
                </ul>
            </nav>
            <div className="header_icon">
                <div className="hideMobile searchBar">
                    {input && <Input />}
                    <BiSearch className="header_icon_item" onClick={toggle} />
                </div>
                <div>
                    <BiUser className="header_icon_item" />
                </div>
                <div className="header_icon_fav hideMobile">
                    <Link to="wishlist">
                        <MdOutlineFavoriteBorder className="header_icon_item" />
                    </Link>
                    <span className="header_icon_quantity ">
                        {wishlistTotalQuantity}
                    </span>
                </div>
                <div className="header_icon_cart">
                    <LuShoppingBag
                        className="header_icon_item"
                        onClick={onClickHandlerCart}
                    />
                    <span className="header_icon_quantity">
                        {totalQuantity}
                    </span>
                </div>
            </div>
            <CartModal
                isCartOpen={isCartOpen}
                onCloseCart={onCloseCart}
                closeCartButton={closeCartButton}
            />
        </div>
    );
};

export default Header;
