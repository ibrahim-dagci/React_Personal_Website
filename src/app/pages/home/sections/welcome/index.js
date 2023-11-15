import { useNCoreTheme } from "ncore-web";
import useStyles from "./stylesheets";
import { useEffect, useState } from "react";
const Welcome = () => {
    const { colors, activeTheme } = useNCoreTheme();
    const classes = useStyles({ color: colors });
    return (
        <div className={classes.container}>
            <div className={classes.iMacContainer}>
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 921 705"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.85"
                        y="0.85"
                        width="919.3"
                        height="572.3"
                        rx="50.15"
                        fill="black"
                        stroke={colors.imacborder}
                        strokeWidth="0.3"
                    />
                    <path
                        d="M1 462H920V526C920 553.062 898.062 575 871 575H50C22.938 575 1 553.062 1 526V462Z"
                        fill={colors.imacborder}
                    />
                    <circle cx="461" cy="519" r="25" fill="#929292" />
                    <rect
                        x="361"
                        y="575"
                        width="200"
                        height="115"
                        fill={colors.imacpot}
                    />
                    <path
                        d="M297 695C297 692.239 299.239 690 302 690H620C622.761 690 625 692.239 625 695V700C625 702.761 622.761 705 620 705H302C299.239 705 297 702.761 297 700V695Z"
                        fill={colors.imacborder}
                    />
                    <path
                        d="M1 52C1 24.3858 23.3858 2 51 2H870C897.614 2 920 24.3858 920 52V463H1V52Z"
                        fill={colors.imacscreen}
                    ></path>
                    <foreignObject
                        x="2.05"
                        y="2.05"
                        width="917"
                        height="468"
                        className={classes.test}
                    >
                        <div className={classes.screenContentContainer}>
                            <div className={classes.sinusContainer}>
                                <div className={classes.hearthRate}>
                                    <svg
                                        version="1.1"
                                        id="Layer_1"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 2560 1600"
                                        enableBackground="new 0 0 2560 1600"
                                        className="hearth-svg"
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
                    </foreignObject>
                </svg>
            </div>
        </div>
    );
};
export default Welcome;
