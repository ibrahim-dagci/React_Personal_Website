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
        },
        container: {
            height: "100%",
            justifyContent: "center",
            display: "flex",
        },
    },
    {
        name: "Global",
    }
);
export default useStyles;
