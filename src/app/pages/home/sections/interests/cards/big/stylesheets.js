import { createUseStyles } from "react-jss";
import { clickEvent } from "../../../../../../themes/helpers";

const useStyles = createUseStyles(
    {
        container: {
            scale: ({ scale }) => scale,
            perspective: 1000,
            height: "24.1rem",
            width: "18.7rem",
            "&:hover $content": {
                transform: "rotateY(180deg)",
                transition: "transform 0.5s",
            },
        },
        content: {
            transformStyle: "preserve-3d",
            transition: "transform 1s",
            position: "relative",
            height: "100%",
            width: "100%",
        },
        back: {
            background: ({ color }) => color.bodyrt,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            justifyContent: "center",
            borderRadius: "1.25rem",
            flexDirection: "column",
            position: "absolute",
            alignItems: "center",
            display: "flex",
            height: "100%",
            width: "100%",
            gap: "1.5rem",
            "& h2": {
                marginLeft: "1.5rem",
                width: "100%",
                color: ({ color }) => color.primary,
            },
            "& p": {
                marginRight: "0.5rem",
                marginLeft: "1rem",
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
        front: {
            background: ({ color }) => color.bodyrt,
            backfaceVisibility: "hidden",
            justifyContent: "center",
            borderRadius: "1.25rem",
            flexDirection: "column",
            position: "absolute",
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
    { name: "Big-Card" }
);
export default useStyles;
