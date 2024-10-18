import React from "react";
import {
    useNCoreTheme 
} from "ncore-web";

const Desktop = ({
    className
})=>{
    const {
        colors 
    } = useNCoreTheme();
    
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 921 705"
        className={className}
        height="100%"
        width="100%"
        fill="none"
    >
        <rect
            stroke={colors.border}
            strokeWidth="0.3"
            height="572.3"
            width="919.3"
            fill="black"
            rx="50.15"
            x="0.85"
            y="0.85"
        />
        <path
            d="M1 462H920V526C920 553.062 898.062 575 871 575H50C22.938 575 1 553.062 1 526V462Z"
            fill={colors.border}
        />
        <circle 
            fill="#929292" 
            cy="519" 
            cx="461" 
            r="25" 
        />
        <rect
            fill={colors.border}
            height="115"
            width="200"
            x="361"
            y="575"
        />
        <path
            d="M297 695C297 692.239 299.239 690 302 690H620C622.761 690 625 692.239 625 695V700C625 702.761 622.761 705 620 705H302C299.239 705 297 702.761 297 700V695Z"
            fill={colors.border}
        />
        <path
            d="M1 52C1 24.3858 23.3858 2 51 2H870C897.614 2 920 24.3858 920 52V463H1V52Z"
            fill={colors.screen}
        ></path>
    </svg>;
};

export default Desktop;