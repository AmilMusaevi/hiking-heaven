

import { BiSearch, BiUser } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import {RxHamburgerMenu} from 'react-icons/rx'

import Logo from "../../../assets/images/mainLogo.webp";
import NavLink from "./component/NavLink";
import Product from "./component/dropdowns/ProductDropdown";

const Header = () => {
    return (
        <div className="header distanced centered">
            <div className="header_burger">
                <RxHamburgerMenu/>
            </div>
            <div className="header_logo">
                <img src={Logo} alt="PageLogo" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_menu">
                    <NavLink name="Home" to="/" />
                    <NavLink
                        name="Product"
                        to="product"
                        DropDownComp={Product}
                    />
                    <NavLink name="Shop" to="shop" />
                    <NavLink name="Blog" to="blog" />
                    <NavLink name="Contact" to="contact" />
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
