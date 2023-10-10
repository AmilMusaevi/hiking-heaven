import React from "react";

const useOutsideClick = (ref: any, onClose?: () => void) => {
    React.useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (onClose) onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

export default useOutsideClick;
