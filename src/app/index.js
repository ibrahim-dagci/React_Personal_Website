import { NCoreProvider, useNCoreTheme, useNCoreLocalization } from "ncore-web";
import themes from "./themes";
import locales from "./locales";
import useStyles from "./stylesheets";
import Navigation from "./navigation";
import { Header, Toolbar } from "./components";
import { useEffect } from "react";
const App = () => {
    const { colors } = useNCoreTheme();
    const classes = useStyles({ color: colors });
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
