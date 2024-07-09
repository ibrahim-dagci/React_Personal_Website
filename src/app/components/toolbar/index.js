import useStyle from "./stylesheets";
import {
    useNCoreTheme 
} from "ncore-web";

const Toolbar = () => {
    const {
        colors 
    } = useNCoreTheme();
    const classes = useStyle({
        color: colors 
    });
    return (
        <div className={classes.container}>
            <div className={classes.aboutContentContainer}>
                <img src="./assets/icons/information.png" />
            </div>
            <div className={classes.homeContentContainer}>
                <img src="./assets/icons/home.png" />
            </div>
            <div className={classes.contactContentContainer}>
                <img src="./assets/icons/contact.png" />
            </div>
        </div>
    );
};
export default Toolbar;
