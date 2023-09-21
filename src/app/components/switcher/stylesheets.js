import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.toolbargray,
            borderRadius: 20,
            height: 40,
            margin: 15,
            width: 80,
            userSelect: "none",
        },
        switcherLeftContainer: {
            display: ({ displayLeft }) => displayLeft,
            backgroundColor: ({ color }) => color.matrixredlight,
            borderRadius: 20,
            height: "100%",
            width: "100%",
            "&:active": {
                backgroundColor: ({ color }) => color.matrixbluelight,
                "& div": {
                    transform: "translateX(100%)",
                    transition: "transform 0.5s",
                },
            },
        },
        switcherLeft: {
            backgroundColor: ({ color }) => color.matrixred,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            display: "flex",
            height: 40,
            width: 40,
            "& img": {
                height: 30,
                width: 30,
            },
        },
        switcherRightContainer: {
            display: ({ displayRight }) => displayRight,
            backgroundColor: ({ color }) => color.matrixbluelight,
            borderRadius: 20,
            height: "100%",
            width: "100%",
            "&:active": {
                backgroundColor: ({ color }) => color.matrixredlight,
                "& div": {
                    transform: "none",
                    transition: "transform 0.5s",
                },
            },
        },
        switcherRight: {
            backgroundColor: ({ color }) => color.matrixblue,
            transform: "translateX(100%)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            display: "flex",
            height: 40,
            width: 40,
            right: 0,
            "& img": {
                height: 30,
                width: 30,
            },
        },
    },
    {
        name: "Switcher-Component",
    }
);

export default useStyle;
