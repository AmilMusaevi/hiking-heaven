import Button from "../../components/Button";
import Header from "../../layout/header/header";
import HeaderInfo from "../../layout/header/header/component/HeaderTop";

const Home = () => {
    return (
        <>
            <HeaderInfo />
            <section className="main">
                <Header />

                <div className="main_section">
                    <div className="main_section_entry">
                        <h2 className="main_section_entry_title">
                            HIKING PRODUCT OUTLET
                        </h2>

                        <p className="main_section_description">
                            Wand crossbow phoenix levicorpus sirius. Easy
                            raw-steak half-blood petrified veela house lupin it.
                        </p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
                {/* <div className="main_section">
                    <div className="main_section_entry">
                        <h2 className="main_section_entry_title">
                            HIKING PRODUCT OUTLET
                        </h2>
                        <p className="main_section_entry_explain">
                            Wand crossbow phoenix levicorpus sirius. Easy
                            raw-steak half-blood petrified veela house lupin it.
                        </p>
                        <p className="main_section_entry_rightSide">HIKING</p>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div> */}
            </section>
        </>
    );
};

export default Home;
