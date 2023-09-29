import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        "@global": {
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
                "@media (max-width: 800px)": {
                    fontSize: "95%",
                },
                "@media (max-width: 700px)": {
                    fontSize: "90%",
                },
            },
        },
        container: {
            fontFamily: "inter-semibold",
            justifyContent: "center",
            display: "flex",
            height: "100%",
            width: "100%",
        },
    },
    {
        name: "Global",
    }
);
export default useStyles;
