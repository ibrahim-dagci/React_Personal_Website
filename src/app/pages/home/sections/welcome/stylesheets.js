import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.body,
            width: "100%",
        },
        iMacContainer: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 40,
            height: 650,
        },
        screenContentContainer: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
            height: "85%",
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
            color: ({ color }) => color.message,
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
            width: "100%",
            height: "100%",
            backgroundColor: ({ color }) => color.body,
            top: 0,
            right: 0,
            animation: "$heartRateIn 2.5s linear infinite",
        },
        fadeOutDark: {
            backgroundClor: ({ color }) => color.body,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: "-120%",
            animation: "$heartRateOut 2.5s linear infinite",
            background: `rgb(0,0,0)`,
            background: `-moz-linear-gradient(left, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
            background: `-webkit-linear-gradient(left, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
            background: `-o-linear-gradient(left, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
            background: `-ms-linear-gradient(left, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%)`,
            background: `linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 80%, rgba(255, 255, 255, 0) 100%)`,
        },
        fadeOutLight: {
            backgroundClor: ({ color }) => color.body,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: "-120%",
            animation: "$heartRateOut 2.5s linear infinite",
            background: `rgb(255,255,255)`,
            background: `-moz-linear-gradient(left, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 255) 100%)`,
            background: `-webkit-linear-gradient(left, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 255) 100%)`,
            background: `-o-linear-gradient(left, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 255) 100%)`,
            background: `-ms-linear-gradient(left, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 100%)`,
            background: `linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 80%, rgba(255, 255, 255, 0) 100%)`,
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
    { name: "Welcome" }
);
export default useStyles;
