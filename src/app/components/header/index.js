import useStyle from "./stylesheets";
import { Button, useNCoreLocalization } from "ncore-web";
import { MENU } from "../../constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const classes = useStyle();
    const { localize, activeLocale, switchLocale } = useNCoreLocalization();
    const navigate = useNavigate();
    return (
        <div className={classes.container}>
            <div className={classes.topContentContainer}>
                <button
                    style={{
                        margin: 15,
                        opacity: 0.5,
                        width: 80,
                        height: 40,
                    }}
                >
                    button1
                </button>
                <button
                    style={{
                        margin: 15,
                        opacity: 0.5,
                        width: 80,
                        height: 40,
                    }}
                >
                    button1
                </button>
            </div>
            <div className={classes.botContentContainer}>
                <button style={{ opacity: 0.5, width: 300, height: 100 }}>
                    button1
                </button>
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
