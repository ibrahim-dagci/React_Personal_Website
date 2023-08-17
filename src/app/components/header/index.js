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
            {MENU.map((item) => {
                return (
                    <Button
                        title={localize(item.key)}
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
        </div>
    );
};
export default Header;
