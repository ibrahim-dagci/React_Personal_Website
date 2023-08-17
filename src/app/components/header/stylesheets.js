import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            flexDirection: "row",
            alignItems: "center",
            display: "flex",
        },
    },
    {
        name: "Header-Component",
    }
);

export default useStyle;
