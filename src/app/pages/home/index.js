import { useNCoreTheme } from "ncore-web";
import { Welcome } from "./sections";
import useStyles from "./stylesheets";

const Home = () => {
    const { colors } = useNCoreTheme();
    const classes = useStyles({ color: colors });
    return (
        <div className={classes.container}>
            <Welcome />
        </div>
    );
};
export default Home;
