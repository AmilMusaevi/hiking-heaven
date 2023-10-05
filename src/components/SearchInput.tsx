import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const SearchInput = () => {
    // * React router hooks that it will be change route on used
    const navigate = useNavigate();
    // * Input value
    const [state, setState] = useState("");

    // * On input handler that change state on onChange Listener
    const onChangeHandler = (e: any) => setState(e.target.value);

    // * this expression compare that is key which is pushed not equal Enter 
    // * if is this equal it navigate to product page with state
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
                    x:"-55%",
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
