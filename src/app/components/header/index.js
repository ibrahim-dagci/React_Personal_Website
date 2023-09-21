import useStyle from "./stylesheets";
import { Button, useNCoreLocalization } from "ncore-web";
import { MENU } from "../../constants";
import { useNavigate } from "react-router-dom";
import Toolbar from "../toolbar";
import { Switcher } from "../../components";

const Header = () => {
    const classes = useStyle();
    const { localize, activeLocale, switchLocale } = useNCoreLocalization();
    const navigate = useNavigate();
    return (
        <div className={classes.container}>
            <div className={classes.topContentContainer}>
                <Switcher
                    leftPath={"./assets/icons/moon.png"}
                    rightPath={"./assets/icons/sun.png"}
                    onClick={() => {
                        console.log("localize switched");
                    }}
                />
                <Switcher
                    leftPath={"./assets/icons/moon.png"}
                    rightPath={"./assets/icons/sun.png"}
                    onClick={() => {
                        console.log("theme switched");
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
                    switchLocale(activeLocale === "tr" ? "en" : "tr");
                }}
            />
*/

/*
<div className={classes.toolbar}>
                <div>
                    <img src="./assets/images/logo192.png" />
                </div>
                <div>
                    <img src="./assets/images/logo192.png" />
                </div>
                <div>
                    <img src="./assets/images/logo192.png" />
                </div>
            </div>
            */
