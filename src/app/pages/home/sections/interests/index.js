import { useNCoreLocalization, useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";

const Interests = () => {
    const { colors } = useNCoreTheme();
    const { localize } = useNCoreLocalization();
    const clases = useStyles({ color: colors });
    return (
        <div className={clases.container}>
            <h1>{localize("interests")}</h1>
        </div>
    );
};
export default Interests;
