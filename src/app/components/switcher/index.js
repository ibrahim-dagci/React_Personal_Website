import useStyle from "./stylesheets";
import {
    useEffect, 
    useState, 
} from "react";

const Switcher = ({
    leftPath = "null",
    rightPath = "null",
    colors = {
        leftCircle: "gray",
        leftContainer: "lightgray",
        righCircle: "gray",
        rightContainer: "lightgray",
    },
    onClick,
}) => {
    const [isSwitch, setDisplay] = useState(false);
    const [transform, setTransform] = useState(0);

    useEffect(() => {
        if (isSwitch) {
            setTransform(100);
        } else {
            setTransform(0);
        }
    }, [isSwitch]);

    const switchButton = () => {
        setDisplay(isSwitch === false ? true : false);
    };
    const classes = useStyle({
        color: colors,
        transform,
        leftPath,
        isSwitch: isSwitch,
    });
    return (
        <div className={classes.container} onClick={onClick}>
            <div className={classes.innerContainer} onClick={switchButton}>
                <div className={classes.circle}>
                    <img src={isSwitch === false ? leftPath : rightPath} />
                </div>
            </div>
        </div>
    );
};
export default Switcher;
