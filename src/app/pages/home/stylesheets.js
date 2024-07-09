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
        },
    },
    {
        name: "Home",
    }
);
export default useStyles;
