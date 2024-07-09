import {
    createUseStyles 
} from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            backgroundColor: "lightgray",
            borderRadius: "1.25rem",
            userSelect: "none",
            height: "2.5rem",
            margin: "1rem",
            width: "5rem",
        },
        innerContainer: {
            backgroundColor: ({
                color, isSwitch 
            }) =>
                isSwitch === false ? color.leftContainer : color.rightContainer,
            borderRadius: "1.25rem",
            userSelect: "none",
            height: "2.5rem",
            width: "5rem",
            "& div": {
                transform: ({
                    transform 
                }) => `translateX(${transform}%)`,
                transition: "transform 0.3s",
            },
        },
        circle: {
            backgroundColor: ({
                color, isSwitch 
            }) =>
                isSwitch === false ? color.leftCircle : color.rightCircle,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1.25rem",
            display: "flex",
            height: "2.5rem",
            width: "2.5rem",
            "& img": {
                height: "1.75rem",
                width: "1.75rem",
                display: ({
                    leftPath 
                }) =>
                    leftPath === "null" ? "none" : "block",
            },
        },
    },
    {
        name: "Switcher-Component",
    }
);

export default useStyle;
