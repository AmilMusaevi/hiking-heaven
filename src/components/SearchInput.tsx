import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
    const navigate = useNavigate();
    const [state, setState] = useState("");
    const onChangeHandler = (e: any) => setState(e.target.value);

    function onCatchEnter(e: any) {
        if (e.which !== 13) return;

        navigate("/shop", {
            state: {
                filter: state,
            },
        });
    }
    return (
        <div className="searchBarInput">
            <motion.input
                initial={{
                    width: "0px",
                    x: "-55%",
                    y: "-14%",
                }}
                animate={{
                    width: "250px",
                    x: "-55%",
                    y: "-2%",
                }}
                transition={{
                    duration: 0.3,
                    ease: "circOut",
                }}
                className="searchInput"
                type="text"
                placeholder="Search product..."
                onChange={onChangeHandler}
                onKeyPress={onCatchEnter}
            />
        </div>
    );
};

export default SearchInput;
