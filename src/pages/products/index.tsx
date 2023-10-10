import { useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card";
import { HandleFilter, SelectHandler } from "./helpers";
import { isObject, hasObjectProperty } from "../../utils";
import { shuffledData } from "../../data/mainProducts/CardProducts";

import { MdSort } from "react-icons/md";
const Shop = () => {
    const { state } = useLocation();
    const [sort, setSort] = useState(false);
    const [option, setOption] = useState("");
    // prettier-ignore
    const [filteredData, setFilteredData] = useState<any[]>(
        !isObject(state)
            ? shuffledData
            : hasObjectProperty(state, "gender")
                ? shuffledData.filter(q => q.gender === state.gender)
                : hasObjectProperty(state, "filter")
                    ? shuffledData.filter(q => q.title.toLowerCase().includes(state.filter.toLowerCase()))
                    : shuffledData
    );

    const onSelectHandler = SelectHandler({
        option,
        setFilteredData,
    });

    const onHandleFilter = HandleFilter({
        option,
        setOption,
        setFilteredData,
    });

    function onClickSort() {
        setSort((prev) => !prev);
    }

    return (
        <section className="product centered">
            <div className="product_option">
                <nav className="product_option_nav">
                    <h2 className="product_option_nav_title">
                        PRODUCT CATEGORIES
                    </h2>
                    <ul className="product_option_nav_menu">
                        <li
                            className="product_option_nav_menu_item"
                            onClick={onHandleFilter("all")}
                        >
                            All
                        </li>
                        <li
                            onClick={onHandleFilter("jacket")}
                            className="product_option_nav_menu_item"
                        >
                            JACKETS
                        </li>
                        <li
                            onClick={onHandleFilter("bag")}
                            className="product_option_nav_menu_item"
                        >
                            BAGS
                        </li>
                        <li
                            onClick={onHandleFilter("shoes")}
                            className="product_option_nav_menu_item"
                        >
                            SHOES
                        </li>
                        <li
                            onClick={onHandleFilter("discount")}
                            className="product_option_nav_menu_item"
                        >
                            DISCOUNTED PRODUCT
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="product_cards">
                <div className="product_cards_info">
                    <p className="product_cards_info_title">
                        Showing all results
                    </p>
                    <div className="product_cards_info_wrapper">
                        <MdSort
                            className="product_cards_info_sort"
                            onClick={onClickSort}
                        ></MdSort>
                        {sort && (
                            <select
                                name="sort"
                                className="sort_details"
                                onChange={onSelectHandler}
                            >
                                <option value="Default">Default</option>
                                <option value="Man">Man</option>
                                <option value="Woman">Woman</option>
                                <option value="LowToHigh">Low to High</option>
                                <option value="HighToLow">High to Low</option>
                            </select>
                        )}
                    </div>
                </div>
                <div className="product_card">
                    {filteredData.map((item) => (
                        <Card
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
