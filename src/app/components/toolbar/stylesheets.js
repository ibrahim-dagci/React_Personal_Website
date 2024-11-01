import {
    createUseStyles 
} from "react-jss";
import {
    clickEvent 
} from "../../themes/helpers";

const useStyle = createUseStyles(
    {
        container: {
            transform: "translateX(-50%)",
            justifyContent: "center",
            transition: 'transform 0.3s ease',
            alignItems: "center",
            borderRadius: "3rem",
            flexDirection: "row",
            userSelect: "none",
            position: "fixed",
            display: "flex",
            height: "6rem",
            width: "18rem",
            bottom: "1rem",
            left: "50%",
            "&:hover": {
                cursor: "pointer",
                opacity: 1,
            },
            "& div": {
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
            },

            "& img": {
                height: "2.5rem",
                width: "2.5rem",
                "&:active": {
                    height: "2rem",
                    width: "2rem",
                },
            },
        },
        homeContentContainer: {
            backgroundColor: ({
                color 
            }) => color.toolbargray,
            height: "100%",
            flex: 1,
            ...clickEvent(),
        },
        aboutContentContainer: {
            backgroundColor: ({
                color 
            }) => color.rightCircle,
            height: "100%",
            flex: 1,
            borderRadius: "3rem 0 0 3rem",
            ...clickEvent(),
        },
        contactContentContainer: {
            borderRadius: "0 3rem 3rem 0",
            backgroundColor: ({
                color 
            }) => color.leftCircle,
            height: "100%",
            flex: 1,
            ...clickEvent(),
        },
        toolbarHidden: {
            transform: 'translateY(200%) translateX(-50%)',
            overflow: 'hidden',
        },
    },
    {
        name: "Toolbar-Component",
    }
);

export default useStyle;
