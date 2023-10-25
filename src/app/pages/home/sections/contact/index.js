import { useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";

const Contact = (props) => {
    const { colors } = useNCoreTheme();
    const clasess = useStyles({ color: colors });
    return <div className={clasess.container}></div>;
};
export default Contact;
