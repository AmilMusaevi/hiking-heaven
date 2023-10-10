import React from "react";

const useBoolean = () => {
    const [isOpen, setOpen] = React.useState<boolean>(false);

    const actions = {
        on: () => setOpen(true),
        off: () => setOpen(false),
        toggle: () => setOpen((prev) => !prev),
    };

    return [isOpen, actions] as const;
};

export default useBoolean;
