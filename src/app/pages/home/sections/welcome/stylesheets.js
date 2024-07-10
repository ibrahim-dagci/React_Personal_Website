import {
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({
                color 
            }) => color.body,
            width: "100%",
            height: "100vh",
        },
        iMacContainer: {
            "@media (max-width: 1050px)": {
                paddingTop: 60,
            },
            justifyContent: "center",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
            display: "flex",
            paddingTop: 50,
            height: "75%",
            
        },
        screenContentContainer: {
            justifyContent: "center",
            alignItems: "center",
            position:"absolute",
            overflow:"hidden",
            display: "flex",
            height: "50%",
            width: "40%",
            top:10
        },
        sinusContainer: {
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
            display: "flex",
            height: "70%",
            width: "100%",
        },
        hearthRate: {
            justifyContent: "center",
            position: "absolute",
            display: "flex",
            height: "100%",
            width: "100%",
        },
        messageContainer: {
            justifyContent: "center",
            position: "absolute",
            display: "flex",
            height: "100%",
            width: "100%",
            bottom: 15,
        },
        messageContent: {
            color: ({
                color 
            }) => color.message,
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            userSelect: "none",
            display: "flex",
            fontSize: 17,
            bottom: 0,
        },
        fadeIn: {
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: ({
                color 
            }) => color.screen,
            top: 0,
            right: 0,
            animation: "$heartRateIn 2.5s linear infinite",
        },
        fadeOut: {
            backgroundClor: ({
                color 
            }) => color.screen,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: "-120%",
            animation: "$heartRateOut 2.5s linear infinite",
            background: ({
                color 
            }) =>
                `linear-gradient(to right, ${color.rgb1} 0%, ${color.rgb1} 80%, rgba(255, 255, 255, 0) 100%)`,
        },

        "@keyframes heartRateIn": {
            "0%": {
                width: "100%",
            },
            "50%": {
                width: "0",
            },
            "100%": {
                width: "0",
            },
        },

        "@keyframes heartRateOut": {
            "0%": {
                left: "-120%",
            },
            "30%": {
                left: "-120%",
            },
            "100%": {
                left: "0",
            },
        },
    },
    {
        name: "Welcome" 
    }
);
export default useStyles;
