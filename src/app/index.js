import Navigation from "./navigation";
import useStyles from "./stylesheets";
import locales from "./locales";
import themes from "./themes";
import {
    NCoreProvider, 
    useNCoreTheme,
} from "ncore-web";
import {
    Footer,
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
            <Footer/>
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
