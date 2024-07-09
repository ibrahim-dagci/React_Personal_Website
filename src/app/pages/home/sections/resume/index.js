import useStyles from "./stylesheets";
import {
    useNCoreLocalization,
    useNCoreTheme, 
} from "ncore-web";

const Resume = () => {
    const {
        colors 
    } = useNCoreTheme();
    const {
        localize 
    } = useNCoreLocalization();
    const classes = useStyles({
        color: colors 
    });
    return (
        <div className={classes.container}>
            <div className={classes.whoamiContainer}>
                <h1>{localize("whoami")}</h1>
                <p>{localize("whoamiContent")}</p>
            </div>
            <div className={classes.more}>
                <div className={classes.educations}>
                    <span>
                        <h2 className={classes.vertical}>
                            {localize("educations")}
                        </h2>
                    </span>
                    <span className={classes.educationsContent}>
                        <span>
                            <h3>{localize("department1")}</h3>
                            <h5>{localize("school1")}</h5>
                        </span>
                    </span>
                </div>
                <div className={classes.experience}>
                    <span>
                        <h2 className={classes.vertical}>
                            {localize("experiences")}
                        </h2>
                    </span>
                    <span className={classes.experienceContent}>
                        <span>
                            <h3>Freelance Developer</h3>
                            <h5>{localize("freelance")}</h5>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Resume;
