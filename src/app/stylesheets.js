import {
    createUseStyles
} from "react-jss";

const useStyles = createUseStyles(
    {
        "@global": {
            "*": {
                transition: "all 0s",
            },
            "@font-face": [
                {
                    fontFamily: "inter-regular",
                    src: "url('/assets/fonts/Inter-Regular.ttf')",
                },
                {
                    fontFamily: "inter-light",
                    src: "url('/assets/fonts/Inter-Light.ttf')",
                },
                {
                    fontFamily: "inter-semibold",
                    src: "url('/assets/fonts/Inter-SemiBold.ttf')",
                },
                {
                    fontFamily: "inter-bold",
                    src: "url('/assets/fonts/Inter-Bold.ttf')",
                },
                {
                    fontFamily: "inter-medium",
                    src: "url('/assets/fonts/Inter-Medium.ttf')",
                },
            ],
            html: {
                userSelect: "none",
                "@media (max-width: 1050px)": {
                    fontSize: "97%",
                },
                "@media (max-width: 800px)": {
                    fontSize: "95%",
                },
                "@media (max-width: 700px)": {
                    fontSize: "90%",
                },
                "@media (max-width: 500px)": {
                    fontSize: "75%",
                },
            },
        },
        container: {
            fontFamily: "inter-semibold",
            height: "100%",
            width: "100%",
        },
    },
    {
        name: "Global",
    }
);
export default useStyles;
