import { createUseStyles } from "react-jss";
import { clickEvent } from "../../../../../../themes/helpers";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.bodyRT,
            scale: ({ scale }) => scale,
            borderRadius: "1.25rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            height: "24.1rem",
            width: "18.7rem",
            display: "flex",
            "&:hover $hoveredContent": {
                display: "flex",
            },
            "&:hover $defaultContent": {
                display: "none",
            },
        },
        hoveredContent: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            display: "none",
            height: "100%",
            width: "100%",
            gap: "5rem",
            "& h2": {
                width: "100%",
                color: ({ color }) => color.primary,
            },
            "& p": {
                color: ({ color }) => color.body,
            },
            "& button": {
                backgroundColor: "#D9D9D9",
                padding: "0.5rem 1rem",
                borderRadius: "0.6rem",
                fontSize: "50%",
                border: "none",
                margin: "2rem",
                ...clickEvent(),
            },
        },
        defaultContent: {
            display: "flex",
            width: "100%",
            height: "100%",
        },
    },
    { name: "Small-Card" }
);
export default useStyles;
