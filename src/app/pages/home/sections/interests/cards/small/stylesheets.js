import { createUseStyles } from "react-jss";
import { clickEvent } from "../../../../../../themes/helpers";

const useStyles = createUseStyles(
    {
        container: {
            transition: ({ transition }) => `${transition}`,
            backgroundColor: ({ color }) => color.bodyrt,
            transform: ({ transform }) => `${transform}`,
            position: ({ position }) => `${position}`,
            right: ({ right }) => `${right}`,
            left: ({ left }) => `${left}`,
            scale: ({ scale }) => scale,
            borderRadius: "1.25rem",
            justifyContent: "center",
            alignItems: "center",
            height: "24.1rem",
            width: "18.7rem",
            display: "flex",
            "&:hover $hoveredContent": {
                display: "flex",
            },
            "&:hover $defaultContent": {
                display: "none",
            },
            "@media (max-width: 1100px)": {
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
            gap: "1.5rem",
            "& h2": {
                width: "100%",
                color: ({ color }) => color.primary,
            },
            "& p": {
                color: "white",
            },
            "& button": {
                backgroundColor: "#D9D9D9",
                padding: "0.5rem 1rem",
                borderRadius: "0.6rem",
                fontSize: "60%",
                border: "none",
                margin: "2rem",
                ...clickEvent(),
            },
        },
        defaultContent: {
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: "100%",
            gap: "6rem",
            "& img": {
                width: "10rem",
                height: "10rem",
            },
            "& h2": {
                color: ({ color }) => color.primary,
            },
        },
    },
    { name: "Small-Card" }
);
export default useStyles;
