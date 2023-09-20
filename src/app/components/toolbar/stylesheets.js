import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyle = createUseStyles(
    {
        container: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            position: "fixed",
            borderRadius: 50,
            display: "flex",
            height: 100,
            opacity: 0.3,
            width: 300,
            bottom: 50,
            margin: 15,
            "&:hover": {
                opacity: 1,
                cursor: "pointer",
            },
            "& div": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },

            "& img": {
                width: 40,
                height: 40,
                "&:active": {
                    width: 30,
                    height: 30,
                },
            },
        },
        homeContentContainer: {
            backgroundColor: ({ color }) => color.toolbargray,
            height: "100%",
            flex: 1,
            ...clickEvent(),
        },
        aboutContentContainer: {
            backgroundColor: ({ color }) => color.matrixblue,
            height: "100%",
            flex: 1,
            borderRadius: "50px 0 0 50px",
            ...clickEvent(),
        },
        contactContentContainer: {
            borderRadius: "0 50px 50px 0",
            backgroundColor: ({ color }) => color.matrixred,
            height: "100%",
            flex: 1,
            ...clickEvent(),
        },
    },
    {
        name: "Toolbar-Component",
    }
);

export default useStyle;
