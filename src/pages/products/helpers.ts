import { shuffledData } from "../../data/mainProducts/CardProducts";

export const SelectHandler = ({
    option,
    setFilteredData,
}: Record<string, any>) => {
    return (e: any) => {
        switch (e.target.value) {
            case "LowToHigh":
                setFilteredData((data: any) => [
                    ...data.sort((a: any, b: any) => a.price - b.price),
                ]);

                break;

            case "HighToLow":
                setFilteredData((data: any) => [
                    ...data.sort((a: any, b: any) => b.price - a.price),
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
    };
};

export const HandleFilter =
    ({ option, setOption, setFilteredData, resetInput }: Record<string, any>) =>
    (filter: string) => {
        return () => {
            resetInput();
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
