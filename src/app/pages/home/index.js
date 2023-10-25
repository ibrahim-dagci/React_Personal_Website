import { useNCoreTheme } from "ncore-web";
import { Welcome, Resume, Interests, Contact } from "./sections";
import useStyles from "./stylesheets";

const Home = () => {
    const { colors } = useNCoreTheme();
    const classes = useStyles({ color: colors });
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
