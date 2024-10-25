import {
    createUseStyles 
} from "react-jss";

const useStyle = createUseStyles(
    {
        container: {
            alignItems:"flex-start",
            padding:"0.5rem",
            display:"flex",
        },
        input:{
            backgroundColor:"rgba(111, 111, 111, 0.3)",
            fontFamily:"inter-regular",
            outline:"none",
            borderRadius:"0.5rem",
            border:"none",
            width:"100%",
            fontSize:"1rem",
            padding:"1.1rem",
            "&:focus":{
                border:"2px solid red",
                outline:"none"
            }
        }
    },
    {
        name: "TextArea-Component",
    }
);

export default useStyle;