import { useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "../../components/Card";
import { shuffledData } from "../../data/mainProducts/CardProducts";
import { isObject, hasObjectProperty } from "../../utils";

import { MdSort } from "react-icons/md";
const Shop = () => {
    // *  useLocation is provided with pathname and etc either
    // *  catch state that sended from input in home page and others
    const { state } = useLocation();
    const [sort, setSort] = useState(false);
    const [option, setOption] = useState("");
    console.log(option);
    // * ternary operator is expression ? some stuff : should be other expression ? expression : ...
    // * filter data with filter that should be sended other pages input and others
    // prettier-ignore
    const [filteredData, setFilteredData] = useState<any[]>(
        // * isObject function control its argument is object or not
        // * if state is null, undefined  or other types except object type 
        // * it return true either return false
        !isObject(state)
            // * if state is not object we return default shuffledData array
            ? shuffledData
            // * hasObjectProperty check object has property
            // * if object has not property of second argument it return false
            : hasObjectProperty(state, "gender") 
                // * this line run after state has gender property
                // * it return filtered cardProduct data with gender
                ? shuffledData.filter(q => q.gender === state.gender)
                : hasObjectProperty(state, "filter") 
                    ? shuffledData.filter(q => q.title.toLowerCase().includes(state.filter.toLowerCase()))
                    // * this last line of code run if state is declared and 
                    // * it's gender and  filter property not declared
                    : shuffledData
    );

    function onSelectHandler(e: any) {
        switch (e.target.value) {
            case "LowToHigh":
                setFilteredData((data) => [
                    ...data.sort((a, b) => a.price - b.price),
                ]);

                break;

            case "HighToLow":
                setFilteredData((data) => [
                    ...data.sort((a, b) => b.price - a.price),
                ]);

                break;
            case "Man":
                setFilteredData(() =>
                    option == "all"
                        ? shuffledData.filter((q) => q.gender == "MAN")
                        : shuffledData.filter(
                              (q) =>
                                  q.gender == "MAN" &&
                                  q.title
                                      .toLowerCase()
                                      .includes(option.toLowerCase()),
                          ),
                );

                break;
            case "Woman":
                setFilteredData(() =>
                    option == "all"
                        ? shuffledData.filter((q) => q.gender == "WOMAN")
                        : shuffledData.filter(
                              (q) =>
                                  q.gender == "WOMAN" &&
                                  q.title
                                      .toLowerCase()
                                      .includes(option.toLowerCase()),
                          ),
                );
                break;
            case "Default":
                window.location.reload();
        }
    }

    const onHandleFilter = (filter: string) => {
        return () => {
            setOption(filter);
            switch (filter) {
                case "all":
                    setFilteredData(() => shuffledData);
                    break;

                case "jacket":
                    setFilteredData(() =>
                        shuffledData.filter((q) =>
                            q.title
                                .toLowerCase()
                                .includes(filter.toLowerCase()),
                        ),
                    );
                    break;
                case "bag":
                    setFilteredData(() =>
                        shuffledData.filter((q) =>
                            q.title
                                .toLowerCase()
                                .includes(filter.toLowerCase()),
                        ),
                    );
                    break;
                case "shoes":
                    setFilteredData(() =>
                        shuffledData.filter((q) =>
                            q.title
                                .toLowerCase()
                                .includes(filter.toLowerCase()),
                        ),
                    );
                    break;
                case "discount":
                    setFilteredData(() =>
                        shuffledData.filter(
                            (q) =>
                                q.discount
                                    ?.toLowerCase()
                                    .includes(filter.toLowerCase()),
                        ),
                    );
                    break;
                default:
                    setFilteredData(() => shuffledData);
            }
        };
    };

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
