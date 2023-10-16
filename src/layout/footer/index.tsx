import { PiArrowRightThin } from "react-icons/pi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="footer centered">
                <div className="footer_card_news">
                    <div className="footer_card_news_info">
                        <h4 className="footer_card_news_info_title">
                            NEWSLETTER
                        </h4>
                        <p className="footer_card_news_info_description">
                            Get free 20% discount for all products on your first
                            order
                        </p>
                    </div>
                    <div className="footer_card_news_bottom">
                        <input
                            type="mail"
                            placeholder="Your Email"
                            className="footer_card_news_bottom_input"
                        />
                        <div className="footer_card_news_bottom_icon">
                            <PiArrowRightThin className="footer_card_news_bottom_icon_item" />
                        </div>
                    </div>
                </div>
                <div className="footer_card_contact">
                    <div className="footer_card_contact_info">
                        <h4 className="footer_card_contact_info_title">
                            QUICK CONTACT
                        </h4>
                        <p className="footer_card_contact_info_description">
                            121 King St, Melbourne VIC 3000,Australia
                        </p>

                        <div className="footer_card_contact_bottom">
                            <BsTelephoneForward className="footer_card_contact_bottom_icon" />
                            <input
                                type="tel"
                                className="footer_card_contact_bottom_input"
                                defaultValue={"(888) 123 4567"}
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div className="footer_card_social">
                    <h4 className="footer_card_social_title">FOLLOW US</h4>
                    <div className="footer_card_social_media">
                        <div className="footer_card_social_media_item">
                            <BiLogoFacebook className="footer_card_social_media_item_icon" />
                        </div>
                        <div className="footer_card_social_media_item">
                            <AiOutlineTwitter className="footer_card_social_media_item_icon" />
                        </div>
                        <div className="footer_card_social_media_item">
                            <BiLogoInstagram className="footer_card_social_media_item_icon" />
                        </div>
                    </div>
                    <div className="footer_card_social_payment">
                        <div className="footer_card_social_payment_item">
                            <FaCcPaypal className="footer_card_social_payment_item_icon" />
                        </div>
                        <div className="footer_card_social_payment_item">
                            <FaCcMastercard className="footer_card_social_payment_item_icon" />
                        </div>
                        <div className="footer_card_social_payment_item">
                            <FaCcVisa className="footer_card_social_payment_item_icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
            <div className="footer_designed">
                <p className="footer_designed_info">Designed by : </p>
                <h3 className="footer_designed_surname">Mr Musaevi</h3>
            </div>
        </footer>
    );
};

export default Footer;
