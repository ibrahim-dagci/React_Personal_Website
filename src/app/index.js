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
import Navigation from "./navigation";
import { Header, Toolbar } from "./components";
const App = () => {
    const classes = useStyles();
    return (
        <div
            style={{
                height: "100%",
                justifyContent: "center",
                display: "flex",
            }}
        >
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
                themes,
                locales,
            }}
        >
            <App />
        </NCoreProvider>
    );
};

export default contextAPI;
