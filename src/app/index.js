import Navigation from "./navigation";
import useStyles from "./stylesheets";
import locales from "./locales";
import themes from "./themes";
import {
    NCoreProvider, 
    useNCoreTheme,
} from "ncore-web";
import {
    Header, Toolbar 
} from "./components";

const App = () => {
    const {
        colors 
    } = useNCoreTheme();
    const classes = useStyles({
        color: colors 
    });
    return (
        <div className={classes.container}>
            <Header />
            <Navigation />
            <Toolbar />
        </div>
    );
};

const contextAPI = () => {
    return (
        <NCoreProvider
            config={{
                initialThemeKey: "dark",
                themes,
                locales,
            }}
        >
            <App />
        </NCoreProvider>
    );
};

export default contextAPI;
