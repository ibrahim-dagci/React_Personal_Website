import useStyles from "./stylesheets";
import {
    useNCoreTheme 
} from "ncore-web";
import {
    Desktop, 
    Phone,
    Tab
} from "./svg";

const Welcome = () => {
    const {
        colors 
    } = useNCoreTheme();
    const classes = useStyles({
        color: colors 
    });
    return (
        <div className={classes.container}>
            <div className={classes.welcomeContainer}>
                <Desktop className={classes.desktop}/>
                <Tab className={classes.tab}/>
                <Phone className={classes.phone}/>
                <div className={classes.screenContentContainer}>
                    <div className={classes.sinusContainer}>
                        <div className={classes.hearthRate}>
                            <svg
                                enableBackground="new 0 0 2560 1600"
                                viewBox="0 0 2560 1600"
                                className="hearth-svg"
                                version="1.1"
                                id="Layer_1"
                                x="0px"
                                y="0px"
                            >
                                <path
                                    fill="none"
                                    stroke="red"
                                    strokeWidth="39"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    d="M40.7273,821.8017
                                            h268.5091l47.7637-172.9818l112.3091,746.1454l96.8181-1188.9272l67.1273,730.6545l68.4182-112.309l490.5454-0.0001
                                            C1054.7365,708.2018,830.494,570.7199,848.8364,403.5472c24.2142-220.6881,363.3909-259.4727,454.3999-85.2
                                            c141.3546-183.9545,437.1022-141.5187,446.6545,109.7273c5.7213,150.48-239.6946,298.7264-339.5089,396.3091l481.5089,1.291
                                            l63.2546,114.891l70.9999-715.1637l94.2365,1157.9454l112.3091-728.0727l46.4727,165.2363h240.1091"
                                />
                            </svg>
                            <div className={classes.fadeIn}></div>
                            <div className={classes.fadeOut}></div>
                        </div>
                        <div className={classes.messageContainer}>
                            <div className={classes.messageContent}>
                                <span>_Beats</span>
                                <span>_For</span>
                                <span>_Develop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Welcome;
