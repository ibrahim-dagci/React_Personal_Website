import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
    {
        container: {
            backgroundColor: ({ color }) => color.body,
            width: "100%",
            height: 500,
        },
    },
    { name: "Interests-Section" }
);
export default useStyles;
