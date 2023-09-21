import { useEffect, useState } from "react";
import useStyle from "./stylesheets";
import { useNCoreTheme } from "ncore-web";

const Switcher = (props) => {
    const [isSwitch, setDisplay] = useState(false);
    const [displayLeft, setDisplayLeft] = useState(null);
    const [displayRight, setDisplayRight] = useState("none !important");
    const { colors } = useNCoreTheme();
    useEffect(() => {
        if (isSwitch) {
            setDisplayLeft("none !important");
            setDisplayRight(null);
        } else {
            setDisplayLeft(null);
            setDisplayRight("none !important");
        }
    }, [isSwitch]);

    const switchDisplay = () => {
        setDisplay(isSwitch === false ? true : false);
    };
    const classes = useStyle({
        color: colors,
        displayLeft: displayLeft,
        displayRight: displayRight,
    });
    return (
        <div className={classes.container} onClick={props.onClick}>
            <div
                className={classes.switcherLeftContainer}
                onClick={switchDisplay}
            >
                <div className={classes.switcherLeft}>
                    <img src={props.leftPath} />
                </div>
            </div>
            <div
                className={classes.switcherRightContainer}
                onClick={switchDisplay}
            >
                <div className={classes.switcherRight} onClick={switchDisplay}>
                    <img src={props.rightPath} />
                </div>
            </div>
        </div>
    );
};
export default Switcher;
