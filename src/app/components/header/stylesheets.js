import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: "transparent",
            flexDirection: "column",
            position: "fixed",
            display: "flex",
            width: "100%",
            height: 60,
            top: 0,
        },

        topContentContainer: {
            justifyContent: "space-between",
            backgroundColor: "transparent",
            flexDirection: "row",
            display: "flex",
            height: "100%",
            width: "100%",
        },
    },
    {
        name: "Header-Component",
    }
);

export default useStyle;
