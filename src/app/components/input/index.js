import useStyle from "./stylesheet";
import React from "react";

const TextInput = ({
    placeholder,
    onChangeText,
    className,
    value,
    id,
    ...props
})=>{
    const classes = useStyle();

    const propClasses = className ? Array.isArray(className) ? className : [className] : [];
    
    return <div className={classes.container}>
        <input 
            placeholder={placeholder} 
            onChange={(event)=>{
                if(onChangeText) onChangeText(event.target.value);
            }}
            className={[
                classes.input,
                ...propClasses
            ].join(" ")}
            id={id}
            {...props}
        >
            {value}
        </input>
    </div>;
};

export default TextInput;