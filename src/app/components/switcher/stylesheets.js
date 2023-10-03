import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.toolbargray,
            borderRadius: "1.25rem",
            userSelect: "none",
            height: "2.5rem",
            margin: "1rem",
            width: "5rem",
        },
        switcherLeftContainer: {
            display: ({ displayLeft }) => displayLeft,
            backgroundColor: ({ color }) => color.matrixredlight,
            borderRadius: "1.25rem",
            height: "100%",
            width: "100%",
            "&:active": {
                backgroundColor: ({ color }) => color.matrixbluelight,
                "& div": {
                    transform: "translateX(100%)",
                    transition: "transform 0.1s",
                },
            },
        },
        switcherLeft: {
            backgroundColor: ({ color }) => color.matrixred,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1.25rem",
            display: "flex",
            height: "2.5rem",
            width: "2.5rem",
            "& img": {
                height: "1.75rem",
                width: "1.75rem",
            },
        },
        switcherRightContainer: {
            backgroundColor: ({ color }) => color.matrixbluelight,
            display: ({ displayRight }) => displayRight,
            borderRadius: "1.25rem",
            height: "100%",
            width: "100%",
            "&:active": {
                backgroundColor: ({ color }) => color.matrixredlight,
                "& div": {
                    transform: "none",
                    transition: "transform 0.1s",
                },
            },
        },
        switcherRight: {
            backgroundColor: ({ color }) => color.matrixblue,
            transform: "translateX(100%)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1.25rem",
            display: "flex",
            height: "2.5rem",
            width: "2.5rem",
            right: 0,
            "& img": {
                height: "1.75rem",
                width: "1.75rem",
            },
        },
    },
    {
        name: "Switcher-Component",
    }
);

export default useStyle;
