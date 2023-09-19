import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            flexDirection: "column",
            justifyContent: "space-between",
            position: "fixed",
            display: "flex",
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
            top: 0,
        },

        topContentContainer: {
            display: "flex",
            width: "100%",
            height: 60,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "space-between",
        },

        botContentContainer: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: 150,
            backgroundColor: "transparent",
            opacity: 0.5,
        },
    },
    {
        name: "Header-Component",
    }
);

export default useStyle;
