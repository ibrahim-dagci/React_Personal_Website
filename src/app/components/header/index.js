import useStyle from "./stylesheets";
import { useNCoreTheme, useNCoreLocalization } from "ncore-web";
import { Switcher } from "../../components";
import { useEffect } from "react";

const Header = () => {
    const classes = useStyle();
    const { localize, activeLocale, switchLocale } = useNCoreLocalization();
    const { switchTheme, activeTheme } = useNCoreTheme();
    useEffect(() => {
        console.log("rendered Header");
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.topContentContainer}>
                <Switcher
                    leftPath={"./assets/icons/en.png"}
                    rightPath={"./assets/icons/tr.png"}
                    onClick={() => {
                        switchLocale(activeLocale === "tr" ? "en" : "tr");
                        console.log(activeTheme);
                    }}
                />
                <Switcher
                    leftPath={"./assets/icons/moon.png"}
                    rightPath={"./assets/icons/sun.png"}
                    onClick={() => {
                        switchTheme(activeTheme === "light" ? "dark" : "light");
                    }}
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
