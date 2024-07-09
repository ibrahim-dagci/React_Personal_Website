import useStyles from "./stylesheets";
import {
    useNCoreTheme 
} from "ncore-web";

const Contact = (props) => {
    const {
        colors 
    } = useNCoreTheme();
    const clasess = useStyles({
        color: colors 
    });
    return <div className={clasess.container}></div>;
};
export default Contact;
