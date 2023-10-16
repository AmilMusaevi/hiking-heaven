import React, { useState, useEffect } from "react";
import { MdSort } from "react-icons/md";
import { useSelector } from "react-redux";

import Card from "../../components/Card";
import { HandleFilter, SelectHandler } from "./helpers";
import { shuffledData } from "../../data/mainProducts/CardProducts";
import { resetInput } from "../../redux/features/pickupInputSlice/pickupInputSlice";

const Shop = () => {
    const [sort, setSort] = useState(false);
    const [option, setOption] = useState("");
    const { inputValue, gender } = useSelector(
        (state: any) => state.allInputValue,
    );

    const filteredGenderData =
        gender !== "ALL"
            ? shuffledData.filter((q) => q.gender === gender)
            : shuffledData;
    const filteredInputData =
        inputValue.length > 0
            ? filteredGenderData.filter((q) =>
                  q.title.toLowerCase().includes(inputValue.toLowerCase()),
              )
            : filteredGenderData;

    console.log(filteredGenderData, gender);

    const [filteredData, setFilteredData] = useState<any[]>(filteredInputData);

    console.log(filteredData, gender, "datt");

    useEffect(() => {
        inputValue.length > 0
            ? setFilteredData(
                  filteredGenderData.filter((q) =>
                      q.title.toLowerCase().includes(inputValue.toLowerCase()),
                  ),
              )
            : filteredGenderData;
    }, [inputValue]);

    const onSelectHandler = SelectHandler({
        option,
        setFilteredData,
    });

    const onHandleFilter = HandleFilter({
        option,
        setOption,
        setFilteredData,
        resetInput,
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
