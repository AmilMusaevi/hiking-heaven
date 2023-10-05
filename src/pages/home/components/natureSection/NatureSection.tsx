import Button from "../../../../components/Button";

const NatureSection = () => {
    return (
        <section className="nature_section">
            <div className="nature_section_leftSide">
                <div className="nature_section_leftSide_circle">
                    <h4 className="nature_section_leftSide_circle_sale">40%</h4>
                    <h4 className="nature_section_leftSide_circle_off">OFF</h4>
                </div>
            </div>
            <div className="nature_section_rightSide">
                <h2 className="nature_section_rightSide_title">
                    ENJOY YOUR HIKING NATURE BEAUTY
                </h2>
                <p className="nature_section_rightSide_info">
                    Wand crossbow phoenix levicorpus sirius. Easy raw-steak
                    half-blood petrified veela house lupin it.
                </p>
                <Button
                    buttonNav="/shop"
                    initialBg={"black"}
                    secondBg={"white"}
                    text="SHOP NOW"
                />
            </div>
        </section>
    );
};

export default NatureSection;
