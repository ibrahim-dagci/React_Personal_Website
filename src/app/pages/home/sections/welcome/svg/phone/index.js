import React from "react";
import {
    useNCoreTheme 
} from "ncore-web";

const Phone = ({
    className
})=>{
    const {
        colors 
    } = useNCoreTheme();
    
    return <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 432 934" 
        className={className}
        height="100%" 
        width="100%" 
        fill="none" 
    >
        <rect 
            fill="white"
            height="933" 
            width="431" 
            rx="50.5" 
            x="0.5" 
            y="0.5" 
        />
        <rect 
            stroke={colors.border}
            fill={colors.screen}
            height="933" 
            width="431" 
            rx="50.5" 
            x="0.5" 
            y="0.5" 
        />
        <path 
            d="M133 1H300V18C300 27.3888 292.389 35 283 35H150C140.611 35 133 27.3888 133 18V1Z" 
            fill="black"
        />
        <rect 
            fill="#929292"
            width="150" 
            height="8" 
            x="141" 
            y="914" 
            rx="4" 
        />
    </svg>;

};

export default Phone;