import React from "react";
import useBoolean from "./useBoolean";

const useOpenModals = () => {
    const [isFirstOpen, firstOpenAction] = useBoolean();
    const [isSecondOpen, secondOpenAction] = useBoolean();

    function onClose() {
        firstOpenAction.off();
        secondOpenAction.off();
    }

    function onClickHandler() {
        firstOpenAction.toggle();
    }

    return [[isFirstOpen, isSecondOpen], onClose, onClickHandler] as const;
};

export default useOpenModals;
