import useStyles from "./stylesheets";
import {
    useNCoreTheme 
} from "ncore-web";
import {
    Interests,
    Welcome,
    Contact,
    Resume,
} from "./sections";

const Home = () => {
    const {
        colors 
    } = useNCoreTheme();
    const classes = useStyles({
        color: colors 
    });
    return (
        <div className={classes.container}>
            <Welcome />
            <Resume />
            <Interests />
            <Contact />
        </div>
    );
};
export default Home;
