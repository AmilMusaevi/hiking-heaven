import { BiSearch, BiUser } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/mainLogo.webp";
import NavLink from "./component/NavLink";
import Shop from "./component/dropdowns/ProductDropdown";
import MobileNav from "./component/mobileNav";
import { useEffect, useState } from "react";
import Input from "../../../components/SearchInput";
import { useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/features/addToCart/cartSlice";
import { useDispatch } from "react-redux";
import { getWishlistTotal } from "../../../redux/features/addToWishlist/wishlistSlice";

const Header = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);
    const { wishlist, wishlistTotalQuantity } = useSelector(
        (state) => state.allWishList,
    );
    const [scrollPos, setScrollPos] = useState(0);
    const [isNavLinkOpen, setIsNavLinkOpen] = useState(false);
    const [closeButton, setCloseButton] = useState(false);
    const [input, SetInput] = useState(false);
    const dispatch = useDispatch();

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
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
    }, []);

    function onClickHandler() {
        setIsNavLinkOpen((prev) => !prev);
        setCloseButton(false);
    }
    function onClickHandlerInput() {
        SetInput((prev) => !prev);
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
            <div className="header_logo" onClick={scrollUp}>
                <img src={Logo} alt="PageLogo" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_menu">
                    <NavLink name="Home" to="/" />
                    <NavLink name="Shop" to="/shop" DropDownComp={Shop} />
                    <NavLink name="Blog" to="/blog" />
                    <NavLink name="Contact" to="/contact" />
                </ul>
            </nav>
            <div className="header_icon">
                <div className="hideMobile searchBar">
                    {input && <Input />}
                    <BiSearch
                        className="header_icon_item"
                        onClick={onClickHandlerInput}
                    />
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
                    <Link to="cart">
                        <LuShoppingBag className="header_icon_item" />
                    </Link>
                    <span className="header_icon_quantity">
                        {totalQuantity}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
