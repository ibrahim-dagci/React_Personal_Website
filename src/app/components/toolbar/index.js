import useStyle from "./stylesheets";
import { useNCoreTheme } from "ncore-web";

const Toolbar = () => {
    const { colors } = useNCoreTheme();
    const classes = useStyle({ color: colors });
    return (
        <div className={classes.container}>
            <div className={classes.aboutContentContainer}>
                <img src="./assets/icons/information.png"></img>
            </div>
            <div className={classes.homeContentContainer}>
                <img src="./assets/icons/home.png"></img>
            </div>
            <div className={classes.contactContentContainer}>
                <img src="./assets/icons/contact.png"></img>
            </div>
        </div>
    );
};
export default Toolbar;
