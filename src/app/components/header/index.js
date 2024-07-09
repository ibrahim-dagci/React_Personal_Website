import useStyle from "./stylesheets";
import {
    useNCoreLocalization,
    useNCoreTheme, 
} from "ncore-web";
import {
    Switcher 
} from "../../components";

const Header = () => {
    const classes = useStyle();
    const {
        activeLocale, switchLocale 
    } = useNCoreLocalization();
    const {
        switchTheme, activeTheme, colors 
    } = useNCoreTheme();
    return (
        <div className={classes.container}>
            <div className={classes.topContentContainer}>
                <Switcher
                    leftPath={"./assets/icons/en.png"}
                    rightPath={"./assets/icons/tr.png"}
                    onClick={() => {
                        switchLocale(activeLocale === "tr" ? "en" : "tr");
                    }}
                    colors={colors}
                />
                <Switcher
                    leftPath={"./assets/icons/moon.png"}
                    rightPath={"./assets/icons/sun.png"}
                    onClick={() => {
                        switchTheme(activeTheme === "light" ? "dark" : "light");
                    }}
                    colors={colors}
                />
            </div>
        </div>
    );
};
export default Header;

/*
{MENU.map((item) => {
                return (
                    <Button
                        title={localize(item.key)}
                        textColor={
                            window.location.pathname === item.path
                                ? "orangered"
                                : null
                        }
                        onClick={() => {
                            navigate(item.path);
                        }}
                    />
                );
            })}
            <Button
                title={activeLocale}
                onClick={() => {
                    
                }}
            />
*/
