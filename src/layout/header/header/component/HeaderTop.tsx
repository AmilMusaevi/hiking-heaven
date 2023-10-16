import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineShop } from "react-icons/ai";
import { LiaQuestionCircle } from "react-icons/lia";
import { TiLocationOutline } from "react-icons/ti";
const HeaderInfo = () => {
    return (
        <div className="header_top centered">
            <div className="header_top_left">
                <p className="header_top_left_text">
                    Free delivery on orders over $1499. Don’t miss discount.
                </p>
            </div>
            <div className="header_top_right">
                <Link to={"/contact"}>
                    <div className="header_top_right">
                        <LiaQuestionCircle className="header_top_right_icon" />
                        <p className="header_top_right_text">Help & contact</p>
                    </div>
                </Link>

                <Link to={"/shop"}>
                    <div className="header_top_right">
                        <AiOutlineShop className="header_top_right_icon" />
                        <p className="header_top_right_text">
                            Deals of the day
                        </p>
                    </div>
                </Link>
                <Link to={"/contact"}>
                    <div className="header_top_right">
                        <TiLocationOutline className="header_top_right_icon" />
                        <p className="header_top_right_text">Store location</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HeaderInfo;
