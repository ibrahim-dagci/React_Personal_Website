import useStyle from "./stylesheet";
import React from "react";
import {
    useNCoreLocalization,
    useNCoreTheme
} from "ncore-web";

const Footer = () => {
    const {
        colors
    } = useNCoreTheme();
    const {
        localize
    } = useNCoreLocalization();
    const classes = useStyle({
        color:colors
    });

    return <div className={classes.container}>
        <span>
            {localize("footer")}
        </span>
        <span>
            v1.0
        </span>
    </div>;
};

export default Footer;
