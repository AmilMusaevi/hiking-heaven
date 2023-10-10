import store1 from "../../assets/images/store-img-1.jpg";
import store2 from "../../assets/images/store-img-2.jpg";
import store3 from "../../assets/images/store-img-3.jpg";
const Contact = () => {
    return (
        <div className="contact">
            <section className="connection">
                <div className="connection_leftSide">
                    <h2 className="connection_leftSide_title">
                        Reach Out To Us
                    </h2>
                    <div className="connection_leftSide_address">
                        <h4 className="connection_leftSide_address_title">
                            By Address
                        </h4>
                        <p className="connection_leftSide_address_info">
                            Please reach us: 121 King St, Melbourne VIC 3000,
                            Australia
                        </p>
                    </div>
                    <div className="connection_leftSide_email">
                        <h4 className="connection_leftSide_email_title">
                            By email
                        </h4>
                        <p className="connection_leftSide_email_info">
                            Please email us and we’ll get back to you within 24
                            hours: info@example.com
                        </p>
                    </div>
                    <div className="connection_leftSide_phone">
                        <h4 className="connection_leftSide_phone_title">
                            By phone
                        </h4>
                        <p className="connection_leftSide_phone_info">
                            Call our store: 888 123 4567
                        </p>
                    </div>
                </div>
                <div className="connection_formSide">
                    <h2 className="connection_formSide_title">
                        Send Your Request
                    </h2>
                    <form typeof="submit" className="form">
                        <div>
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div>
                            <input type="tel" placeholder="Phone" required />
                        </div>
                        <textarea
                            name="message"
                            id="message"
                            cols={40}
                            rows={8}
                            placeholder="Message"
                        />
                        <button type="submit" className="formSide_button">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <section className="store centered">
                <h2 className="store_title">Our Stores</h2>
                <div className="store_cards">
                    <div className="store_cards_item">
                        <div className="store_cards_item_img">
                            <img src={store1} alt="store" />
                        </div>
                        <div className="store_cards_item_info">
                            <p className="store_cards_item_info_city">
                                NEW YORK
                            </p>
                            <h3 className="store_cards_item_info_title">
                                Thrift
                            </h3>
                            <p className="store_cards_item_info_description">
                                There are many variations of passages of Lorem
                                available denounce
                            </p>
                        </div>
                    </div>

                    <div className="store_cards_item">
                        <div className="store_cards_item_img">
                            <img src={store2} alt="store" />
                        </div>
                        <div className="store_cards_item_info">
                            <p className="store_cards_item_info_city">
                                WASHINGTON
                            </p>
                            <h3 className="store_cards_item_info_title">
                                Shophouse
                            </h3>
                            <p className="store_cards_item_info_description">
                                On the other hand, we denounce with righteous
                                indignation{" "}
                            </p>
                        </div>
                    </div>

                    <div className="store_cards_item">
                        <div className="store_cards_item_img">
                            <img src={store3} alt="store" />
                        </div>
                        <div className="store_cards_item_info">
                            <p className="store_cards_item_info_city">
                                LAS VEGAS
                            </p>
                            <h3 className="store_cards_item_info_title">
                                Leisurewear
                            </h3>
                            <p className="store_cards_item_info_description">
                                Righteous indignation and dislike we denounce
                                with righteous
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
