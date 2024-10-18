import React from "react";
import {
    useNCoreTheme 
} from "ncore-web";

const Tab = ({
    className
})=>{
    const {
        colors 
    } = useNCoreTheme();
    
    return <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 921 1130" 
        className={className}
        height="100%"
        width="100%"
        fill="none" 
    >
        <rect 
            fill={colors.screen} 
            stroke-width="0.3"
            height="1128.3" 
            stroke={colors.border}
            width="919.3" 
            rx="50.15" 
            x="0.85" 
            y="0.85" 
        />
        <path 
            d="M1 1053.5H0.5V1054V1080C0.5 1107.34 22.6619 1129.5 50 1129.5H871C898.338 1129.5 920.5 1107.34 920.5 1080V1054V1053.5H920H1Z" 
            stroke={colors.border} 
            fill={colors.border} 
        />
        <circle 
            fill="#929292"
            cy="1092" 
            cx="460" 
            r="25" 
        />
    </svg>;
};

export default Tab;