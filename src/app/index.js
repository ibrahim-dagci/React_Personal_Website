import {
    Button,
    NCoreProvider,
    Text,
    useNCoreTheme,
    useNCoreLocalization,
} from "ncore-web";
import themes from "./themes";
import locales from "./locales";
import useStyles from "./stylesheets";
import light from "./themes/variants/light";
const App = () => {
    const { activeTheme, switchTheme } = useNCoreTheme();
    const { activeLocale, switchLocale, localize } = useNCoreLocalization();
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Text>
                selamlar dostlar! {activeTheme} {activeLocale}
            </Text>
            <br></br>
            <br></br>
            <Text>{localize("test")}</Text>
            <br></br>
            <br></br>
            <Button
                title="theme switch!"
                size="small"
                onClick={() => {
                    var themeSwitch = activeTheme;
                    themeSwitch = activeTheme == "dark" ? "light" : "dark";
                    switchTheme(themeSwitch);
                }}
            ></Button>
            <Button
                title="Locale switch!"
                size="small"
                onClick={() => {
                    var localeSwitch = activeLocale;
                    localeSwitch = activeLocale == "en" ? "tr" : "en";
                    switchLocale(localeSwitch);
                }}
            ></Button>
        </div>
    );
};

const contextAPI = () => {
    return (
        <NCoreProvider
            config={{
                themes,
                locales,
            }}
        >
            <App />
        </NCoreProvider>
    );
};

export default contextAPI;
